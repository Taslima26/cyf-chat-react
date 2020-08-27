import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './component/Join';

import FetchMessages from './component/FetchMessages';
import AddMessagesForm from './component/AddMessagesForm';

const App = () => {
  const [addNewMessage, setNewAddMessage] = useState(0);

  const handleAddNewMessages = () => {
    setNewAddMessage(addNewMessage + 1);
    console.log(addNewMessage);
  };

  return (
    <div>
      <FetchMessages refresh={addNewMessage} />
      <AddMessagesForm handleMessage={handleAddNewMessages} />
    </div>
  );
};

export default App;
