import React, {useState} from "react";
import ProfileService from "../../services/profile.service";
import "../ChatList/ChatScreen.css";
import Header from "../../components/Header/Header";
import MatchProfile from "./MatchProfile";

const MatchListDiv = () => {
  const [matchList, setMatchList] = useState([
    {
      username: "Загрузка....",
      avatar_url: null,
      description: "...",
      aitu_uid: null,
      id: -1,
    },
  ]);

  ProfileService.matchList().then(
    (response) => {
      setMatchList(response.data.results)
    }
  )

  return (
    <div>
      <Header/>
      <div className="chats">
        {matchList.map((profile) => (
          <MatchProfile
            name={profile.username}
            profilePic={profile.avatar_url}
            timestamp={profile.liked_at}
            key={profile.id}
            aituUID={profile.aitu_uid}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchListDiv;
