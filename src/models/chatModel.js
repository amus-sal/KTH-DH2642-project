// models/chatModel.js
import { makeAutoObservable } from "mobx";
import chatService from "../services/chatService";

class ChatModel {
  messages = [];
  typing = false;
  verificationClicked=false
  verifiedMessages = [];

  constructor() {
    makeAutoObservable(this);
  }
  reset() {
    this.messages = [];
    this.typing = false;
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

  async saveVerifiedQA(verifiedMessage, dbModel) {
    try {
      // Find the index of the verified message in the messages list
      const messageIndex = this.messages.findIndex(
        (msg) => msg.message === verifiedMessage.message
      );
  
      // Ensure the message exists and there is a previous message
      if (messageIndex === -1 || messageIndex === 0) {
        console.error("Invalid message: no matching question found.");
        return;
      }
  
      // Retrieve the question (previous message in the list)
      const questionMessage = this.messages[messageIndex - 1];

      // Validate the direction to ensure it's an incoming question
      if (questionMessage.direction !== "outgoing") {
        console.error("The message before is not a valid question.");
        return;
      }

      this.verifiedMessages.push({"question":questionMessage.message, "answer": verifiedMessage.message});
      this.verificationClicked=true;
    } catch (error) {
      console.error("Error saving verified Q&A:", error);
    }

  }
  
}

export default ChatModel;