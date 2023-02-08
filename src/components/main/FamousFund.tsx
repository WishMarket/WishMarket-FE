import React, { useState } from "react";
import FundingAttend from "./FundingAttend";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { products } from "../../data/productData.json";

interface Product {
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
}

export default function FamousFund() {
    const productData = products.slice(0, 11);
    const ITEM_WIDTH = 876;
    const LENGTH = productData.length - 1;
    const MAX_WIDTH = LENGTH * ITEM_WIDTH;
    const INIT_SLIDE_PX = (LENGTH / 2) * ITEM_WIDTH;
    const [slidePx, setSlidePx] = useState<number>(-INIT_SLIDE_PX);

    const toPrev = () => {
        if (slidePx < 0) setSlidePx(slidePx + ITEM_WIDTH);
    };

    const toNext = () => {
        if (slidePx > -MAX_WIDTH) setSlidePx(slidePx - ITEM_WIDTH);
    };

    return (
        <div>
            <div className="FamousFund_title">주목! 요즘 뜨는 펀딩 ✨</div>
            <div className="FamousFund_desc">현재 인기 유저가 진행 중인 펀딩 목록이에요.</div>
            <div className="Product_Scroll_Wrapper">
                <button name="left" className="carousel_Button_Left" onClick={toPrev} disabled={slidePx === 0 ? true : false}>
                    <AiOutlineLeft />
                </button>
                <div className="product_Wrapper">
                    <div
                        className="product_Scroll"
                        style={{
                            left: `${INIT_SLIDE_PX}px`,
                            transform: `translateX(${slidePx}px)`,
                            transition: "ease-in 0.5s all",
                        }}
                    >
                        {productData.map((item: Product) => {
                            return (
                                <div key={item.productId}>
                                    <FundingAttend name={item.name} date={item.date} price={item.price} funded_price={item.funded_price} my_fund={item.my_fund} image={item.image} url={item.url} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <button name="right" className="carousel_Button_Right" onClick={toNext} disabled={slidePx === -MAX_WIDTH ? true : false}>
                    <AiOutlineRight />
                </button>
            </div>
        </div>
    );
}
