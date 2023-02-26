import React from "react";
import { Link } from "react-router-dom";

import { commaNums } from "../../hooks/CommaNums";
import { WishlistItemType } from "./Wishlist.interface";

export default function WishlistCard({ item }: WishlistItemType) {
    return (
        <div className="Wishlist_Item">
            <img src={item.image} alt={item.name} className="Wishlist_Img" />
            <div className="Wishlist_Content">
                <div className="Wishlist_Info">
                    <div className="Wishlist_Title">{item.name}</div>
                    <div className="Wishlist_Price">{commaNums(item.price)} 원</div>
                </div>
                <div className="Wishlist_Btn_Area">
                    <Link to={"/category/product/" + item.productId}>
                        <button className="btn btn-warning Go_To_Detail">삭제하기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
