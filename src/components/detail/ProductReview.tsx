import React, { useState, useEffect } from "react";
import { ProductItem } from "./Detail.interface";
import { getReviews } from "../../hooks/axios/Reviews";
import { ReviewType } from "./Detail.interface";

export default function ProductReview({ item }: ProductItem) {
    const [reviews, setReviews] = useState<ReviewType[]>([]);

    useEffect(() => {
        getReviews(setReviews, item.productId);
    }, []);

    return (
        <>
            <div className="Detail_Review_Container">
                <div className="Detail_Review_Wrapper">
                    <div className="Detail_Review_Title">상품 리뷰</div>
                    <div className="Detail_Review_Desc">상품을 선물 받은 분들이 작성하신 리뷰입니다.</div>
                    {reviews.map((item) =>
                        item.comment !== "" ? (
                            <div className="Detail_Review_Item" key={item.id}>
                                <div className="Detail_Review_Name">{item.userName}</div>
                                <div className="Detail_Review_Content">{item.comment}</div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </>
    );
}
