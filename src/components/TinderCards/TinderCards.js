import React, {Component} from "react";
import {connect} from "react-redux";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import CardService from "../../services/card.service";
import SwipeButtons from "../../components/SwipeButtons/SwipeButtons";

class TinderCards extends Component {
  state = {cards: [], remainingCards: 0};

  componentDidMount() {
    this.loadCards(1);
  }

  evaluateCard = (uid, dir) => {
    let mark = dir === "right";

    CardService.evaluateCard(uid, mark).then(
      (response) => {
        console.log(response.data);
        this.setState({
            remainingCards: this.state.remainingCards - 1
          }
        );
        if (this.state.remainingCards === 0) {
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
          remainingCards: response.data.results.length,
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

  render() {
    return (
      <div>
        <div className="tinderCards_cardContainer">
          {this.state.cards?.results?.map((person) => (
            <TinderCard
              onSwipe={(dir) => this.evaluateCard(person.user_id, dir)}
              className="swipe"
              key={person.user_id}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{backgroundImage: `url(${person.photos[0]})`}}
                className="card"
              >
                <h3>{person.username}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        <SwipeButtons/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {user} = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(TinderCards);
