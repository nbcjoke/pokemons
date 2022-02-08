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
    return api
      .post("auth/signUp", signData)
      .then((response) => {
        console.log("success");
        return response;
      })
      .catch((error) => {
        console.log(error.error.message);
        throw new Error(error);
      });
  }

  signOut() {
    localStorage.clear();
    window.location.reload();
  }
}

export default AuthService.instance;
