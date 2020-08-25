import React, {useState, useEffect} from 'react';
import MessageCard from './MessageCard';
import AddMessageForm from './AddMessagesForm';

const FetchMessages = () => {
  const [allMessages, setAllMessages] = useState([])
  // console.log(message);
  // console.log(allMessages);
  const handleMessage = (message) => {
    setAllMessages(message);
  }
  useEffect(() => {
    fetch(
      `https://taslima-chat-server.glitch.me/messages`,
      
    )
      .then((res) => res.json())
      .then((data) => handleMessage(data));
  },[allMessages]);
  
  console.log('All messages', allMessages);
  return (<MessageCard messages={allMessages} />);
};

export default FetchMessages;
