import React, { useState } from "react";
import CompleteGiftCardActive from "./CompleteGiftCardActive";
import { commaNums } from "../../../hooks/CommaNums";

interface FundingInfo {
    gift: any;
}

export default function CompleteGiftCardUnactive({ gift }: FundingInfo) {
    const [modifyState, setModifyState] = useState<boolean>(false);

    return (
        <>
            {!modifyState ? (
                <div className="Complete_Gift_Card_Item">
                    <div className="Complete_Gift_Left">
                        <div className="Complete_Gift_Date">{gift.date}</div>
                        <img src={gift.image} alt={gift.name} className="Complete_Gift_Img" />
                    </div>
                    <div className="Complete_Gift_Content">
                        <div className="Complete_Gift_Info">
                            <div className="Complete_Gift_Item_Title">{gift.name}</div>
                            <div className="Complete_Gift_Price">{commaNums(gift.price)} 원</div>
                            <div className="Complete_Gift_Notify">수령 가능한 상품입니다. 배송 정보를 입력하세요.</div>
                            <div className="Complete_Gift_People">
                                <div className="Complete_Gift_People_Label">참여자</div>
                                <div className="Complete_Gift_People_Content">{gift.participant.join(", ")}</div>
                            </div>
                        </div>
                        <div className="Complete_Gift_Btn_Area">
                            <button className="btn btn-primary Active_Controll" onClick={() => setModifyState(true)}>
                                배송지 입력
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <CompleteGiftCardActive gift={gift} />
            )}
        </>
    );
}