import axios from "axios";

export const getProduct: any = async (id: number) => {
  const DETAIL_URL = `http://3.38.63.3:8080/api/products/${id}/detail`;
  return await axios
    .get(DETAIL_URL, { withCredentials: true })
    .then((res) => {
      let response = res.data;
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getFriend: any = async (page:number, size:number) => {
  const GETFRIEND_URL = `http://3.38.63.3:8080/api/follow/friends`;
  return await axios
    .get(GETFRIEND_URL, {
        headers: {
            Authorization: window.localStorage.getItem("accessToken"),
        },
        params: {
            page:page,
            size:size,
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
