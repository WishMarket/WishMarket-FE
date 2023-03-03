import React, { useState, useEffect } from "react";
import { commaNums } from "../../hooks/CommaNums";
import GiftShareModal from "./GiftShareModal";
import { getFundingGift } from "../../hooks/axios/Gift";
import { BsShareFill } from "react-icons/bs";
import { ReceivedFundingItem } from "./Received.interface";

export default function InProgressGiftCard() {
    const [show, setShow] = useState(false);
    const [fundingInfo, setFundingInfo] = useState<ReceivedFundingItem[]>([]);

    useEffect(() => {
        getFundingGift(setFundingInfo);
    }, []);

    const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
    };

    return (
        <>
            {fundingInfo.map((gift) =>
                gift.fundedStatusType === "ING" ? (
                    <div className="In_Progress_Gift_Item" key={gift.fundingId}>
                        <img className="In_Progress_Gift_Img" src={gift.productImagerUrl} alt={gift.productName} />
                        <div className="In_Progress_Gift_Content">
                            <div className="In_Progrss_Gift_Info">
                                <div className="In_Progress_Gift_Title">{gift.productName}</div>
                                <div className="In_Progress_Gift_Price">{commaNums(gift.price)}원</div>
                                <div
                                    className="In_Progress_Gift_Progress progress"
                                    role="progressbar"
                                    style={{
                                        height: "25px",
                                    }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${((gift.fundedPrice / gift.price) * 100).toFixed(2)}%`,
                                        }}
                                    >
                                        {((gift.fundedPrice / gift.price) * 100).toFixed(2)}%
                                    </div>
                                </div>
                                <div className="In_Progress_Gift_Date">
                                    <div className="In_Progress_Gift_Date_Label">펀딩 기간</div>
                                    <div className="In_Progress_Gift_Date_Content">{gift.endDate}</div>
                                </div>
                                <div className="Flex_Container">
                                    <div className="In_Progress_Gift_Gathered">
                                        <div className="In_Progress_Gift_Gathered_Label">모인 금액</div>
                                        <div className="In_Progress_Gift_Gathered_Content">{commaNums(gift.fundedPrice)}</div>
                                    </div>
                                    <div className="In_Progress_Gift_Remaining">
                                        <div className="In_Progress_Gift_Remaining_Label">남은 금액</div>
                                        <div className="In_Progress_Gift_Remaining_Content">{commaNums(gift.price - gift.fundedPrice)}</div>
                                    </div>
                                    <div className="In_Progress_Gift_Attend">
                                        <div className="In_Progress_Gift_Attend_Label">참여자 목록</div>
                                        <div className="Flex_Container">
                                            <div className="In_Progress_Gift_Attend_Content">{gift.participants.join(", ")}</div>
                                            <div className="In_Progress_Gift_Attend_Badge">{gift.participants.length} 명 참여</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 추후에 링크 경로 확인 필요 */}
                            <GiftShareModal show={show} setShow={setShow} fundingId={gift.fundingId} />
                            <div className="In_Progress_Gift_Btn_Area">
                                <button className="In_Progress_Gift_Share_Btn" onClick={handleShow}>
                                    <BsShareFill className="In_Progress_Gift_Share_Btn_Icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null
            )}
        </>
    );
}
