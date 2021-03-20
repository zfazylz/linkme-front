import Header from "../../components/Header/Header";
import React from "react";
import TinderCards from "../../components/TinderCards/TinderCards";
import SwipeButtons from "../../components/SwipeButtons/SwipeButtons";

const HomeView = () => {
    return (
        <div>
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
        </div>
    )
}

export default HomeView;
