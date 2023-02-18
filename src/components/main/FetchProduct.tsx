import { useState } from "react";

import CategoryItemCard from "../category/CategoryItemCard";

interface IFetch {
    items: any;
}

export default function FetchProduct({ items }: IFetch) {
    const [tabWish, setTabWish] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // wishlist btn
    const handleTabWish = () => {
        setTabWish(!tabWish);
    };

    // share btn
    const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setShowModal(false);
    };

    return (
        <>
            {items.slice(0, 8).map((item: any) => {
                return <CategoryItemCard item={item} key={item.productId} />;
            })}
        </>
    );
}
