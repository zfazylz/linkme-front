import React, { Component } from "react";
import "./Likes.css";
import Like from "./Like";
import ProfileService from "../../services/profile.service";
import {
  ActionAnimations,
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BasicSwipeContent from "./BasicSwipeContent";

class Likes extends Component {
  state = {
    likes: [],
    contentAnimation: ActionAnimations.RETURN,
    listAnimations: true,
  };

  componentDidMount() {
    this.getLikes(1);
  }

  getLikes(pageNum) {
    ProfileService.myOffers(pageNum).then(
      (response) => {
        console.log(response.data);
        this.setState({
          likes: response.data,
        });
      },
      (error) => {
        this.setState({
          likes:
            (error.response &&
              error.response.data &&
              error.response.data.detail) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  deleteItemById = (ind) => {
    let anime = {
      results: this.state.likes.results.filter((like, lind) => lind !== ind),
    };
    this.setState({
      likes: anime,
    });
    console.log(this.state.likes);
  };

  swipeRightOptions = (ind) => ({
    content: <BasicSwipeContent label="Delete" position="left" />,
    actionAnimation: this.state.contentAnimation,
    action: () => this.deleteItemById(ind),
  });

  swipeLeftOptions = (ind) => ({
    content: <BasicSwipeContent label="Delete" position="right" />,
    actionAnimation: this.state.contentAnimation,
    action: () => this.deleteItemById(ind),
  });

  render() {
    const threshold = 0.33;
    const transitionTimeout = 1500;
    return (
      <SwipeableList threshold={threshold}>
        {({
          className,
          scrollStartThreshold,
          swipeStartThreshold,
          threshold,
        }) => (
          <TransitionGroup
            className={className}
            enter={this.state.listAnimations}
            exit={this.state.listAnimations}
          >
            {this.state.likes?.results?.map((person, ind) => (
              <CSSTransition
                classNames="my-node"
                key={ind}
                timeout={transitionTimeout}
              >
                <SwipeableListItem
                  key={ind}
                  scrollStartThreshold={scrollStartThreshold}
                  swipeLeft={this.swipeLeftOptions(ind)}
                  swipeRight={this.swipeRightOptions(ind)}
                  swipeStartThreshold={swipeStartThreshold}
                  threshold={threshold}
                >
                  <Like
                    name={person.username}
                    profilePic={person.photos[0]}
                    timestamp={person.liked_at}
                    key={person.user_id}
                  />
                </SwipeableListItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </SwipeableList>
    );
  }
}

export default Likes;
