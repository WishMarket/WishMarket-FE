import React, { useState } from "react";
import { commaNums } from "../../hooks/CommaNums";
import FriendsFundingModal from "./FriendsFundingModal";
import { TfiAlarmClock } from "react-icons/tfi";
import { BsShareFill } from "react-icons/bs";
import { FriendsFundingItem } from "./FriendsLists.inferface";
import { Link } from "react-router-dom";

export default function FriendsFunding({ gift }: FriendsFundingItem) {
    const [show, setShow] = useState(false);

    const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
    };

    return (
        <>
            <div className="Account_Card_Item">
                <div className="Account_Card_Date">
                    <TfiAlarmClock className="Account_Card_Date_Icon" />
                    {gift.startDate.substring(0, 10)} - {gift.endDate.substring(0, 10)}
                </div>
                <div className="Account_Card_Inner">
                    <img src={gift.productImagerUrl} alt={gift.productName} className="Account_Card_Img" />
                    <div className="Account_Card_Content">
                        <div className="Account_Card_Receiver">To. {gift.targetName}</div>
                        <div className="Account_Card_Top_Area">
                            <div className="Account_Card_Product_Info">
                                <div className="Account_Card_Title">{gift.productName}</div>
                                <div className="Account_Card_Price">{commaNums(gift.price)} 원</div>
                            </div>
                        </div>
                        <div
                            className="Account_Card_Progress progress"
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
                        <div className="Account_Card_Gatherd">
                            <div className="Account_Card_Gathered_Label">모인 금액</div>
                            <div className="Account_Card_Gathered_Content">{commaNums(gift.fundedPrice)} 원</div>
                            <div className="Account_Card_Attend_Badge">{gift.participants.length} 명 참여</div>
                        </div>
                        <div className="Account_Card_Remaining">
                            <div className="Account_Card_Remaining_Label">남은 금액</div>
                            <div className="Account_Card_Remaining_Content">{commaNums(gift.price - gift.fundedPrice)} 원</div>
                        </div>
                        <div className="Account_Card_Payment">
                            <div className="Account_Card_Payment_Label">내 펀딩 금액</div>
                            <div className="Account_Card_Payment_Content">{commaNums(gift.myFundingPrice)} 원</div>
                        </div>
                        <div className="Account_Card_Btn_Area">
                            <Link to={`/funding/join/${gift.fundingId}`}>
                                <button className="Account_Card_Btn_Funding btn btn-warning">참여하기</button>
                            </Link>
                            <button className="Account_Card_Btn_Share" onClick={handleShow}>
                                <BsShareFill className="Account_Card_Share_Icon" />
                            </button>
                        </div>
                        <FriendsFundingModal show={show} setShow={setShow} gift={gift} />
                    </div>
                </div>
            </div>
        </>
    );
}
