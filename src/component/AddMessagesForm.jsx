import React, {useState, useEffect, createContext} from 'react';

const AddMessagesForm = ({handleMessage}) => {
  const [state, setState] = useState({text: '', from: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://taslima-chat-server.glitch.me/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({from: state.from, text: state.text}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('success:', data);
        handleMessage();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    //setNewPost({ from: setName, text: setMessage })
    state.text = '';
    state.from = '';
  };

  function handleChange(event) {
    const value = event.target.value;
    setState({...state, [event.target.name]: value});
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{width: '50%'}}>
        <div className="form-group">
          <label htmlFor="name">From</label>
          <input
            type="name"
            className="form-control"
            id="name-textbox"
            name="from"
            value={state.from}
            placeholder="Enter Message Here"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="message"
            className="form-control"
            id="message-textbox"
            name="text"
            value={state.text}
            placeholder="Enter your message here"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMessagesForm;
