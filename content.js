let regenerateBtn = null;

document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  const selectedText = selection.toString().trim();

  if (selectedText.length > 0 && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    showRegenerateButton(rect, selectedText, range);
  } else {
    removeRegenerateButton();
  }
});

function showRegenerateButton(rect, selectedText, range) {
  removeRegenerateButton();

  regenerateBtn = document.createElement("button");
  regenerateBtn.innerText = "Regenerate";
  regenerateBtn.className = "regenerate-btn";

  regenerateBtn.style.top = `${rect.bottom + window.scrollY + 5}px`;
  regenerateBtn.style.left = `${rect.left + window.scrollX}px`;

  regenerateBtn.onclick = () => {
    regenerateText(selectedText, range);
    removeRegenerateButton();
  };

  document.body.appendChild(regenerateBtn);
}

function removeRegenerateButton() {
  if (regenerateBtn) {
    regenerateBtn.remove();
    regenerateBtn = null;
  }
}

async function regenerateText(text, range) {
  const API_KEY = "sk-"; // Replace with your OpenRouter key

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Rewrite this to be more clear, creative, and effective:\n\n"${text}"`
          }
        ]
      })
    });

    const data = await response.json();
    const enhanced = data.choices?.[0]?.message?.content?.trim();

    if (enhanced) {
      replaceSelectedText(enhanced);
    } else {
      alert("❌ Failed to get response from LLM.");
    }
  } catch (error) {
    alert("❌ API error: " + error.message);
    console.error(error);
  }
}

function replaceSelectedText(newText) {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode(newText));
}