require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Simulation = require("../models/Simulation");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const isDev = false; // Toggle true if testing locally

let quotaExceeded = false; // Toggle to test fallback response

async function handleSimulation(req, res) {
  try {
    const { decision, age, goals, risk, detailLevel, scope } = req.body;

    if (!decision || !age || !goals || !risk) {
      return res.status(400).json({
        error: "Missing required fields: decision, age, goals, risk.",
      });
    }

    // Convert scope into descriptive text
    const scopeText = {
      "1 year": "within the next year",
      "3 years": "over a 3-year period",
      "5 years": "over a 5-year journey",
    }[scope || "5 years"];

    // Adjust prompt detail level
   const isDetailed = (detailLevel || "").toLowerCase() === "detailed";

const detailText = isDetailed
  ? `Provide in-depth descriptions, breaking down phases over time. Include cascading emotional, financial, and personal consequences. Use professional, grounded analysis.`
  : `Keep the explanation simple and high-level. Summarize emotional, financial, and personal impacts in 2–3 sentences.`;

const futureCount = isDetailed ? 4 : 2;

    // Final dynamic prompt
    const prompt = `
The user is facing a life decision: "${decision}".

User details:
- Age: ${age}
- Goals: ${goals}
- Risk tolerance: ${risk}

Generate ${futureCount} realistic future outcomes ${scopeText}. Each future should:
- Be based on a specific action the user might take
- ${detailText}

Format:
Future 1:
Title: [Short title]
Description: [Outcome summary]
Pros:
- ...
Cons:
- ...

Repeat for ${futureCount} different futures.
Use clear, helpful language tailored to the user’s situation.
`;

    let response;

    if (isDev || quotaExceeded) {
      // Fallback mock response for development
      response = `
Future 1:
Title: Follow Your Passion
Description: You choose to pursue a creative field. In the short term, finances are tight, but emotionally you feel alive. Long term, you find financial balance and personal fulfillment.
Pros:
- Emotional satisfaction
- Personal growth
Cons:
- Initial financial instability
- Lack of structure

Future 2:
Title: Take the Stable Job
Description: You accept a corporate job. It provides immediate financial security but leaves you feeling emotionally unfulfilled over time.
Pros:
- Financial security
- Predictable path
Cons:
- Potential burnout
- Regret over missed passions
      `;
    } else {
      const model = genAI.getGenerativeModel({
        model: "models/gemini-1.5-flash",
      });

      const result = await model.generateContent(prompt);
      const geminiResponse = await result.response;
      response = geminiResponse.text();
    }

    const simulation = new Simulation({
      decision,
      age,
      goals,
      risk,
      detailLevel,
      scope,
      result: response,
      createdAt: new Date(),
    });

    await simulation.save();

    return res.status(200).json({ result: response });
  } catch (error) {
    console.error("❌ Simulation error occurred:", error);
    return res.status(500).json({ error: "Failed to generate simulation." });
  }
}

module.exports = { handleSimulation };
