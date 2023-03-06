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
            return error;
        });
};

export const NotifyRead: any = async (id: any) => {
    const NOTIFY_URL = `http://3.38.63.3:8080/api/alarms/${id}/read`;
    await axios
        .patch(NOTIFY_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
        })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error;
        });
};

export const NotifyDelete: any = async (id: any) => {
    const NOTIFY_URL = `http://3.38.63.3:8080/api/alarms/${id}/delete`;
    await axios
        .delete(NOTIFY_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
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
    await axios
        .get(NOTIFY_URL, {
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
