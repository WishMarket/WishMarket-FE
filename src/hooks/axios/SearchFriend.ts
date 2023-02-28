import axios from "axios";

export const SearchFriends = async (input: string, select: string) => {
  const SearchFriends_URL = `http://3.38.63.3:8080/api/follow`;
  return await axios
    .get(SearchFriends_URL, {
      headers: {
        Authorization: window.localStorage.getItem("accessToken"),
      },
      params: {
        keyword: input,
        type: select,
      },
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

export const FriendsFollowAdd = async (followId: number) => {
  const FriednsFollow_URL = `http://3.38.63.3:8080/api/follow/${followId}`;
  return await axios
    .post(
      FriednsFollow_URL,
      { withCredentials: true },
      {
        headers: {
          Authorization: window.localStorage.getItem("accessToken"),
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });
};

export const FriendsFollowDelete = async (followId: number) => {
  const FriednsFollow_URL = `http://3.38.63.3:8080/api/follow/${followId}`;
  return await axios
    .delete(FriednsFollow_URL, {
      headers: {
        Authorization: window.localStorage.getItem("accessToken"),
      },
      withCredentials: true,
    })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });
};

export const InfluencerFriend = async () => {
  const Influencer_URL = "http://3.38.63.3:8080/api/follow/influencer";
  return await axios
    .get(Influencer_URL, {
      headers: {
        Authorization: window.localStorage.getItem("accessToken"),
      },
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
