// models/chatModel.js
import { makeAutoObservable } from "mobx";
import chatService from "../services/chatService";

class ChatModel {
  messages = [];
  typing = false;

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(message) {
    this.messages.push(message);
  }

  async processMessage(apiKey) {
    this.typing = true;
    try {
      const userMessage = this.messages[this.messages.length - 1];
      const response = await chatService.sendMessage(apiKey, userMessage.message);

      const botMessage = {
        message: response,
        sender: "bot",
        direction: "incoming",
      };
      this.addMessage(botMessage);
    } catch (error) {
      this.addMessage({
        message: "An error occurred. Please try again.",
        sender: "bot",
        direction: "incoming",
      });
    } finally {
      this.typing = false;
    }
  }
}

const chatModel = new ChatModel();
export default chatModel;