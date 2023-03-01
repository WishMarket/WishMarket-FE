import axios from "axios";

export const getFunding: any = async (id: number) => {
    const DETAIL_URL = `http://3.38.63.3:8080/api/funding/detail/${id}`;
    return await axios
      .get(DETAIL_URL, {
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

export const PostFundingAddition = async (
  fundedAt:Date,
  fundingId: number,
  fundedPrice: number,
) => {
  return await axios
    .post(
      `http://3.38.63.3:8080/api/funding/join`,
      {
        withCredentials: true,
        fundedAt:fundedAt,
        fundingId: fundingId,
        fundedPrice: fundedPrice
      },
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
      return e.response;
    });
};
