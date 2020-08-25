import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './component/Join';

import FetchMessages from './component/FetchMessages';
import AddMessagesForm from './component/AddMessagesForm';

const App = () => {
  
  
  return (
    
     <div>

      <FetchMessages />
      <AddMessagesForm/>
    </div>
  );
};

export default App;
