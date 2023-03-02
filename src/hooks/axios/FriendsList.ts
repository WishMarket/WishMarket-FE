import axios from "axios";

export const getFriendList: any = async (page: number, size: number) => {
    const GETFRIEND_URL = `http://3.38.63.3:8080/api/follow/friends`;
    return await axios
        .get(GETFRIEND_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
            params: {
                page: page,
                size: size,
            },
            withCredentials: true,
        })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error;
        });
};

export const getFriendsWish: any = async (setState: any, id: number) => {
    const FRIEND_WISH_URL = `http://3.38.63.3:8080/api/wishlist/${id}`;
    await axios
        .get(FRIEND_WISH_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
        })
        .then((res) => {
            setState(res.data);
        })
        .catch((error) => {
            return error;
        });
};

export const getFriendsFunding: any = async (setState: any, id: number) => {
    const FRIEND_WISH_URL = `http://3.38.63.3:8080/api/funding/history/${id}`;
    await axios
        .get(FRIEND_WISH_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
        })
        .then((res) => {
            setState(res.data);
        })
        .catch((error) => {
            return error;
        });
};
