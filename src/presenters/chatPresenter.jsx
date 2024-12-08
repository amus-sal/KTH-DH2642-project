// presenters/ChatTab.js
import React from "react";
import { observer } from "mobx-react-lite";

import ChatView from "../views/tabs/ChatView";

const ChatTab = observer(({model}) => {
  const handleSend = async (message) => {
    const userMessage = {
      message,
      sender: "user",
      direction: "outgoing",
    };

    model.addMessage(userMessage);
    await model.processMessage(process.env.REACT_APP_OPENAI_API_KEY);
  };

  return (
    <ChatView
      messages={model.messages}
      typing={model.typing}
      onSend={handleSend}
    />
  );
});

export default ChatTab;
