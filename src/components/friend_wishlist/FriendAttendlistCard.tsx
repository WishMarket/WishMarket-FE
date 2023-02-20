import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { commaNums } from "../../hooks/CommaNums";

import { TfiAlarmClock } from "react-icons/tfi";
import { IoMdCopy } from "react-icons/io";
import { BsShareFill } from "react-icons/bs";
import { CopyClipBoard } from "../../hooks/CopyClipBoard";
import { Link } from "react-router-dom";

interface AttendList {
  item: {
    fundingId: number;
    targetId: number;
    targetName: string;
    product: {
      productId: number;
      name: string;
      productImageUrl: string;
      price: number;
    };
    fundedPrice: number;
    myfundingPrice: number;
    participants: string[];
    fundStatus: string;
    startDate: string;
    endDate: string;
  };
}

export default function FriendAttendlistCard({ item }: AttendList) {
  const [show, setShow] = useState(false);

  const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setShow(false);
  };

  return (
    <>
      <div className="Account_Card_Item">
        <div className="Account_Card_Date">
          <TfiAlarmClock className="Account_Card_Date_Icon" />
          {item.startDate} ~ {item.endDate}
        </div>
        <div className="Account_Card_Inner">
          <img
            src={item.product.productImageUrl}
            alt={item.product.name}
            className="Account_Card_Img"
          />
          <div className="Account_Card_Content">
            <div className="Account_Card_Receiver">To. {item.targetName}</div>
            <div className="Account_Card_Top_Area">
              <div className="Account_Card_Product_Info">
                <div className="Account_Card_Title">{item.product.name}</div>
                <div className="Account_Card_Price">
                  {commaNums(item.product.price)} 원
                </div>
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
                  width: `${(
                    (item.fundedPrice / item.product.price) *
                    100
                  ).toFixed(2)}%`,
                }}
              >
                {((item.fundedPrice / item.product.price) * 100).toFixed(2)}%
              </div>
            </div>
            <div className="Account_Card_Gatherd">
              <div className="Account_Card_Gathered_Label">모인 금액</div>
              <div className="Account_Card_Gathered_Content">
                {commaNums(item.fundedPrice)} 원
              </div>
              <div className="Account_Card_Attend_Badge">
                {item.participants.length} 명 참여
              </div>
            </div>
            <div className="Account_Card_Remaining">
              <div className="Account_Card_Remaining_Label">남은 금액</div>
              <div className="Account_Card_Remaining_Content">
                {commaNums(item.product.price - item.fundedPrice)} 원
              </div>
            </div>
            <div className="Account_Card_Payment">
              <div className="Account_Card_Payment_Label">내 펀딩 금액</div>
              <div className="Account_Card_Payment_Content">
                {commaNums(item.myfundingPrice)} 원
              </div>
            </div>

            <div className="Account_Card_Btn_Area">
              <Link to={`/funding/join/${item.fundingId}`}>
                <button className="Account_Card_Btn_Funding btn btn-warning">
                  펀딩 참여하기
                </button>
              </Link>
              <button className="Account_Card_Btn_Share" onClick={handleShow}>
                <BsShareFill className="Account_Card_Share_Icon" />
              </button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>공유하기</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="Modal_Inner">
                  <span className="Modal_Title">링크:</span>
                  <input
                    className="Share_LinkBox"
                    type="text"
                    value={`http://localhost:5173/funding/join/${item.fundingId}`}
                    readOnly
                  ></input>
                  <button className="btn btn-light">
                    <IoMdCopy
                      className="copy_Button"
                      onClick={() =>
                        CopyClipBoard(
                          `http://localhost:5173/funding/join/${item.fundingId}`
                        )
                      }
                    />
                  </button>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClose}>
                  닫기
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
