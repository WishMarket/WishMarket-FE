import React from "react";
import { Link } from "react-router-dom";
import { commaNums } from "../../hooks/CommaNums";

interface Item {
  item: {
    fundingId: number;
    userId: number;
    name: string;
    fundStatus: string;
    product: {
      productId: number;
      name: string;
      image: string;
      price: number;
    };
  };
}

export default function FriendWishlistCard({ item }: Item) {
  return (
    <div className="Wishlist_Item">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="Wishlist_Img"
      />
      <div className="Wishlist_Content">
        <div className="Wishlist_Info">
          <div className="Wishlist_Title">{item.name}</div>
          <div className="Wishlist_Price">
            {commaNums(item.product.price)} 원
          </div>
        </div>
        <div className="Wishlist_Btn_Area">
          {item.fundStatus == "Ing" ? (
            <Link to={`/funding/join/${item.fundingId}`}>
              <button className="btn btn-warning Wishlist_Btn">
                펀딩 참여하기
              </button>
            </Link>
          ) : item.fundStatus == "NotStart" ? (
            <Link to={`/funding/start/${item.product.productId}`}>
              <button className="btn btn-primary Wishlist_Btn">
                펀딩 시작하기
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
