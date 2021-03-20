import axios from "axios";
import { API_URL } from ".";
import authHeader from "./auth-header";

class ProfileService {
  myProfile() {
    return axios.get(API_URL + "profile/self/", { headers: authHeader() });
  }
}

export default new ProfileService();
