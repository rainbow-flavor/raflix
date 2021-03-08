import axios from "axios";

const SIGNUP_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class AuthService {
  signup(user) {
    return axios.post(SIGNUP_API_BASE_URL, user);
  }
}

export default new AuthService();
