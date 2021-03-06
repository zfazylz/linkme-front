import React, { Component } from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import GradeIcon from "@material-ui/icons/Grade";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
        {/*<Link to="" onClick={this.logOutLink}>*/}
        {/*  <IconButton>*/}
        {/*    <ExitToAppIcon className="header_icon" fontSize="large" />*/}
        {/*  </IconButton>*/}
        {/*</Link>*/}
        <Link to="/">
          <IconButton>
            <SearchIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/profile">
          <IconButton>
            <PersonIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/likes">
          <IconButton>
            <FavoriteIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/matches">
          <IconButton>
            <GradeIcon className="header_icon" fontSize="large" />
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
