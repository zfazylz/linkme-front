import React, { Component } from "react";
import ProfileService from "../../services/profile.service";
import "./MatchList.css";
import "../../components/Likes/Like.css";
import Header from "../../components/Header/Header";
import MatchProfile from "./MatchProfile";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class MatchListDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchList: [
        {
          username: "Загрузка....",
          avatar_url: null,
          description: "...",
          aitu_uid: null,
          user_id: -1,
        },
      ],
    };
  }

  componentDidMount() {
    ProfileService.matchList().then((response) => {
      this.setState({ matchList: response.data.results });
    });
  }

  render() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <div>
          <Redirect to="/login" />
        </div>
      );
    }
    const { matchList } = this.state;

    return (
      <div>
        <Header />
        <div>
          <h1 className="center">Взаимные симпатии</h1>
          <div className="chat">
            {matchList.map((profile, _) => (
              <MatchProfile
                name={profile.username}
                profilePic={profile.avatar_url}
                timestamp={profile.liked_at}
                key={profile.user_id}
                aituUID={profile.aitu_uid}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
}

export default connect(mapStateToProps)(MatchListDiv);
