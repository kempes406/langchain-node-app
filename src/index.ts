import * as dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

// Load environment variables
dotenv.config();

const run = async () => {
  // Initialize the model
  const chat = new ChatOpenAI({
    model: "gpt-4o", // or "gpt-3.5-turbo"
    temperature: 0.7,
  });

  // Create a message
  const message = new HumanMessage("Hello! Explain TypeScript in one sentence.");

  // Call the model
  const response = await chat.invoke([message]);

  console.log("Response:", response.content);
};

run().catch((err) => console.error(err));
