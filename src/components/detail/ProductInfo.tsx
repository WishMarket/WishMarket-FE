import React from "react";
import { ProductItem } from "./Detail.interface";

export default function ProductInfo({ item }: ProductItem) {
    return (
        <>
            <div className="Product_Info_Area">
                {item != null ? (
                    <>
                        <img src={item.description} alt={item.name} className="Product_Info_Img" />
                    </>
                ) : null}
            </div>
        </>
    );
}
