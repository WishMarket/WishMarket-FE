import axios from "axios";

export const getNotifyList: any = async (setState: any) => {
    const NOTIFY_URL = `http://3.38.63.3:8080/api/alarms/`;
    await axios
        .get(NOTIFY_URL, {
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

export const NotifyRead: any = async (id: any) => {
    const NOTIFY_URL = `http://3.38.63.3:8080/api/alarms/${id}/read`;
    return await axios
        .patch(
            NOTIFY_URL,
            {},
            {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
                withCredentials: true,
            }
        )
        .then((res) => {
            return res;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const NotifyDelete: any = async (id: any) => {
    const DELETE_URL = `http://3.38.63.3:8080/api/alarms/${id}/delete`;
    return await axios
        .delete(DELETE_URL, {
            headers: {
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

export const NotifyBadge: any = async (setState: any) => {
    const NOTIFY_URL = `http://3.38.63.3:8080/api/alarms/badge`;
    return await axios
        .get(NOTIFY_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
            withCredentials: true,
        })
        .then((res) => {
            setState(res.data);
        })
        .catch((error) => {
            return error;
        });
};
