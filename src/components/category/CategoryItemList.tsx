import { useEffect, useState } from "react";
import CategoryItemCard from "./CategoryItemCard";
import { getBestProduct } from "../../hooks/axios/ProductList";
import { CategoryTab } from "./Category.interface";

export default function CategoryItemList({ items, setItems }: CategoryTab) {
    const getBestProducts = () => {
        getBestProduct(setItems);
    };

    useEffect(() => {
        getBestProducts();
    }, []);

    return (
        <>
            {items.map((item) => (
                <CategoryItemCard item={item} key={item.productId} />
            ))}
        </>
    );
}
