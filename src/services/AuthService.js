import api from "../api/config";

class AuthService {
  static instance = new AuthService();

  signIn({ email, password }) {
    const authData = {
      email,
      password,
    };
    return api.post("auth/signIn", authData);
  }

  signUp({ email, password, firstName, lastName, gender, phone }) {
    const signData = {
      email,
      password,
      firstName,
      lastName,
      gender,
      phone,
    };
    return api.post("auth/signUp", signData);
  }
}

export default AuthService.instance;
