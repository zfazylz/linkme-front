import React from 'react';
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import {Link, useHistory} from "react-router-dom";

const Header = ({backButton}) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header_icon" fontSize="large"/>
        </IconButton>
      ) : (
        <Link to="/profile">
          <IconButton>
            <PersonIcon className="header_icon" fontSize="large"/>
          </IconButton>
        </Link>
      )}

      <Link to="/">
        <img
          className="header_logo"
          src={"/logo.png"}
          alt="LinkMe App"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large"/>
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
