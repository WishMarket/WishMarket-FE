import React from "react";
import { commaNums } from "../../hooks/CommaNums";
import CardItemModal from "./CardItemModal";
import { TfiAlarmClock } from "react-icons/tfi";
import { BsShareFill } from "react-icons/bs";
import { AccountFundingType } from "./Account.interface";

export default function ExpiredCardItem({ gift, show, setShow }: AccountFundingType) {
    const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
    };

    return (
        <div className="Account_Expired_Card_Item">
            <div className="Account_Expired_Card_Date">
                <TfiAlarmClock className="Account_Expired_Card_Date_Icon" />
                {gift.endDate}
            </div>
            <div className="Account_Expired_Card_Inner">
                <img src={gift.productImagerUrl} alt={gift.productName} className="Account_Expired_Card_Img" />
                <div className="Account_Expired_Card_Content">
                    <div className="Account_Expired_Card_Receiver">To. {gift.targetName}</div>
                    <div className="Account_Expired_Card_Top_Area">
                        <div className="Account_Expired_Card_Product_Info">
                            <div className="Account_Expired_Card_Title">{gift.productName}</div>
                            <div className="Account_Expired_Card_Price">{commaNums(gift.price)} 원</div>
                        </div>
                    </div>
                    <div
                        className="Account_Expired_Card_Progress progress"
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
                    <div className="Account_Expired_Card_Notify">기간 내 목표 달성에 실패했어요. 😔 내 펀딩 금액은 모두 반환됩니다.</div>
                    <div className="Account_Expired_Card_Gatherd">
                        <div className="Account_Expired_Card_Gathered_Label">모인 금액</div>
                        <div className="Account_Expired_Card_Gathered_Content">{commaNums(gift.fundedPrice)} 원</div>
                        <div className="Account_Expired_Card_Attend_Badge">{gift.participants.length} 명 참여</div>
                    </div>
                    <div className="Account_Expired_Card_Payment">
                        <div className="Account_Expired_Card_Payment_Label">내 펀딩 금액</div>
                        <div className="Account_Expired_Card_Payment_Content">{commaNums(gift.myFundingPrice)} 원</div>
                    </div>
                    {/* 추후에 링크 경로 확인 필요 */}
                    <div className="Account_Expired_Card_Btn_Area">
                        <button className="Account_Expired_Card_Btn_Share" onClick={handleShow}>
                            <BsShareFill className="Account_Expired_Card_Share_Icon" />
                        </button>
                    </div>
                    <CardItemModal gift={gift} show={show} setShow={setShow} />
                </div>
            </div>
        </div>
    );
}
