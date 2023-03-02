import axios from "axios";

export const requestLogin = async (email: string, password: string) => {
  return await axios
    .post(
      `http://3.38.63.3:8080/api/auth/sign-in/email`,
      { email: email, password: password },
      { withCredentials: true }
    )
    .then((response) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `${response.data.access_token}`;
      console.log(response);
      return response.data;
    })
    .catch((e) => {
      console.log(e.response);

      throw e.response.status;
    });
};

export const requestAccessToken = async () => {
  await axios
    .post(
      `http://3.38.63.3:8080/api/auth/reissue`,
      { refresh: window.localStorage.getItem("refreshToken") },
      { withCredentials: true }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const checkAccessToken = async () => {
  if (axios.defaults.headers.common["Authorization"] === undefined) {
    return await requestAccessToken().then((response) => {
      return response;
    });
  }
};

export const GetsocialLogin = async (code: string) => {
  console.log(code);
  return await axios
    .get(`http://3.38.63.3:8080/api/auth/sign-in/social/${code}`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((e) => {
      return e;
    });
};
