# 🤖 Prompt Enhancer – Chrome Extension

**Prompt Enhancer** is a lightweight Chrome extension that empowers users to instantly improve selected text on any webpage using a powerful language model (LLM). Whether you're refining your writing, boosting creativity, or clarifying your message, this tool makes it effortless with a single click.

---

## ⚙️ Key Features

- 🔍 **Smart Text Selection**: Highlight any text on a webpage.
- 🔁 **Instant Regeneration**: A floating **"Regenerate"** button appears near the selection.
- ✨ **Enhanced Output**: The selected text is rewritten to be clearer, more creative, and more effective using an LLM.
- 🔄 **Seamless Replacement**: The original text is replaced with the enhanced version in-place.

---

## 📁 Project Structure

The project directory contains the following files:

Chrome_Extension_Project/
<br>
│
├── Screenshots/        
├── background.js       
├── content.js         
├── icon.png            
├── manifest.json       
├── popup.html          
├── style.css          
└── README.md           

---

## 💻 Installation Guide

To install the extension locally:

1. **Clone or download** this repository to your computer.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right toggle).
4. Click **"Load unpacked"** and select the project folder.
5. The extension will now appear in your Chrome toolbar.

---

## 🚀 How to Use

1. Open any webpage.
2. Select the text you want to enhance.
3. Click the **"Regenerate"** button that appears.
4. The selected text will be replaced with an improved version generated by the LLM.

---

## 🔐 API Configuration

To enable the LLM functionality, you’ll need an API key from [OpenRouter](https://openrouter.ai)

1. Sign up and obtain your API key.
2. Open `content.js` and replace the placeholder with your key:

```javascript
const API_KEY = "your-api-key-here"; // Replace with your OpenRouter key
```
