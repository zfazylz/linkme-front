import React, { Component } from "react";
import Header from "../components/Header/Header";
import Likes from "../components/Likes/Likes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
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
            <Route exact path="/login" component={Login} />
            <Route path="/likes">
              <Header backButton="/" />
              <Likes />
            </Route>
            <Route exact path="/matches" component={MatchListDiv} />
            <Route path="/profile">
              <ProfileView />
            </Route>
            <Route exact path="/" component={HomeView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
