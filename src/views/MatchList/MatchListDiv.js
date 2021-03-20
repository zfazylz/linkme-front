import React, {Component} from "react";
import ProfileService from "../../services/profile.service";
import "../ChatList/ChatScreen.css";
import "./MatchList.css";
import Header from "../../components/Header/Header";
import MatchProfile from "./MatchProfile";

export default class MatchListDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchList: [
        {
          username: "Загрузка....",
          avatar_url: null,
          description: "...",
          aitu_uid: null,
          id: -1,
        },

      ]
    };

  }

  componentDidMount() {
    ProfileService.matchList().then(
      (response) => {
        this.setState({matchList: response.data.results})
      }
    )
  }

  render() {
    const {matchList} = this.state;

    return (
      <div>
        <Header/>
        <div className="emptyCardContainer">
          <h1>Взаимные симпатии</h1>
          <div className="chats ">
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
};
