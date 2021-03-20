import Header from "../../components/Header/Header";
import ChatScreen from "./ChatScreen";
import React from "react";

const ChatListView = () => {
    return (
        <div>
            <Header backButton="/chat"/>
            <ChatScreen/>
        </div>
    )
}

export default ChatListView;
