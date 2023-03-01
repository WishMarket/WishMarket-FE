import axios from "axios";

export const getFundingHistory: any = async (setState: any) => {
    const HISTORY_URL = `http://3.38.63.3:8080/api/funding/history`;
    await axios
        .get(HISTORY_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
        })
        .then((res) => {
            let response = res.data;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getFundingGift: any = async (setState: any) => {
    const GIFT_URL = `http://3.38.63.3:8080/api/funding/gift`;
    await axios
        .get(GIFT_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
        })
        .then((res) => {
            let response = res.data;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
