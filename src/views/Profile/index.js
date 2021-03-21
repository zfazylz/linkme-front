import React, { Component } from "react";
import ProfileService from "../../services/profile.service";
import Header from "../../components/Header/Header";
import { logout } from "../../actions/auth";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.logOutLink = this.logOutLink.bind(this);

    this.state = {
      content: null,
    };
  }

  logOutLink() {
    this.props.dispatch(logout());
  }

  componentDidMount() {
    ProfileService.myProfile().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    const profile = this.state.content;
    return (
      <div>
        <Header backButton={false} />
        <div className="emptyCardContainer">
          <h1>Профиль</h1>
          <div
            style={{
              backgroundImage: `url(${profile?.avatar_url})`,
            }}
            className="card"
          >
            <h3>{profile?.username}</h3>
            <p>{profile?.description}</p>
          </div>
          <div className="swipeButtons">
            <Link to="" onClick={this.logOutLink} className="swipeButtons_left">
              <ExitToAppIcon fontSize="large" />
            </Link>
          </div>
        </div>
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

export default connect(mapStateToProps)(ProfileView);
