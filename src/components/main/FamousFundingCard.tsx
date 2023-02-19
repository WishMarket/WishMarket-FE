import React, { useState, useEffect } from "react";
import { BsShareFill } from "react-icons/bs";
import { TfiAlarmClock } from "react-icons/tfi";

import FundingModal from "./FundingModal";
import { commaNums } from "../../hooks/CommaNums";
import { Link } from "react-router-dom";

interface Funding {
  gift: any;
}

export default function FamousFundingCard({ gift }: Funding) {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(true);
  };

  useEffect(() => {
    console.log(gift.startDate);
  }, []);

  return (
    <div className="Famous_Funding_Item">
      <div className="Account_Card_Date">
        <TfiAlarmClock className="Account_Card_Date_Icon" />
        {/* 임시로 표기 -- 추후 hooks 추가 */}
        {gift.startDate.substring(0, 10)} - {gift.endDate.substring(0, 10)}
      </div>
      <div className="Famous_Funding_Card_Inner">
        <img
          src={gift.product.productImageUrl}
          alt={gift.product.name}
          className="Famous_Funding_Img"
        />
        <div className="Famous_Funding_Content">
          <div className="Famous_Funding_Info">
            <div className="Famous_Funding_Receiver">To. {gift.targetName}</div>
            <div className="Famous_Funding_Top_Area">
              <div className="Famous_Funding_Item_Title">
                {gift.product.name}
              </div>
              <div className="Famous_Funding_Price">
                {commaNums(gift.product.price)} 원
              </div>
            </div>
            <div
              className="Famous_Funding_Progress progress"
              role="progressbar"
              style={{
                height: "25px",
              }}
            >
              <div
                className="progress-bar"
                style={{
                  width: `${(
                    (gift.fundedPrice / gift.product.price) *
                    100
                  ).toFixed(2)}%`,
                }}
              >
                {((gift.fundedPrice / gift.product.price) * 100).toFixed(2)}%
              </div>
            </div>

            <div className="Famous_Funding_Gathered">
              <div className="Famous_Funding_Gathered_Label">모인 금액</div>
              <div className="Famous_Funding_Gathered_Content">
                {commaNums(gift.fundedPrice)} 원
              </div>
            </div>
            <div className="Famous_Funding_Remaining">
              <div className="Famous_Funding_Remaining_Label">남은 금액</div>
              <div className="Famous_Funding_Remaining_Content">
                {commaNums(gift.product.price - gift.fundedPrice)} 원
              </div>
            </div>
            <div className="Famous_Funding_Attend">
              <div className="Famous_Funding_Attend_Label">참여자 목록</div>
              <div className="Famous_Funding_Attend_Content">
                {gift.participants.join(", ")}
              </div>
              <div className="Famous_Funding_Attend_Badge">
                {gift.participants.length} 명 참여
              </div>
            </div>
            <div className="Famous_Funding_Payment">
              <div className="Famous_Funding_Payment_Label">내 펀딩 금액</div>
              <div className="Famous_Funding_Payment_Content">
                {commaNums(gift.myfundingPrice)} 원
              </div>
            </div>
          </div>
          <div className="Famous_Funding_Btn_Area">
            {/* 임시링크 */}
            <Link to={`/funding/join/${gift.fundingId}`}>
              <button className="btn btn-warning">펀딩하기</button>
            </Link>
            <button className="Famous_Funding_Share_Btn" onClick={handleShow}>
              <BsShareFill className="Famous_Funding_Share_Btn_Icon" />
            </button>
          </div>
          <FundingModal show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
}
