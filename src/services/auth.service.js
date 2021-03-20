import axios from "axios";
import {API_URL, isResponseOK} from "."

class AuthService {
  login(username, password) {
    return axios
      .post(
        API_URL + "auth/api/token/",
        {email: username, password},
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
