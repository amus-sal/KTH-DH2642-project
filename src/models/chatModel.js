import { makeObservable, observable, action } from "mobx";

class ChatModel {
  messages = [
    { message: "Hello, I am chatGPT", sender: "chatGPT", direction: "incoming" }
  ];
  typing = false;

  constructor() {
    makeObservable(this, {
      messages: observable,
      typing: observable,
      addMessage: action,
      setTyping: action,
      processMessage: action,
    });
  }

  addMessage(newMessage) {
    this.messages.push(newMessage);
  }

  setTyping(isTyping) {
    this.typing = isTyping;
  }

  async processMessage(apiKey) {
    const systemMessage = {
      role: "system",
      content: "You are an assistant for employees of a company. Answer accurately and cheerfully."
    };

    // Translate the user input to ChatGPT api input schema
    const apiMessages = this.messages.map((msg) => ({
      role: msg.sender === "chatGPT" ? "assistant" : "user",
      content: msg.message,
    }));

    // Synthesize request
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    this.setTyping(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });

      const data = await response.json();
      const assistantMessage = {
        message: data.choices[0].message.content,
        sender: "chatGPT",
        direction: "incoming",
      };

      this.addMessage(assistantMessage);
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      this.setTyping(false);
    }
  }
}

const chatModel = new ChatModel();
export default chatModel;

