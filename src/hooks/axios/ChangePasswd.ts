import axios from "axios";
export const ChangePassword = async ( email:string, password:string) => {
  return await axios
    .patch(
      `http://3.38.63.3:8080/api/user/password`,
      { email: email, password: password },
      { withCredentials: true }
    )
    .then((response) => {
      console.log(email)
      console.log(password)
      return response;
    })
    .catch((e) => {
      return e
    });
};
