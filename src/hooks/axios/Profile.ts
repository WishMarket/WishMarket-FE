import axios from "axios";

//API 변경중 논의후 변경필요
export const Account_Withdrawal = async (email: string, password: string) => {
  return await axios
    .delete(
      `http://3.38.63.3:8080/api/auth/withdrawal`,
      { withCredentials: true }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response;
    });
};
