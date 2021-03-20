import React, { Component } from 'react';
import './Chat.css';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

class Chat extends Component {
  state = {  }
  render() {
    const child = this.props.children;
    return (
      <Link to={`/chat/${child.name}`}>
      <div className="chat">
        <Avatar className="chat_image" alt={child.name} src={child.profilePic} />
        <div className="chat_details">
          <h2>{child.name}</h2>
          <p>{child.message}</p>
        </div>
        <p className="chat_timestamp">{child.timestamp}</p>
      </div>
      </Link>
    );
  }
}
 
export default Chat;