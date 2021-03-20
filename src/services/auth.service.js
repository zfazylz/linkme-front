import axios from "axios";

const API_URL = "https://linkme-back.herokuapp.com/auth/api/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "token/", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
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
