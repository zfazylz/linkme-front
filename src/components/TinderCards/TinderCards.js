import React, { Component } from "react";
import { connect } from "react-redux";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import CardService from "../../services/card.service";
import "./../SwipeButtons/SwipeButtons.css";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";

class TinderCards extends Component {
  state = { cards: [], cardID: 0, newCards: [], refList: [] };

  componentDidMount() {
    this.loadCards(1);
    this.setState({
      refList: Array(10)
        .fill(0)
        .map((i) => React.createRef()),
    });
  }

  evaluateCard = (uid, dir) => {
    let mark = dir === "right";
    this.setState({
      cardID: this.state.cardID - 1,
    });
    CardService.evaluateCard(uid, mark).then(
      (response) => {
        console.log(response.data);
        if (this.state.cardID === 0) {
          this.loadCards(1);
        }
      },
      (error) => {
        this.setState({
          cards:
            (error.response &&
              error.response.data &&
              error.response.data.detail) ||
            error.message ||
            error.toString(),
        });
      }
    );
  };

  loadCards = (page) => {
    CardService.myCards(page).then(
      (response) => {
        this.setState({
          cards: response.data,
          cardID: response.data.results.length - 1,
        });
      },
      (error) => {
        this.setState({
          cards:
            (error.response &&
              error.response.data &&
              error.response.data.detail) ||
            error.message ||
            error.toString(),
        });
      }
    );
  };

  swipeBut = (dir) => {
    if (this.state.cardID >= 0) {
      console.log("swipe" + this.state.cardID);
      this.state.refList[this.state.cardID].current.swipe(dir); // Swipe the card!
    }
  };

  render() {
    if (!this.state.cards.results?.length) {
      return (
        <div className="emptyCardContainer">
          <h1>Мы в поиске новой пары для тебя не переживай!</h1>
        </div>
      );
    }
    return (
      <div>
        <div className="tinderCards_cardContainer">
          {this.state.cards?.results?.map((person, index) => (
            <TinderCard
              ref={this.state.refList[index]}
              onSwipe={(dir) => this.evaluateCard(person.user_id, dir)}
              className="swipe"
              key={person.user_id}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.photos[0]})` }}
                className="card"
              >
                <h3>{person.username}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className="swipeButtons">
          <IconButton
            onClick={() => this.swipeBut("left")}
            className="swipeButtons_left"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={() => this.swipeBut("right")}
            className="swipeButtons_right"
          >
            <FavoriteIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(TinderCards);
