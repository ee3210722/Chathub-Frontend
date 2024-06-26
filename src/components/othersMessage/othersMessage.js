import React from 'react';
import './othersMessage.css';

export default function OthersMessage({ msg }) {
  
  const convertToLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`);
  };

  return (
    <div className="other-message-container">
      <p className="other-icon">{msg.sender.name[0]}</p>
      <div className="other-messageBox">
        <p className="other-title"><b>{msg.sender.name}</b></p>
        <p className="other-lastMessage" dangerouslySetInnerHTML={{ __html: convertToLinks(msg.content) }}></p>
        <p className="other-timeStamp">{new Date(msg.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
}
