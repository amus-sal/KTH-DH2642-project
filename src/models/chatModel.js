// models/chatModel.js
import { makeAutoObservable } from "mobx";
import chatService from "../services/chatService";

class ChatModel {
  messages = [];
  typing = false;

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

  async saveVerifiedQA(verifiedMessage) {
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
      // console.log("Wuestion message:" + questionMessage.message, "index: " + messageIndex);
      // console.log("questionMessage.direction " + questionMessage.direction);
      // Validate the direction to ensure it's an incoming question
      if (questionMessage.direction !== "outgoing") {
        console.error("The message before is not a valid question.");
        return;
      }
  
      // Prepare the content to save
      // const questionAnswerContent = `Question: ${questionMessage.message}\nAnswer: ${verifiedMessage.message}`;
      console.log("Question: " + questionMessage.message);
      console.log("Answer: " + verifiedMessage.message);

      // // Create a unique file name for this Q&A pair
      // const timestamp = Date.now();
      // const fileName = `verified-qa/${timestamp}.txt`;
  
      // // Create a reference to the storage location
      // const storageRef = ref(storage, fileName);
  
      // // Convert content to a Blob
      // const fileBlob = new Blob([questionAnswerContent], { type: "text/plain" });
  
      // // Upload the file to Firebase Storage
      // await uploadBytes(storageRef, fileBlob);
  
      // console.log(`Q&A saved successfully at ${fileName}`);
    } catch (error) {
      console.error("Error saving verified Q&A:", error);
    }
  }
  
}

const chatModel = new ChatModel();
export default chatModel;