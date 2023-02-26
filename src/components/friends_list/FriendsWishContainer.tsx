import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendsWish from "./FriendsWish";
import { FriendsWishlist } from "./FriendsLists.inferface";

export default function FriendsWishContainer({ userId }: any) {
    const [list, setList] = useState<FriendsWishlist[]>([]);
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
