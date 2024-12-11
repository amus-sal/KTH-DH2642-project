import React from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react';

function ChatView({ messages, typing, onSend }) {

    return (
      <div sclassName="chat">
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={typing ? <TypingIndicator content="assistant typing" /> : null}
              >
                {messages.map((message, i) => (
                  <Message key={i} model={message} />
                ))}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={onSend} />
            </ChatContainer>
          </MainContainer>
        </div>
      );
    }

export default ChatView;