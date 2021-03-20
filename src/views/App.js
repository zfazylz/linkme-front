import React, {Component} from "react";
import Header from "../components/Header/Header";
import Chats from "../components/Chats/Chats";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import ChatListView from "./ChatList";
import HomeView from "./Home";
import Login from "../components/login.component";
import ProfileView from "./Profile";
import MatchListDiv from "./MatchList/MatchListDiv";

class App extends Component {

  componentDidMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path="/chat/:person">
              <ChatListView/>
            </Route>
            <Route path="/chat">
              <Header backButton="/"/>
              <Chats/>
            </Route>
            <Route exact path="/matches" component={MatchListDiv}/>
            <Route path="/profile">
              <ProfileView/>
            </Route>
            <Route exact path="/" component={HomeView}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
