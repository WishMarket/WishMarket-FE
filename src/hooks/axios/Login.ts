import axios from "axios"

export const requestLogin = async (email:string, password:string) => {
    await axios
      .post(
        `http://3.38.63.3:8080/api/auth/sign-in/email`,
        { email: email, password: password },
        { withCredentials: true }
      )
      .then((response) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `bearer ${response.data.access_token}`;
        console.log(response.data)
        return response.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
}

export const requestAccessToken = async (refresh_token:string) => {
    await axios
      .post(`/token/refresh`, { refresh:refresh_token }, { withCredentials: true })
      .then((response) => {
          return response.data.access;
      })
      .catch((e) => {
        console.log(e.response.data);
      });
}

// export const checkAccessToken = async (refresh_token:string) => {
//   if (axios.defaults.headers.common["Authorization"] === undefined) {
//     return await requestAccessToken(refresh_token).then((response) => {
//       return response;
//     });
//   } else {
//     return axios.defaults.headers.common["Authorization"].split(" ")[1];
//   }
// };