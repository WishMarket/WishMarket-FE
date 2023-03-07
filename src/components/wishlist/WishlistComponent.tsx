import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { LoadWishlist } from "../../hooks/recoil/atoms";
import WishlistCard from "./WishlistCard";
import { getMyWish } from "../../hooks/axios/MyWishlist";

export default function WishlistComponent() {
    const [list, setList] = useRecoilState(LoadWishlist);

    useEffect(() => {
        getMyWish(setList);
    }, []);

    return (
        <>
            <div className="main">
                <div className="Wishlist_Title_Text">Wishlist</div>
                <div className="Wishlist_Container">
                    <div className="Wishlist_Wrapper">
                        {list.map((item: any) => {
                            return <WishlistCard item={item} key={item.wishListId} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
