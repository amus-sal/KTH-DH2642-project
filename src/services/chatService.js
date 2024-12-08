// services/chatService.js
import axios from "axios";

const chatService = {
  async sendMessage(apiKey, message) {
    const url = "https://api.openai.com/v1/chat/completions"; // Example OpenAI API URL
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
    const body = {
      model: "gpt-3.5-turbo", // Use the appropriate model name
      messages: [{ role: "user", content: message }],
    };

    try {
      const response = await axios.post(url, body, { headers });
      return response.data.choices[0]?.message?.content;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  },
};

export default chatService;
