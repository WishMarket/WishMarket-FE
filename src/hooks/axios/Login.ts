import axios from "axios";
import { GetAccessTokenExpiredAt } from "../Tokens";

export const requestLogin = async (email: string, password: string) => {
    return await axios
        .post(`http://3.38.63.3:8080/api/auth/sign-in/email`, { email: email, password: password }, { withCredentials: true })
        .then((response) => {
            axios.defaults.headers.common["Authorization"] = `${response.data.accessToken}`;
            return response.data;
        })
        .catch((e) => {
            throw e.response.status;
        });
};

export const requestAccessToken = async () => {
    let now = new Date();
    let expire = GetAccessTokenExpiredAt();
    let expireDate;
    if (expire) {
        expireDate = new Date(expire);
        let expireDate_1 = new Date(expireDate.setMinutes(expireDate.getMinutes() - 1));
        if (now > expireDate_1) {
            return await axios
                .post(
                    `http://3.38.63.3:8080/api/auth/reissue`,
                    {
                        withCredentials: true,
                        refresh: window.localStorage.getItem("refreshToken"),
                    },
                    {
                        headers: {
                            Authorization: window.localStorage.getItem("accessToken"),
                        },
                    }
                )
                .then((response) => {
                    const res = response.data;
                    return res;
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    } else {
        return "AccessToken Not Expired";
    }
};

export const GetsocialLogin = async (code: string) => {
    return await axios
        .get(`http://3.38.63.3:8080/api/auth/sign-in/social/${code}`, {
            withCredentials: true,
        })
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
};
