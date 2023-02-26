import axios from "axios";

export const SearchFriends = async (input: string, select: string) => {
  let email: string | null = null;
  let nickName: string | null = null;
  let name: string | null = null;
  select == "email"
    ? (email = input)
    : select == "nickname"
    ? (nickName = input)
    : (name = input);

  const SearchFriends_URL = `http://3.38.63.3:8080/api/follow?email=${email}&nickName=${nickName}&name=${name}`;
  return await axios
    .get(SearchFriends_URL, {
      headers: {
        Authorization: window.localStorage.getItem("accessToken"),
      },
      params: `email=${email}&nickName=${nickName}&name=${name}`,
      withCredentials: true,
    })
    .then((res) => {
      let response = res.data;
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
