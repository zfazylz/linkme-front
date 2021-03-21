import React, {Component} from "react";
// import "../../components/Chats/Chat.css";
import Avatar from "@material-ui/core/Avatar";
// import {Link} from "react-router-dom";

class MatchProfile extends Component {
  state = {};

  render() {
    const child = this.props;
    return (
      <a href={
        child.aituUID ?
          `https://i2.app.link/open_chat_with?user_id=${child.aituUID}` : "/matches"
      }>
        <div className="chat">
          <Avatar
            className="chat_image"
            alt={child.name}
            src={child.profilePic}
          />
          <div className="chat_details">
            <h2>{child.name}</h2>
          </div>
          <p className="chat_timestamp">{child.timestamp}</p>
        </div>
      </a>
    );
  }
}

export default MatchProfile;
