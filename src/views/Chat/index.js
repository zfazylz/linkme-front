import Header from "../../components/Header/Header";
import React from "react";
import Chats from "../../components/Chats/Chats";

const ChatView = () => {
    return (
        <div>
            <Header backButton="/"/>
            <Chats/>
        </div>
    )
}

export default ChatView;
