# PetConnect Backend

PetConnect Backend is a lightweight TypeScript and Express API that supports the PetConnect application. It currently provides an AI pet-care chat endpoint connected to the Hugging Face chat-completions API.

## Overview

The server accepts chat questions from the PetConnect frontend, forwards them to the configured Hugging Face model, and returns the generated response. CORS is configured for the local Vite frontend at `http://localhost:5173`.

## Features

- Express server written in TypeScript
- CORS support for frontend requests
- AI pet-care chat endpoint at `POST /chat/postQ`
- Hugging Face model integration
- Environment-based configuration with dotenv
- JSON request and response handling

## Technology

| Technology | Purpose |
| --- | --- |
| TypeScript | Provides typed backend source code |
| Node.js | Runs the server |
| Express | Provides the HTTP API and routing |
| node-fetch | Sends requests to the Hugging Face API |
| dotenv | Loads configuration from environment variables |
| CORS | Allows requests from the frontend application |
| Hugging Face API | Generates chat responses |

## Getting Started

### Prerequisites

- Node.js 16 or newer
- npm 8 or newer
- A Hugging Face access token
- A Hugging Face chat model identifier

### Install dependencies

```bash
cd pet-connect-backend
npm install
```

Create a `.env` file in the project root:

```env
HF_TOKEN=your-hugging-face-token
HF_MODEL=your-model-identifier
```

### Run the server

```bash
npx ts-node Server.ts
```

The server starts on `http://localhost:3000`.

## API

### Send a chat question

`POST /chat/postQ`

Request body:

```json
{
  "message": "What should I do if my dog is not eating?"
}
```

Example response:

```json
{
  "reply": "Generated response from the configured model"
}
```

## Frontend Integration

The frontend repository is available at [PetConnect Frontend](https://github.com/Pet-connect-website/pet-connect-frontend). Configure the frontend chat service to send requests to this backend at `http://localhost:3000/chat/postQ` during local development.

## Repository

[PetConnect Backend on GitHub](https://github.com/Pet-connect-website/pet-connect-backend)
