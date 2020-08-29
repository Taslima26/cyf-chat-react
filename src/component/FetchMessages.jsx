import React, { useState, useEffect } from 'react';
import MessageCard from './MessageCard';



const FetchMessages = ({ refresh }) => {
  const [allMessages, setAllMessages] = useState([]);

  const handleMessage = (message) => {
    setAllMessages(message);
  };

  useEffect(() => {
    fetch(`https://taslima-chat-server.glitch.me/messages`)
      .then((res) => res.json())
      .then((data) => handleMessage(data));
  }, [refresh, allMessages]);

  return (
    <MessageCard
      messages={allMessages}
      handleDelete={handleMessage}
    />

  );
};

export default FetchMessages;
