import {useState }  from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react';
import '../../styles.css';

function VerifyButton({ message, onVerify }) {
  const [isVerified, setIsVerified] = useState(false);

  const handleClick = () => {
    setIsVerified(!isVerified)
    onVerify(message);
  };

  return (
    <div className="verify-button-container">
      <button 
        onClick={handleClick}
        className={`verify-button ${isVerified ? 'circle' : 'box'}`}
      >
        {isVerified ? '✓' : 'Verify'}
      </button>
    </div>
  );
}

function ChatView({ messages, typing, onSend }) {
    const handleVerifyMessage = async (message) => {
      console.log("verified");
    }
    
    return (
      <div className="chat">
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="assistant typing" /> : null}
            >
              {messages.map((message, i) => (
                <div key={i} className="message-container">
                  <Message model={message} />

                  {/* Render the button only for incoming messages */}
                  {message.direction === "incoming" && (
                    <VerifyButton message={message} onVerify={handleVerifyMessage} />
                  )}

                </div>
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={onSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    );
  }
  

export default ChatView;