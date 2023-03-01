import axios from "axios";

export const getFriendList: any = async (setState: any) => {
    const FRIEND_URL = `http://3.38.63.3:8080/api/follow/friends`;
    return await axios
        .get(FRIEND_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
        })
        .then((res) => {
            console.log(res);
            setState(res.data.content);
        })
        .catch((error) => {
            return error;
        });
};
