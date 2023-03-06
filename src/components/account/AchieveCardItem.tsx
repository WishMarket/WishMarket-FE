import React from "react";
import { commaNums } from "../../hooks/CommaNums";
import AccountCardModal from "./AccountCardModal";
import { TfiAlarmClock } from "react-icons/tfi";
import { BsShareFill } from "react-icons/bs";
import { AccountFundingType } from "./Account.interface";

export default function AchieveCardItem({ gift, show, setShow }: AccountFundingType) {
    const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
    };

    return (
        <div className="Account_Achieve_Card_Item">
            <div className="Account_Achieve_Card_Date">
                <TfiAlarmClock className="Account_Achieve_Card_Date_Icon" />
                {gift.startDate.substring(0, 10)} - {gift.endDate.substring(0, 10)}
            </div>
            <div className="Account_Achieve_Card_Inner">
                <img src={gift.productImagerUrl} alt={gift.productName} className="Account_Achieve_Card_Img" />
                <div className="Account_Achieve_Card_Content">
                    <div className="Account_Achieve_Card_Receiver">To. {gift.targetName}</div>
                    <div className="Account_Achieve_Card_Top_Area">
                        <div className="Account_Achieve_Card_Product_Info">
                            <div className="Account_Achieve_Card_Title">{gift.productName}</div>
                            <div className="Account_Achieve_Card_Price">{commaNums(gift.price)} 원</div>
                        </div>
                    </div>
                    <div
                        className="Account_Achieve_Card_Progress progress"
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
                    <div className="Account_Achieve_Card_Notify">목표 금액을 달성하여 {gift.targetName} 님께 선물이 발송되었어요! 💌</div>
                    <div className="Account_Achieve_Card_Gatherd">
                        <div className="Account_Achieve_Card_Gathered_Label">모인 금액</div>
                        <div className="Account_Achieve_Card_Gathered_Content">{commaNums(gift.fundedPrice)} 원</div>
                        <div className="Account_Achieve_Card_Attend_Badge">{gift.participants.length} 명 참여</div>
                    </div>
                    <div className="Account_Achieve_Card_Payment">
                        <div className="Account_Achieve_Card_Payment_Label">내 펀딩 금액</div>
                        <div className="Account_Achieve_Card_Payment_Content">{commaNums(gift.myFundingPrice)} 원</div>
                    </div>
                    <div className="Account_Achieve_Card_Btn_Area">
                        <button className="Account_Achieve_Card_Btn_Share" onClick={handleShow}>
                            <BsShareFill className="Account_Achieve_Card_Share_Icon" />
                        </button>
                    </div>
                    <AccountCardModal gift={gift} show={show} setShow={setShow} />
                </div>
            </div>
        </div>
    );
}
