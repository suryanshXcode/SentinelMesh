const { generateText } = require("ai");
const { createGoogleGenerativeAI } = require("@ai-sdk/google");
require("dotenv").config({ path: ".env.local" });

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
});

async function test() {
  try {
    const { text } = await generateText({
      model: google("gemini-1.5-flash"),
      prompt: "Reply with 'Hello'"
    });
    console.log("SUCCESS:", text);
  } catch (error) {
    console.error("ERROR:", error.message || error);
  }
}
test();
