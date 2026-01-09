# langchain-node-app

A Node.js application built with LangChain and OpenAI's API that allows you to interact with GPT-4o through a simple command-line interface.

## Description

This project demonstrates how to build a simple chatbot using LangChain and OpenAI's API. It accepts user prompts via command-line arguments and returns AI-generated responses.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- An [OpenAI API key](https://platform.openai.com/api-keys)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/kempes406/langchain-node-app.git
cd langchain-node-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy the example environment file:
   ```bash
   cp env.example .env
   ```
   - Edit the `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

## Usage

### Running the Application

To run the application with a prompt:

```bash
npm start -- "Your prompt here"
```

**Example:**
```bash
npm start -- "What is the capital of France?"
```

### Development Mode

For development with auto-reload on file changes:

```bash
npm run dev
```

Then pass your prompt as an argument when prompted.

### Building the Project

To compile TypeScript to JavaScript:

```bash
npm run build
```

The compiled output will be in the `dist` directory.

## Available Scripts

- `npm start` - Run the application with ts-node
- `npm run dev` - Run in development mode with nodemon (auto-reload)
- `npm run build` - Compile TypeScript to JavaScript

## Project Structure

```
langchain-node-app/
├── src/
│   └── index.ts       # Main application entry point
├── .env               # Environment variables (create from env.example)
├── env.example        # Example environment file
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

## Technologies Used

- **[LangChain](https://www.langchain.com/)** - Framework for developing applications powered by language models
- **[OpenAI API](https://openai.com/)** - AI model provider (GPT-4o)
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[dotenv](https://github.com/motdotla/dotenv)** - Environment variable management
- **[ts-node](https://typestrong.org/ts-node/)** - TypeScript execution environment
- **[nodemon](https://nodemon.io/)** - Development tool for auto-reloading

## How It Works

1. The application reads a user prompt from command-line arguments
2. It initializes the OpenAI chat model (GPT-4o) using your API key
3. The prompt is sent to the model wrapped in a `HumanMessage`
4. The AI-generated response is displayed in the console

## Notes

- Make sure to keep your `.env` file secure and never commit it to version control
- The application uses GPT-4o model with a temperature of 0.7 for balanced creativity
- Ensure you have sufficient OpenAI API credits for making requests

## License

ISC