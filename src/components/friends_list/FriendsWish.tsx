import React from "react";
import { Link } from "react-router-dom";

import { commaNums } from "../../hooks/CommaNums";
import { FriendsWishItem } from "./FriendsLists.inferface";

export default function FriendsWish({ item }: FriendsWishItem) {
    return (
        <>
            <div className="Wishlist_Item">
                <img src={item.image} alt={item.name} className="Wishlist_Img" />
                <div className="Wishlist_Content">
                    <div className="Wishlist_Info">
                        <div className="Wishlist_Title">{item.name}</div>
                        <div className="Wishlist_Price">{commaNums(item.price)} 원</div>
                    </div>
                    <div className="Wishlist_Btn_Area">
                        <Link to={"/category/product/" + item.productId}>
                            <button className="btn btn-warning Go_To_Detail">상세보기</button>
                        </Link>
                        <button className="Go_To_Funding_Start">선물하기</button>
                    </div>
                </div>
            </div>
        </>
    );
}
