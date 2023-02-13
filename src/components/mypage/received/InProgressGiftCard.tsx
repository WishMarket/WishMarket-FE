import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { commaNums } from "../../../hooks/CommaNums";

import { IoMdCopy } from "react-icons/io";
import { BsShareFill } from "react-icons/bs";
import { CopyClipBoard } from "../../../hooks/CopyClipBoard";

interface Funding {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    participant: any;
    addressInfo: boolean;
    url: string;
}

export default function InProgressGiftCard() {
    const [show, setShow] = useState(false);
    const [fundingInfo, setFundingInfo] = useState<Funding[]>([]);
    const FUNDING_URL = "/data/TestFundingData.json";

    // funding data axios
    const getFundingData = async () => {
        await axios
            .get(FUNDING_URL)
            .then((res) => {
                let response = res.data.funding;
                setFundingInfo(response);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getFundingData();
    }, []);

    const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setShow(false);
    };

    return (
        <>
            {fundingInfo.map((gift) => (
                <div className="In_Progress_Gift_Item" key={gift.fundingId}>
                    <img className="In_Progress_Gift_Img" src={gift.image} alt={gift.name} />
                    <div className="In_Progress_Gift_Content">
                        <div className="In_Progrss_Gift_Info">
                            <div className="In_Progress_Gift_Title">{gift.name}</div>
                            <div className="In_Progress_Gift_Price">{commaNums(gift.price)}원</div>
                            <div
                                className="In_Progress_Gift_Progress progress"
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
                            <div className="In_Progress_Gift_Date">
                                <div className="In_Progress_Gift_Date_Label">펀딩 기간</div>
                                <div className="In_Progress_Gift_Date_Content">{gift.date}</div>
                            </div>
                            <div className="Flex_Container">
                                <div className="In_Progress_Gift_Gathered">
                                    <div className="In_Progress_Gift_Gathered_Label">모인 금액</div>
                                    <div className="In_Progress_Gift_Gathered_Content">{commaNums(gift.gatherPoint)}</div>
                                </div>
                                <div className="In_Progress_Gift_Remaining">
                                    <div className="In_Progress_Gift_Remaining_Label">남은 금액</div>
                                    <div className="In_Progress_Gift_Remaining_Content">{commaNums(gift.price - gift.gatherPoint)}</div>
                                </div>
                                <div className="In_Progress_Gift_Attend">
                                    <div className="In_Progress_Gift_Attend_Label">참여자 목록</div>
                                    <div className="Flex_Container">
                                        <div className="In_Progress_Gift_Attend_Content">{gift.participant.join(", ")}</div>
                                        <div className="In_Progress_Gift_Attend_Badge">{gift.participant.length} 명 참여</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 추후에 링크 경로 확인 필요 */}
                        <div className="In_Progress_Gift_Btn_Area">
                            <button className="In_Progress_Gift_Share_Btn" onClick={handleShow}>
                                <BsShareFill className="In_Progress_Gift_Share_Btn_Icon" />
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
            ))}
        </>
    );
}
