import React, { Component } from "react";
import "../../components/Likes/Like.css";
import Avatar from "@material-ui/core/Avatar";

class MatchProfile extends Component {
  state = {};

  render() {
    const child = this.props;
    return (
      <a
        href={
          child.aituUID
            ? `https://i2.app.link/open_chat_with?user_id=${child.aituUID}`
            : "/matches"
        }
      >
        <div className="like">
          <Avatar
            className="like_image"
            alt={child.name}
            src={child.profilePic}
          />
          <div className="like_details">
            <h2>{child.name}</h2>
          </div>
          <p className="like_timestamp">{child.timestamp}</p>
        </div>
      </a>
    );
  }
}

export default MatchProfile;
