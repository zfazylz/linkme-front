import React, { Component } from "react";
import "./SwipeButtons.css";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";

class SwipeButtons extends Component {
  state = {};

  render() {
    return (
      <div className="swipeButtons">
        <IconButton className="swipeButtons_left">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_right">
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </div>
    );
  }
}

export default SwipeButtons;
