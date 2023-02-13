import { useEffect, useState } from "react";
import axios from "axios";

import WishlistCard from "./WishlistCard";

interface Wishlist {
    productId: number;
    name: string;
    image: string;
    price: number;
}

export default function WishlistComponent() {
    const [list, setList] = useState<Wishlist[]>([]);

    const url = "/data/Wishlist.json";

    // axios
    const getList = async () => {
        await axios
            .get(url)
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
            <div className="Wishlist_Title_Text">Wishlist</div>
            <div className="Wishlist_Container">
                <div className="Wishlist_Wrapper">
                    {list.map((item: any) => {
                        return <WishlistCard item={item} key={item.productId} />;
                    })}
                </div>
            </div>
        </>
    );
}
