import React, { useState, useEffect } from "react";
import { commaNums } from "../../hooks/CommaNums";
import { ReceivedFundingItem } from "./Received.interface";
import { getFundingGift } from "../../hooks/axios/Gift";

export default function FinishedGiftCard() {
    const [fundingInfo, setFundingInfo] = useState<ReceivedFundingItem[]>([]);

    useEffect(() => {
        getFundingGift(setFundingInfo);
    }, [fundingInfo]);

    return (
        <>
            {fundingInfo.map((gift) =>
                gift.fundedStatusType === "COMPLETION" ? (
                    <div className="Finished_Gift_Item" key={gift.fundingId}>
                        <img className="Finished_Gift_Img" src={gift.productImagerUrl} alt={gift.productName} />
                        <div className="Finished_Gift_Content">
                            <div className="Finished_Gift_Title">{gift.productName}</div>
                            <div className="Finished_Gift_Price">{commaNums(gift.price)} 원</div>
                            <div className="Finished_Gift_Notify">이미 수령한 상품입니다.</div>
                            <div className="Finished_Gift_Date">
                                <div className="Finished_Gift_Date_Label">펀딩 기간</div>
                                <div className="Finished_Gift_Date_Content">{gift.endDate}</div>
                            </div>
                            <div className="Finished_Gift_Review">
                                <div className="Finished_Gift_Review_Label">보낸 리뷰</div>
                                <div className="Finished_Gift_Review_Content">{gift.review ? gift.review : "리뷰를 작성하지 않았습니다."}</div>
                            </div>
                        </div>
                    </div>
                ) : null
            )}
        </>
    );
}
