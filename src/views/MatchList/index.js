import Header from "../../components/Header/Header";
import MatchListDiv from "./MatchListDiv";
import React from "react";

const MatchListView = () => {
    return (
        <div>
            <Header backButton="/chat"/>
            <MatchListDiv/>
        </div>
    )
}

export default MatchListView;
