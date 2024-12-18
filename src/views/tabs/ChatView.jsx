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

function ChatView(props) {
    const handleVerifyMessageCB = async (message) => {
      props.onVerify(message);
      console.log("verified");
      
    }
    
    return (
      <div className="chat">
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={props.typing ? <TypingIndicator content="assistant typing" /> : null}
            >
              {props.messages.map((message, i) => (
                <div key={i} className="message-container">
                  <Message model={message} />

                  {/* Render the button only for incoming messages */}
                  {message.direction === "incoming" && (
                    <VerifyButton message={message} onVerify={handleVerifyMessageCB} />
                  )}

                </div>
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={props.onSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    );
  }
  

export default ChatView;