import React, { useState, useEffect } from 'react';
import MessageCard from './MessageCard';



const FetchMessages = ({ refresh, deleteMessage }) => {
  console.log('refresh' + refresh);
  const [allMessages, setAllMessages] = useState([]);

  const handleMessage = (message) => {
    setAllMessages(message);
  };

  useEffect(() => {
    fetch(`https://taslima-chat-server.glitch.me/messages`)
      .then((res) => res.json())
      .then((data) => handleMessage(data));
  }, [refresh, deleteMessage]);

  console.log('All messages', allMessages);
  return (
    <MessageCard
      messages={allMessages}
      handleDelete={handleMessage}
    />

  );
};

export default FetchMessages;
