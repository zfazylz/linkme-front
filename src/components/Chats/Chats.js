import React, {Component} from "react";
import "./Chats.css";
import Chat from "./Chat";
import ProfileService from "../../services/profile.service";

class Chats extends Component {
  state = {likes: []};

  componentDidMount() {
    this.getLikes(1);
  }

  getLikes(pageNum) {
    ProfileService.myOffers(pageNum).then(
      (response) => {
        console.log(response.data);
        this.setState({
          likes: response.data,
        });
      },
      (error) => {
        this.setState({
          likes:
            (error.response &&
              error.response.data &&
              error.response.data.detail) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div className="emptyCardContainer">
        <h1>Показали симпатию</h1>

        <div className="chats">
          {this.state.likes?.results?.map((person, _) => (
            <Chat
              name={person.username}
              profilePic={person.photos[0]}
              timestamp={person.liked_at}
              key={person.user_id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Chats;
