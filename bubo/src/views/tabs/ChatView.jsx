import React from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react';
import { useState, useEffect } from 'react';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const ChatTab = () => {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {message:"Hello, I am chatGPT", sender:"chatGPT", direction:"incoming"}
    ]);

    const handleSend = async (message)=>{
        const newMessage = {
            message:message,
            sender:"user",
            direction: "outgoing"
        }
        const newMessages = [...messages, newMessage];
        // update messages state
        setMessages(newMessages);
        // send to chat gpt
        setTyping(true);
        await processMessage(newMessages);
    }

    async function processMessage(chatMessages){
        
        let apiMessages = chatMessages.map((messageObj) =>{
            console.log("messageObj: " + messageObj.role);
            let role = "";
            let direction="";
            if (messageObj.sender==="assistant"){
                role = "assistant";
                direction = "incoming";
            }
            else{
                role = "user";
                direction = "outgoing";
            }
            return {"role":role, "content": messageObj.message, "direction":direction};
        });

        const systemMessage = {
            role:"system",
            content: "You are an assistant for employees of a company. Answer accuratelly and cheerfully"
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [systemMessage,...apiMessages]
        }
        await fetch("https://api.openai.com/v1/chat/completions",{
            method:"POST",
            headers: {
                "Authorization": "Bearer " + OPENAI_API_KEY,
                "Content-Type":"application/json"     
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data)=>{
            return data.json();
        }).then((data)=>{
            console.log(data.choices[0].message.content);
            setMessages([...chatMessages, {message:data.choices[0].message.content, sender:"assistant", direction:"incoming"}])
        })
        setTyping(false);

    }

    return (
        <div style={{position:"relative", height:"800px", width: "700px"}}>
            <MainContainer>
                <ChatContainer>
                    <MessageList 
                    scrollBehavior="smooth"
                    typingIndicator= { typing ? <TypingIndicator content="assistant typing"/>: null}>
                        {messages.map((message, i)=>
                            {
                                return <Message key={i} model={message}/>
                            }
                        )
                        }
                    </MessageList>
                    <MessageInput placeholder='Type message here' onSend={handleSend}></MessageInput>
                </ChatContainer>
            </MainContainer>

        </div>
    );
}

export default ChatTab;