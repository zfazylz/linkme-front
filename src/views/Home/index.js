import Header from "../../components/Header/Header";
import React, {Component} from "react";
import TinderCards from "../../components/TinderCards/TinderCards";
import SwipeButtons from "../../components/SwipeButtons/SwipeButtons";
import {Redirect} from "react-router-dom";

class HomeView extends Component {
  render() {
    console.log(this.props);
    // const {user} = this.props;
    // if (!user) {
    //   return <Redirect to="/login"/>;
    // }
    return (
      <div>
        <Header/>
        <TinderCards/>
        <SwipeButtons/>
      </div>
    )
  }

}

export default HomeView;
