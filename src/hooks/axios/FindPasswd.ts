import axios from "axios";

export const emailSend = async (email: string , type: string) => {
  return await axios
    .post(
      `http://3.38.63.3:8080/api/auth/email-auth`,
      { email: email, type:type },
      { withCredentials: true }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response;
    });
};


export const codeCheck = async (name:string, email: string, code:string) => {
  return await axios
    .post(
      `http://3.38.63.3:8080/api/auth/email-auth/code`,
      { name:name, email: email, code:code},
      { withCredentials: true }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response;
    });
};
