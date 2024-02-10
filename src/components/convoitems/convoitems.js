import React from 'react';
import './convoitems.css';

export default function ConversationsItem({ props }) {
  return (
      <div className="conversation-container">
          <p className="con-icon">{props.name[0]}</p>
          <p className="con-title">{props.name}</p>
          <p className="con-lastMessage">{props.lastMessage}</p>
          <p className="con-timeStamp">{props.timeStamp}</p>
    </div>
  )
}