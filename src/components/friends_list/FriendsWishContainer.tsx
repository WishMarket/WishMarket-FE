import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendsWish from "./FriendsWish";

interface Wishlist {
    productId: number;
    name: string;
    image: string;
    price: number;
}

export default function FriendsWishContainer({ userId }: any) {
    const [list, setList] = useState<Wishlist[]>([]);
    const WISHLIST_URL = "/data/Wishlist.json";

    // setList
    const getList = async () => {
        await axios
            .get(WISHLIST_URL)
            .then((res) => {
                let response = res.data.list;
                setList(response);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <>
            {list.map((item) => (
                <FriendsWish item={item} key={item.productId} />
            ))}
        </>
    );
}
