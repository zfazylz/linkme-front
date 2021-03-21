import React, { Component } from "react";
// import {Redirect} from 'react-router-dom';
import ProfileService from "../services/profile.service";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
    };
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
        <h3>{profile?.username}</h3>
        <p>{profile?.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
}

export default connect(mapStateToProps)(Profile);
