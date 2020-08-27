import React, {useState} from 'react';

const DeleteMessage = ({message, handleDeleteMessage}) => {
  const handleDelete = (id) => {
    //let id = event.target.id;
    //console.log(id);
    return fetch(`https://taslima-chat-server.glitch.me/messages/` + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => console.log('success:', data));
      handleDeleteMessage();
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
