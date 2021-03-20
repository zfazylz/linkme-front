import React, {Component} from "react";
import ProfileService from "../../services/profile.service";
import Header from "../../components/Header/Header";

export default class ProfileView extends Component {
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
        <Header backButton={false}/>
        <div className="emptyCardContainer">
          <h1>Профиль</h1>
          <div
            style={{backgroundImage: `url(${profile?.avatar_url})`}}
            className="card"
          >
            <h3>{profile?.username}</h3>
            <p>{profile?.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
