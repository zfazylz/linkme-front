import axios from "axios";
import { API_URL } from ".";
import authHeader from "./auth-header";

class CardService {
  myCards(pageNum) {
    return axios.get(API_URL + "profile/random/?page=" + (pageNum || 1), {
      headers: authHeader(),
    });
  }

  evaluateCard(uid, mark) {
    return axios.post(
      API_URL + "profile/like/",
      { recipient: uid, is_like: mark },
      {
        headers: authHeader(),
      }
    );
  }
}
export default new CardService();
