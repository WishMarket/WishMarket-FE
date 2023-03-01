import axios from "axios";

export const Account_Withdrawal = async () => {
    return await axios
        .patch(
            `http://3.38.63.3:8080/api/auth/withdrawal`,
            {
                withCredentials: true,
            },
            { headers: { Authorization: window.localStorage.getItem("accessToken") } }
        )
        .then((response) => {
            console.log(response);
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
        })
        .then((res) => {
            let response = res.data;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const updateUserInfo: any = async (address: string, detailAddress: string, nickName: string, phone: string, profileImage: any) => {
    const USER_URL = `http://3.38.63.3:8080/api/user/update`;
    await axios
        .patch(USER_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
            params: {
                address: address,
                detailAddress: detailAddress,
                nickName: nickName,
                phone: phone,
                profileImage: profileImage,
            },
        })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((error) => {
            console.log(error);
        });
};
