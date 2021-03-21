import axios from "axios";
import { API_URL } from ".";
import authHeader from "./auth-header";

class ProfileService {
  myProfile() {
    return axios.get(API_URL + "profile/self/", { headers: authHeader() });
  }

  myOffers() {
    return axios.get(API_URL + "profile/likes/", { headers: authHeader() });
  }

  matchList() {
    return axios.get(API_URL + "profile/matches/", { headers: authHeader() });
  }

  rejectUser(uid) {
    return axios.put(
      API_URL + "profile/reject-likes/" + uid,
      {},
      { headers: authHeader() }
    );
  }
}

export default new ProfileService();
