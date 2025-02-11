# Quick AI SDK 🚀
Easily integrate AI-powered features into your website with Quick AI SDK.

🔹 AI-powered content moderation  
🔹 AI-enhanced text transformation (fix grammar, rewrite, etc.)  
🔹 AI-driven image filtering

👉 No need for complex backend modifications or prompt engineering – just plug and play!

📌 API Reference: [Quick AI API Docs](https://api.aidirty.work/docs) [OpenAPI Specification](https://api.aidirty.work/openapi)

---

## ✨ Features
✅ Automatic AI content moderation (detects offensive, harmful, or inappropriate content)  
✅ Text enhancement (grammar fixes, style improvements, rephrasing)  
✅ NSFW image filtering (automatically detects and removes inappropriate images)  
✅ Easy integration (works with both frontend and backend)  
✅ Works in browsers & Node.js

---

## 📦 Installation

### Using npm (recommended for Node.js & modern frontend frameworks)

```bash
npm install quick-ai
```

For in-browser usage, you can use the UMD build:

```typescript
import { QuickAiSdkClient } from "quick-ai";
const ai = new QuickAiSdkClient("cli_abc123");
```

For server-side usage (Node.js), you can use the Node.js build:
```typescript
import { QuickAiSdkNode } from "quick-ai";
const ai = new QuickAiSdkNode("ser_cde345");
```

The difference between the QuickAiSdkClient and QuickAiSdkNode is how they handle the API authorization. The QuickAiSdkClient is designed to be used in the browser in white-listed origins, where the API key is exposed to the client. The QuickAiSdkNode is designed to be used in a server-side environment, where the API key is kept secret.

### Using CDN (for vanilla JS projects)

```html
<script src="https://cdn.jsdelivr.net/npm/quick-ai/dist/quick-ai-sdk.umd.js"></script>
<script>
  const ai = new QuickAiSdkClient("YOUR_CLIENT_API_KEY");
  ai.checkContent("Hello world").then(console.log);
</script>
```

---

## 🚀 Usage

### 1️⃣ Content Moderation

```typescript
import { QuickAiSdkClient } from "quick-ai";

const ai = new QuickAiSdkClient("YOUR_API_KEY");

ai.checkContent("This is some user-generated content")
  .then(response => console.log("Moderation result:", response))
  .catch(error => console.error("Error:", error));
```

### 2️⃣ Text Grammar check and correction

```typescript
ai.checkGrammar("This is some user-generated content")
  .then(response => console.log("Check result:", response))
  .catch(error => console.error("Error:", error));
```

### 3️⃣ Image Filtering

```typescript
ai.filterImage("This is some user-generated content")
  .then(response => console.log("Check result:", response))
  .catch(error => console.error("Error:", error));
```
---

## 📄 License

This project is licensed under the MIT License – feel free to use it in your projects!

---

## 📮 Need Help?

📘 [API Docs](https://api.aidirty.work/docs)  
🐞 Report Issues: [GitHub Issues](https://github.com/quickaiwork/quick-ai-sdk/issues)  
📧 [Support](https://aidirty.work/support)

---