import axios from "axios";

export const Account_Withdrawal = async () => {
  return await axios
    .delete(`http://3.38.63.3:8080/api/auth/withdrawal`, {
      withCredentials: true,
      headers: { Authorization: window.localStorage.getItem("accessToken") },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((e) => {
      return e.response;
    });
};
