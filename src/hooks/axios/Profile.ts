import axios from "axios";

export const Account_Withdrawal = async () => {
    return await axios
        .delete(`http://3.38.63.3:8080/api/auth/withdrawal`, {
            headers: { Authorization: window.localStorage.getItem("accessToken") },
            withCredentials: true,
        })
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e.response;
        });
};

export const getUserInfo: any = async (setState: any) => {
    const USER_URL = `http://3.38.63.3:8080/api/user/detail`;
    await axios
        .get(USER_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
            withCredentials: true,
        })
        .then((res) => {
            let response = res.data;
            setState(response);
        })
        .catch((error) => {
            return error;
        });
};

export const increasePoint: any = async () => {
    const USER_URL = `http://3.38.63.3:8080/api/point/increase`;
    await axios
        .put(
            USER_URL,
            {},
            {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            }
        )
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error;
        });
};

export const updateUserInfo: any = async (frm: any) => {
    const USER_URL = `http://3.38.63.3:8080/api/user/updateUserInfo`;
    await axios
        .patch(USER_URL, frm, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: window.localStorage.getItem("accessToken"),
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

export const updateUserInfoImg: any = async (frm: any) => {
    const USER_URL = `http://3.38.63.3:8080/api/user/updateUserProfileImage`;
    await axios
        .patch(USER_URL, frm, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: window.localStorage.getItem("accessToken"),
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
