import axios from "axios";

export const getFundingHistory: any = async (setState: any) => {
    const HISTORY_URL = `http://3.38.63.3:8080/api/funding/history`;
    return await axios
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
            return error;
        });
};

export const getFundingGift: any = async (setState: any) => {
    const GIFT_URL = `http://3.38.63.3:8080/api/funding/gift`;
    return await axios
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
            return error;
        });
};

export const postFundingReception: any = async (address: string, comment: string, detailAddress: string, fundingId: number, isLike: boolean, productId: number) => {
    const GIFT_URL = `http://3.38.63.3:8080/api/funding/reception`;
    return await axios
        .post(
            GIFT_URL,
            { withCredentials: true, address: address, comment: comment, detailAddress: detailAddress, fundingId: fundingId, isLike: isLike, productId: productId },
            {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            }
        )
        .then((res) => {
            let response = res.data;
            return response;
        })
        .catch((error) => {
            return error;
        });
};
