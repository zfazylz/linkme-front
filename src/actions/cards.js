import CardService from "../services/card.service";

import { GET_CARDS, GET_CARDS_FAIL } from "./types";

export const myCards = (pageNum) => (dispatch) => {
  return CardService.myCards(pageNum).then(
    (data) => {
      dispatch({
        type: GET_CARDS,
        payload: { cards: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.detail) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_CARDS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
