import React from "react";
import { observer } from "mobx-react-lite";

import chatModel from "../models/chatModel";
import ChatView from "../views/tabs/ChatView";

const ChatTab = observer(() => {
  const handleSend = (message) => {
    const userMessage = {
      message,
      sender: "user",
      direction: "outgoing",
    };

    chatModel.addMessage(userMessage);
    chatModel.processMessage(process.env.REACT_APP_OPENAI_API_KEY);
  };

  return (
    <ChatView
      messages={chatModel.messages}
      typing={chatModel.typing}
      onSend={handleSend}
    />
  );
});

export default ChatTab;
