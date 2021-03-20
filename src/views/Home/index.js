import Header from "../../components/Header/Header";
import React, { Component } from "react";
import TinderCards from "../../components/TinderCards/TinderCards";
import { Redirect } from "react-router-dom";

class HomeView extends Component {
  render() {
    // const { user } = this.props;
    // if (!user) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <div>
        <Header />
        <TinderCards />
      </div>
    );
  }
}

export default HomeView;
