import React, {useState} from 'react';


const MessageCard = ({ messages}) => {
  // console.log(messages);
  return (
    <div>
      {messages.map((message) => {
        return (
          <div className="card">
            <div className="card-body" key={message.id}>
              <h5 className="card-title">{message.from}</h5>
              <h5 className="card-text">{message.text}</h5>
              <button className="btn btn-danger mr-3">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MessageCard;
