import React, { useState } from "react";
import CompleteGiftCardActive from "./CompleteGiftCardActive";
import { commaNums } from "../../hooks/CommaNums";
import { ReceivedFundingInfo } from "./Received.interface";

export default function CompleteGiftCardUnactive({ gift }: ReceivedFundingInfo) {
    const [modifyState, setModifyState] = useState<boolean>(false);

    return (
        <>
            {!modifyState ? (
                <div className="Complete_Gift_Card_Item">
                    <img src={gift.productImagerUrl} alt={gift.productName} className="Complete_Gift_Img" />
                    <div className="Complete_Gift_Content">
                        <div className="Complete_Gift_Info">
                            <div className="Complete_Gift_Item_Title">{gift.productName}</div>
                            <div className="Complete_Gift_Price">{commaNums(gift.price)} 원</div>
                            <div className="Complete_Gift_Notify">수령 가능한 상품입니다. 배송 정보를 입력하세요.</div>
                            <div className="Complete_Gift_Date">
                                <div className="Complete_Gift_Date_Label">펀딩 기간</div>
                                <div className="Complete_Gift_Date_Content">
                                    {gift.startDate.substring(0, 10)} - {gift.endDate.substring(0, 10)}
                                </div>
                            </div>
                            <div className="Complete_Gift_People">
                                <div className="Complete_Gift_People_Label">참여자</div>
                                <div className="Flex_Container">
                                    <div className="Complete_Gift_People_Content">{gift.participants.join(", ")}</div>
                                    <div className="Complete_Gift_People_Badge">{gift.participants.length} 명 참여</div>
                                </div>
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
