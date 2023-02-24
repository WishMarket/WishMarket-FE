import axios from "axios";

export const emailSend = async (email: string, type:string) => {
    return await axios
      .post(
        `http://3.38.63.3:8080/api/auth/email-auth`,
        { email: email ,type:type},
        { withCredentials: true }
      )
      .then((response) => {
        return response;
      })
      .catch((e) => {
        return e.response;
      });
}

export const requestSignup = async (email: string, password: string, name:string, nickName: string, code:string ) => {
  return await axios
    .post(
      `http://3.38.63.3:8080/api/auth/sign-up`,
      { name:name, nickName:nickName, email: email, password: password, code:code},
      { withCredentials: true }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response;
    });
};


