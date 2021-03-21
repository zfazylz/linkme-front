import React, { Component } from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ChatIcon from "@material-ui/icons/Chat";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props, backButton = false) {
    super(props);
    this.logOutLink = this.logOutLink.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
    this.backButton = backButton;
  }

  logOutLink() {
    this.props.dispatch(logout());
  }

  render() {
    console.log(this.backButton);
    return (
      <div className="header">
        <Link to="" onClick={this.logOutLink}>
          <IconButton>
            <ExitToAppIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/profile">
          <IconButton>
            <PersonIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/matches">
          <IconButton>
            <ChatIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/likes">
          <IconButton>
            <ForumIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Header);
