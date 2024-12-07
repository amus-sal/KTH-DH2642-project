import React from "react";
import 'stream-chat-react/dist/css/v2/index.css';
import { Chat, ChannelList, Channel, Window, ChannelHeader, MessageList, MessageInput, Thread } from "stream-chat-react";
// import {useCreateChatClient } from 'stream-chat-react';
import { useState, useEffect } from 'react';
import { StreamChat } from "stream-chat";
// import { LoadingIndicator } from "stream-chat-react-native";

// your Stream app information
const apiKey = process.env.REACT_APP_STREAM_API_KEY;
const userId = 'nat';
const userName = 'Natassa';

const user = {
  id: userId,
  name: userName,
  image:
    'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png',
};

// const sort = { last_message_at: -1 };
// const filters = {
//   type: 'messaging',
//   members: { $in: [userId] },
// };
// const options = {
//   limit: 10,
// };


// import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

// import 'stream-chat-react/dist/css/v2/index.css';


const ChatTab = () => {
  const [channel, setChannel] =  useState();
  const [client, setClient] = useState();
  

  useEffect(() => {
    async function init(){
      const chatClient = StreamChat.getInstance(apiKey);
      await chatClient.connectUser(user, chatClient.devToken(user.id));
      const channel = chatClient.channel('livestream', 'spacex', {
        image: 'https://goo.gl/Zefkbx',
        name: 'SpaceX launch discussion',
        members:[user.id]
      });
      await channel.watch();  

      setChannel(channel);
      setClient(chatClient);  
    }
    init();
    if (client) return ()=>client.disconnectUser()

  },[])

  if (!channel || !client) return <h1>Loading</h1>;
    
  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatTab;

// const ChatView = () => {
//   return (
//     <div className="tab-content">
//       <h3>Chat</h3>
//       <p>Chat functionality coming soon!</p>
//     </div>
//   );
// };

// export default ChatView;
