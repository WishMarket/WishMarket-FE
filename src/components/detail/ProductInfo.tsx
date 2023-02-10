import React from "react";

type ProductObj = {
    category: number;
    productId: string;
    name: string;
    image: string;
    price: number;
    like: number;
    date: string;
    funded_price: number;
    my_fund: number;
    url: string;
    best: boolean;
};

interface Items {
    items: ProductObj | null;
}

export default function ProductInfo({ items }: Items) {
    return (
        <>
            <div className="Product_Info_Area">
                {items != null ? (
                    <>
                        <img src={items.image} alt={items.name} className="Product_Info_Img" />
                    </>
                ) : null}
            </div>
        </>
    );
}
