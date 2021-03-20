import React, {Component} from "react";
// import {Redirect} from 'react-router-dom';
import ProfileService from "../services/profile.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }

  componentDidMount() {
    ProfileService.myProfile().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
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
