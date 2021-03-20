import axios from "axios";
import {API_URL, isResponseOK} from "."

class AuthService {
  login(username, password, aituData) {
    return axios
      .post(
        API_URL + "auth/api/token/",
        {username, password, aitu_data: aituData},
      )
      .then((response) => {
        if (isResponseOK(response)) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  loginAITU(aituData) {
    return axios
      .post(
        API_URL + "auth/api/aitu/token/",
        {aitu_data: aituData},
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
