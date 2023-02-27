import axios from "axios";
import { WishlistType } from "../../components/wishlist/Wishlist.interface";

export const getMyWish: any = async (setState: React.Dispatch<React.SetStateAction<WishlistType[]>>) => {
    const WISH_URL = `http://3.38.63.3:8080/api/wishlist`;
    await axios
        .get(WISH_URL, {
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

export const postMyWish: any = async (productId: number) => {
    const WISH_URL = `http://3.38.63.3:8080/api/wishlist/add/${productId}`;
    await axios
        .post(
            WISH_URL,
            { withCredentials: true },
            {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            }
        )
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};

export const deleteMyWish: any = async (productId: number) => {
    const WISH_DELETE_URL = `http://3.38.63.3:8080/api/wishlist/${productId}`;
    await axios
        .delete(WISH_DELETE_URL, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
        })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((error) => {
            return error;
        });
};
