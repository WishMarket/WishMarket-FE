import React from "react";
import { Link } from "react-router-dom";

import { deleteMyWish } from "../../hooks/axios/MyWishlist";
import { commaNums } from "../../hooks/CommaNums";
import { WishlistItemType } from "./Wishlist.interface";

export default function WishlistCard({ item }: WishlistItemType) {
    // reload는 일단 차선책
    const handleDeleteClick = () => {
        deleteMyWish(item.productId);
        location.reload();
    };

    return (
        <div className="Wishlist_Item">
            <img src={item.productImage} alt={item.productName} className="Wishlist_Img" />
            <div className="Wishlist_Content">
                <div className="Wishlist_Info">
                    <div className="Wishlist_Title">{item.productName}</div>
                    <div className="Wishlist_Price">{commaNums(item.price)} 원</div>
                </div>
                <div className="Wishlist_Btn_Area">
                    <button className="btn btn-warning Go_To_Detail" onClick={handleDeleteClick}>
                        삭제하기
                    </button>
                </div>
            </div>
        </div>
    );
}
