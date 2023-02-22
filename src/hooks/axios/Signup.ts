import axios from "axios";


export const emailCheck = async (
  email: string
) => {
  return await axios
    .post(
      `http://3.38.63.3:8080/api/auth/email-check`,
      { email: email },
      { withCredentials: true }
    )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((e) => {
      console.log(e.response);

      return e.response;
    });
};

export const requestSignup = async (email: string, password: string, name:string, nickName: string ) => {
  return await axios
    .post(
      `http://3.38.63.3:8080/api/auth/sign-up`,
      { name:name, nickName:nickName, email: email, password: password},
      { withCredentials: true }
    )
    .then((response) => {
    //   axios.defaults.headers.common[
    //     "Authorization"
    //   ] = `bearer ${response.data.access_token}`;
      console.log(response);
      return response.data;
    })
    .catch((e) => {
      console.log(e.response);

      throw e.response.status;
    });
};


