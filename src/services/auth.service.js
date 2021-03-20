import axios from "axios";
import {API_URL, isResponseOK} from "."
import aituBridge from "@btsd/aitu-bridge";

class AuthService {
  login(username, password) {
    const aituData = aituBridge.getMe();
    return axios
      .post(
        API_URL + "auth/api/token/",
        {email: username, password, aitu_data: aituData},
      )
      .then((response) => {
        if (isResponseOK(response)) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
