import axios from "axios";

export const getReviews: any = async (setState: any, id: number) => {
    const REVIEW_URL = `http://3.38.63.3:8080/api/reviews?page=1&productId=${id}&size=300`;
    await axios
        .get(REVIEW_URL)
        .then((res) => {
            let response = res.data.content;
            setState(response);
        })
        .catch((error) => {
            return error;
        });
};
