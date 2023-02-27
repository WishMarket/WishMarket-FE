import React, { useState, useEffect } from "react";
import { ProductItem } from "./Detail.interface";
import { getReviews } from "../../hooks/axios/Reviews";

export default function ProductReview({ item }: ProductItem) {
    const [reviews, setReviews] = useState<any>(null);

    useEffect(() => {
        getReviews(setReviews, item.productId);
        console.log(reviews);
    }, []);

    return (
        <>
            <div className="Detail_Review_Container">
                <div className="Detail_Review_Wrapper">
                    <div className="Detail_Review_Title">상품 리뷰</div>
                    <div className="Detail_Review_Desc">상품을 선물 받은 분들이 작성하신 리뷰입니다.</div>
                    <div className="Detail_Review_Item">
                        <div className="Detail_Review_Name">철수</div>
                        <div className="Detail_Review_Content">너무 좋아요</div>
                    </div>
                    <div className="Detail_Review_Item">
                        <div className="Detail_Review_Name">철수</div>
                        <div className="Detail_Review_Content">너무 좋아요</div>
                    </div>
                    <div className="Detail_Review_Item">
                        <div className="Detail_Review_Name">철수</div>
                        <div className="Detail_Review_Content">너무 좋아요</div>
                    </div>
                </div>
            </div>
        </>
    );
}
