import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdCopy } from "react-icons/io";
import { BsShareFill } from "react-icons/bs";
import { CopyClipBoard } from "../../hooks/CopyClipBoard";

interface Funding {
    gift: any;
}

export default function FamousFundingCard({ gift }: Funding) {
    const [show, setShow] = useState(false);

    const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setShow(false);
    };

    // comma
    const commaNums = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className="Famous_Funding_Item">
            <img src={gift.image} alt={gift.name} className="Famous_Funding_Img" />
            <div className="Famous_Funding_Content">
                <div className="Famous_Funding_Info">
                    <div className="Famous_Funding_Receiver">To. {gift.receiver}</div>
                    <div className="Famous_Funding_Item_Title">{gift.name}</div>
                    <div className="Famous_Funding_Price">{commaNums(gift.price)}</div>
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
                                width: `${((gift.gatherPoint / gift.price) * 100).toFixed(2)}%`,
                            }}
                        >
                            {((gift.gatherPoint / gift.price) * 100).toFixed(2)}%
                        </div>
                    </div>
                    <div className="Famous_Funding_Date">
                        <div className="Famous_Funding_Date_Label">펀딩 기간</div>
                        <div className="Famous_Funding_Date_Content">{gift.date}</div>
                    </div>
                    <div className="Flex_Container">
                        <div className="Famous_Funding_Gathered">
                            <div className="Famous_Funding_Gathered_Label">모인 금액</div>
                            <div className="Famous_Funding_Gathered_Content">{commaNums(gift.gatherPoint)}</div>
                        </div>
                        <div className="Famous_Funding_Remaining">
                            <div className="Famous_Funding_Remaining_Label">남은 금액</div>
                            <div className="Famous_Funding_Remaining_Content">{commaNums(gift.price - gift.gatherPoint)}</div>
                        </div>
                        <div className="Famous_Funding_Attend">
                            <div className="Famous_Funding_Attend_Label">참여자 목록</div>
                            <div className="Flex_Container">
                                <div className="Famous_Funding_Attend_Content">{gift.participant.join(", ")}</div>
                                <div className="Famous_Funding_Attend_Badge">{gift.participant.length} 명 참여</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Famous_Funding_Btn_Area">
                    <button className="Famous_Funding_Share_Btn" onClick={handleShow}>
                        <BsShareFill className="Famous_Funding_Share_Btn_Icon" />
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
    );
}
