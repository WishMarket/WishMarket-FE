import React from "react";

export default function ProductReview() {
    return (
        <>
            <div className="Detail_Review_Container">
                {/* 더보기 처리 논의 필요 */}
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
