import { observer } from "mobx-react-lite";

import ChatView from "../views/tabs/ChatView";

const ChatTab = observer(({chatModel}) => {
  if (!chatModel) {
    return <div>Error: Chat model is not initialized.</div>;
  }
  const handleSend = async (message) => {
    const userMessage = {
      message,
      sender: "user",
      direction: "outgoing",
    };

    chatModel.addMessage(userMessage);
    await chatModel.processMessage(process.env.REACT_APP_OPENAI_API_KEY);
  };
  const verifyAnswer = async (verifiedAnswer) => {
    chatModel.saveVerifiedQA(verifiedAnswer)
  }
  return (
    <ChatView
      messages={chatModel.messages}
      typing={chatModel.typing}
      onSend={handleSend}
      onVerify={verifyAnswer}
    />
  );
});

export default ChatTab;
