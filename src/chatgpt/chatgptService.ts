import axios from "axios";

// Define the base URL for the OpenAI API
const OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci/completions";

// Replace this with your own OpenAI API key
const OPENAI_API_KEY = process.env.ChatGPT_API_URL;

import OpenAI from "openai";
const openai = new OpenAI();

export const callChatGPT = async (prompt: string) => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4o", // Specify the model you want to use
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling the OpenAI API:", error);
    throw error;
  }
};
