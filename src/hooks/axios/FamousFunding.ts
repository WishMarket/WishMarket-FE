import axios from "axios";

export const GetFamousFunding = async () => {
  const GetFamousFunding_URL = "http://3.38.63.3:8080/api/funding/main";
  return await axios
    .get(GetFamousFunding_URL, {
      withCredentials: true,
    })
    .then((res) => {
      let response = res.data;
      return response;
    })
    .catch((error) => {
      return error;
    });
};
