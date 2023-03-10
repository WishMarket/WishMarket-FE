import React from "react";
import { Link } from "react-router-dom";

import { commaNums } from "../../hooks/CommaNums";
import { FriendsWishItem } from "./FriendsLists.inferface";

export default function FriendsWish({ item }: FriendsWishItem) {
    return (
        <>
            <div className="Wishlist_Item">
                <img src={item.productImage} alt={item.productName} className="Wishlist_Img" />
                <div className="Wishlist_Content">
                    <div className="Wishlist_Info">
                        <div className="Wishlist_Title">{item.productName}</div>
                        <div className="Wishlist_Price">{commaNums(item.price)} 원</div>
                    </div>
                    <div className="Wishlist_Btn_Area">
                        <Link to={"/category/product/" + item.productId}>
                            <button className="btn btn-warning Go_To_Detail">상세보기</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
