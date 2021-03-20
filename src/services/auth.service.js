import axios from "axios";

const API_URL = "https://linkme-back.herokuapp.com/";

function isResponseOK(response) {
    return (200 <= response.status && response.status < 300)
}

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "auth/api/token/", {email: username, password})
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
