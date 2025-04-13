import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch"; // install this if needed: npm install node-fetch

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "docs")));
app.use(express.json());

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;
  const formattedPrompt = prompt.replace(/\s+/g, "-") + Date.now(); // Add timestamp to avoid cache
  const imageUrl = `https://image.pollinations.ai/prompt/${formattedPrompt}`;
  res.json({ imageUrl });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
