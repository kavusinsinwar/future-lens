require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGemini() {
  try {
   const model = genAI.getGenerativeModel({
  model: "models/gemini-1.5-flash", // fixed name!
});

const result = await model.generateContent("Tell me a joke about AI.");
const response = await result.response;
const text = response.text();
console.log("✅ Gemini Response:\n", text);

  } catch (err) {
    console.error("❌ Gemini test failed:", err);
  }
}

testGemini();
