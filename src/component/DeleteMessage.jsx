import React, { useState } from 'react';

const DeleteMessage = ({ message, handleDeleteMessage }) => {
  const handleDelete = (e) => {
    fetch(`https://taslima-chat-server.glitch.me/messages/` + message.id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => console.log('success:', data));
    handleDeleteMessage(message.id);
  };


  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteMessage;
