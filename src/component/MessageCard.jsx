import React, {useState} from 'react';
import DeleteMessage from './DeleteMessage';

const MessageCard = ({ messages }) => {
  const [deleteMessage, setDeleteMessage] = useState();
  const handleDeleteMessage = () => {
    setDeleteMessage(deleteMessage - 1);
    console.log(deleteMessage);
  };


  return (
    <div>
      {messages.map((message) => {
        return (
          <div className="card">
            <div className="card-body" key={message.id}>
              <h5 className="card-title">{message.from}</h5>
              <h5 className="card-text">{message.text}</h5>
              <button className="btn btn-danger mr-3">Edit</button>
              <DeleteMessage message={message} handleDeleteMessage={handleDeleteMessage}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MessageCard;
