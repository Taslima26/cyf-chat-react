import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './component/Join';

import FetchMessages from './component/FetchMessages';
import AddMessagesForm from './component/AddMessagesForm';

const App = () => {
  const [allMessages, setAllMessages] = useState([])
  const handleMessage = (message) => {
    setAllMessages(message);
  }

  
  return (
    
     <div>

      <FetchMessages message={handleMessage} allMessages={allMessages}/>
      <AddMessagesForm message={handleMessage}/>
    </div>
  );
};

export default App;
