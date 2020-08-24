import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [from, setFrom] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder=""
            className="joinInput"
            type="text"
            onChange={(event) => setFrom(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder=""
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
          <Link
            onClick={(event) =>
              !from || !room ? event.preventDefault() : null
            }
            to={`/chat?from=${from} & room? room=${room}`}
          >
            <button className="button mt-20" type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
