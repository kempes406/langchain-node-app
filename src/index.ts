import * as dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

dotenv.config();

const run = async () => {
  // process.argv[0] is the node executable
  // process.argv[1] is the script file path
  // process.argv[2] is the first argument passed by the user
  const userQuery = process.argv[2];

  if (!userQuery) {
    console.error("Please provide a prompt. Usage: npm start -- \"Your prompt here\"");
    process.exit(1);
  }

  const chat = new ChatOpenAI({
    model: "gpt-4o",
    temperature: 0.7,
  });

  console.log(`Sending query: "${userQuery}"...`);

  // Pass the user's dynamic input to the model
  const response = await chat.invoke([
    new HumanMessage(userQuery)
  ]);

  console.log("\nResponse:\n", response.content);
};

run().catch((err) => console.error(err));
