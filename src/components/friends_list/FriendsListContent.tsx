import React from "react";

import FriendsFundingContainer from "./FriendsFundingContainer";
import FriendsWishContainer from "./FriendsWishContainer";

import { AiOutlineShop, AiOutlineShoppingCart } from "react-icons/ai";

export default function FriendsListContent({ user }: any) {
    return (
        <>
            <div className="friends-list-funding-wrapper">
                <div className="friends-list-funding-title">
                    <AiOutlineShop className="friends-list-funding-title-icon" />
                    {user.name} 님의 펀딩 내역
                </div>
                <div className="friends-list-funding">
                    <FriendsFundingContainer />
                </div>
            </div>
            <div className="friends-list-wish-wrapper">
                <div className="friends-list-wish-title">
                    <AiOutlineShoppingCart className="friends-list-wish-title-icon" />
                    {user.name} 님의 Wishlist
                </div>
                <div className="friends-list-wish">
                    <FriendsWishContainer />
                </div>
            </div>
        </>
    );
}
