import React, {useState, useEffect} from 'react';
import MessageCard from './MessageCard';
import AddMessageForm from './AddMessagesForm';

const FetchMessages = ({message,allMessages}) => {
  // console.log(message);
  // console.log(allMessages);
  useEffect(() => {
    fetch(
      `https://taslima-chat-server.glitch.me/messages`,
      
    )
      .then((res) => res.json())
      .then((data) => message(data));
  },[allMessages]);
  
  console.log('All messages', allMessages);
  return (<MessageCard messages={allMessages} />);
};

export default FetchMessages;
