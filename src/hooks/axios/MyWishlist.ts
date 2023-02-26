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
            console.log(res);
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const postMyWish: any = async (productId: number) => {
    const WISH_URL = `http://3.38.63.3:8080/api/wishlist/add?productId=${productId}`;
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
            return error;
        });
};

export const deleteMyWish: any = async (wishListId: number) => {
    const WISH_URL = `http://3.38.63.3:8080/api/wishlist?wishListId=${wishListId}`;
    await axios
        .delete(WISH_URL, {
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
