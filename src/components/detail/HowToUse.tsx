import React from "react";

import { IoMdGift } from "react-icons/io";
import { FaUserCheck, FaShoppingBasket } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";

export default function HowToUse() {
    return (
        <>
            <div className="How_To_Use_Container">
                <div className="How_To_Use_Item">
                    <IoMdGift className="How_To_Use_Icon" />
                    <div className="How_To_Use_Title">1. 선물 상품 선택</div>
                    <div className="How_To_Use_Desc">
                        선물할 상품을 선택하고
                        <br />
                        선물하기 버튼을 누릅니다.
                    </div>
                </div>
                <div className="How_To_Use_Item">
                    <FaUserCheck className="How_To_Use_Icon" />
                    <div className="How_To_Use_Title">2. 친구 선택</div>
                    <div className="How_To_Use_Desc">
                        선물 받을 친구를 체크한 다음,
                        <br />
                        기간과 펀딩할 포인트를 입력합니다.
                    </div>
                </div>
                <div className="How_To_Use_Item">
                    <FaShoppingBasket className="How_To_Use_Icon" />
                    <div className="How_To_Use_Title">3. 펀딩 시작</div>
                    <div className="How_To_Use_Desc">
                        펀딩이 시작됩니다. 참여자는
                        <br />
                        원하는 금액만큼 펀딩할 수 있습니다.
                    </div>
                </div>
                <div className="How_To_Use_Item">
                    <MdDeliveryDining className="How_To_Use_Icon" />
                    <div className="How_To_Use_Title">4. 선물 배송</div>
                    <div className="How_To_Use_Desc">
                        성공 시 친구는 배송지 입력 후
                        <br />
                        선물을 받을 수 있습니다.
                    </div>
                </div>
                <div className="How_To_Use_Item">
                    <RiRefund2Fill className="How_To_Use_Icon" />
                    <div className="How_To_Use_Title">5. 펀딩 실패</div>
                    <div className="How_To_Use_Desc">
                        실패 시 펀딩 참여 포인트는
                        <br />
                        모두 반환됩니다.
                    </div>
                </div>
            </div>
        </>
    );
}
