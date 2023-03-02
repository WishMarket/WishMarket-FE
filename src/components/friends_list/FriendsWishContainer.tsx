import React, { useState, useEffect } from "react";
import FriendsWish from "./FriendsWish";
import { getFriendsWish } from "../../hooks/axios/FriendsList";
import { FriendsWishlist } from "./FriendsLists.inferface";

export default function FriendsWishContainer({ users, userId }: any) {
    const [list, setList] = useState<FriendsWishlist[]>([]);

    useEffect(() => {
        getFriendsWish(setList, userId);
        console.log(list);
    }, []);

    return (
        <>
            {list.map((item) => (
                <FriendsWish item={item} key={item.productId} />
            ))}
        </>
    );
}
