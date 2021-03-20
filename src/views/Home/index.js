import Header from "../../components/Header/Header";
import React, {Component} from "react";
import TinderCards from "../../components/TinderCards/TinderCards";
import SwipeButtons from "../../components/SwipeButtons/SwipeButtons";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import "./HomeView.css"

class HomeView extends Component {
  render() {
    const {isLoggedIn} = this.props;
    if (!isLoggedIn) {
      return (
        <div>
          <Redirect to="/login"/>
        </div>
      );
    }
    return (
      <div>
        <Header/>
        <TinderCards/>
        <SwipeButtons/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  const {isLoggedIn} = state.auth;
  return {isLoggedIn}
}

export default connect(mapStateToProps)(HomeView);
