import React, { Component } from "react";
import "./Like.css";
import Avatar from "@material-ui/core/Avatar";

class Like extends Component {
  state = {};
  render() {
    const child = this.props;
    return (
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
    );
  }
}

export default Like;
