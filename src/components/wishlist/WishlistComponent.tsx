import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { LoadWishlist } from "../../hooks/recoil/atoms";
import WishlistCard from "./WishlistCard";
import { WishlistType } from "./Wishlist.interface";
import { getMyWish } from "../../hooks/axios/MyWishlist";

export default function WishlistComponent() {
    const [list, setList] = useRecoilState(LoadWishlist);

    // 종속성 배열에 list 넣으면 새로고침 없이 잘 동작은 되는데 무한 루프 문제가 생김
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
