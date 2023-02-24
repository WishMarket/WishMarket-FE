import axios from "axios";

export const Account_Logout = async () => {
  return await axios
    .post(
      `http://3.38.63.3:8080/api/auth/logout`,
      {
        withCredentials: true,
      },
      { headers: { Authorization: window.localStorage.getItem("accessToken") } }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response;
    });
};
