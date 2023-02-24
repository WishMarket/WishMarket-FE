import { useState, useEffect } from "react";

import CategoryItemCard from "../category/CategoryItemCard";
import { getBestProduct } from "../../hooks/axios/ProductList";

interface Product {
    best: boolean;
    category: number;
    createdAt: string;
    description: string;
    likes: number;
    modifiedAt: string;
    name: string;
    price: number;
    productId: number;
    productImageUrl: string;
}

export default function FetchProduct() {
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
        getBestProduct(setItems, 1, 12);
    }, []);

    return (
        <>
            {items.slice(0, 8).map((item: any) => {
                return <CategoryItemCard item={item} key={item.productId} />;
            })}
        </>
    );
}
