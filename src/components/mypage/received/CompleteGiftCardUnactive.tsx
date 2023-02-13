import React, { useState } from "react";
import { commaNums } from "../../../hooks/CommaNums";

interface FundingInfo {
    gift: any;
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CompleteGiftCardUnactive({ gift, isActive, setIsActive }: FundingInfo) {
    return (
        <>
            <div id="Complete_Gift_Card_Item" className={isActive ? "active" : "unactive"}>
                <div className="Complete_Gift_Left">
                    <div className="Complete_Gift_Date">{gift.date}</div>
                    <img src={gift.image} alt={gift.name} className="Complete_Gift_Img" />
                </div>
                <div className="Complete_Gift_Content">
                    <div className="Complete_Gift_Info">
                        <div className="Complete_Gift_Item_Title">{gift.name}</div>
                        <div className="Complete_Gift_Price">{commaNums(gift.price)} 원</div>
                        <div className="Complete_Gift_People">
                            <div className="Complete_Gift_People_Label">참여자</div>
                            <div className="Complete_Gift_People_Content">{gift.participant.join(", ")}</div>
                        </div>
                    </div>
                    <div className="Complete_Gift_Btn_Area">
                        <button className="btn btn-primary Active_Controll" onClick={() => setIsActive(true)}>
                            배송지 입력
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
