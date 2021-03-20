import React from "react";
import Header from "../components/Header/Header";
import Chats from "../components/Chats/Chats";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import ChatListView from "./ChatList";
import HomeView from "./Home";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/chat/:person">
                        <ChatListView/>
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/"/>
                        <Chats/>
                    </Route>
                    <Route path="/">
                        <HomeView/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
