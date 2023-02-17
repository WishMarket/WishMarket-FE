import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { commaNums } from "../../hooks/CommaNums";

import { TfiAlarmClock } from "react-icons/tfi";
import { IoMdCopy } from "react-icons/io";
import { BsShareFill } from "react-icons/bs";
import { CopyClipBoard } from "../../hooks/CopyClipBoard";

interface FundingInfo {
    gift: any;
}

export default function AccountCard({ gift }: FundingInfo) {
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
                    {gift.date}
                </div>
                <div className="Account_Card_Inner">
                    <img src={gift.image} alt={gift.name} className="Account_Card_Img" />
                    <div className="Account_Card_Content">
                        <div className="Account_Card_Receiver">To. {gift.receiver}</div>
                        <div className="Account_Card_Top_Area">
                            <div className="Account_Card_Product_Info">
                                <div className="Account_Card_Title">{gift.name}</div>
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
                                    width: `${((gift.gatherPoint / gift.price) * 100).toFixed(2)}%`,
                                }}
                            >
                                {((gift.gatherPoint / gift.price) * 100).toFixed(2)}%
                            </div>
                        </div>
                        <div className="Account_Card_Gatherd">
                            <div className="Account_Card_Gathered_Label">모인 금액</div>
                            <div className="Account_Card_Gathered_Content">{commaNums(gift.gatherPoint)} 원</div>
                            <div className="Account_Card_Attend_Badge">{gift.participant.length} 명 참여</div>
                        </div>
                        <div className="Account_Card_Remaining">
                            <div className="Account_Card_Remaining_Label">남은 금액</div>
                            <div className="Account_Card_Remaining_Content">{commaNums(gift.price - gift.gatherPoint)} 원</div>
                        </div>
                        <div className="Account_Card_Payment">
                            <div className="Account_Card_Payment_Label">내 펀딩 금액</div>
                            <div className="Account_Card_Payment_Content">{commaNums(gift.accountPoint)} 원</div>
                        </div>

                        {/* 추후에 링크 경로 확인 필요 */}
                        <div className="Account_Card_Btn_Area">
                            <button className="Account_Card_Btn_Funding btn btn-warning">추가 펀딩</button>
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
                                    <input className="Share_LinkBox" type="text" value={gift.url} readOnly></input>
                                    <button className="btn btn-light">
                                        <IoMdCopy className="copy_Button" onClick={() => CopyClipBoard(gift.url)} />
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
