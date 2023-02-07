import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdCopy } from "react-icons/io";
import { BsShareFill } from "react-icons/bs";
import { CopyClipBoard } from "../../hooks/CopyClipBoard";

interface Product {
    name: string;
    image: string;
    price: number;
    date: string;
    funded_price: number;
    my_fund: number;
    url: string;
}

export default function FundingAttend(props: Product) {
    const [show, setShow] = useState(false);
    let remaining_Amount = props.price - props.funded_price;
    let remaining_Percent = ((props.funded_price / props.price) * 100).toFixed(2);
    let url = props.url;

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
        <div className="fundingProgress_Wrapper">
            <div className="fundingProgress">
                <span className="funding_Date">{props.date}</span>
                <span className="funding_To">To. 홍길순</span>
                <img className="funding_Image" src={props.image} alt="200 * 400 size image" />
                <div className="funding_ItemName">{props.name}</div>
                <div className="funding_Price">
                    <span>목표:</span>
                    <span> {commaNums(props.price)}원</span>
                </div>
                <div
                    className="funding_Progress progress"
                    role="progressbar"
                    style={{
                        height: "25px",
                    }}
                >
                    <div
                        className="progress-bar"
                        style={{
                            width: `${remaining_Percent}%`,
                        }}
                    >
                        {remaining_Percent}%
                    </div>
                </div>
                <div className="funding_gathered">
                    <span>모인 금액:</span>
                    <span> {commaNums(props.funded_price)}</span>
                    <span className="funding_AttendMember">funded_user 참여</span>
                </div>
                <div className="funding_Remaining">
                    <span>남은 금액:</span>
                    <span> {commaNums(remaining_Amount)}</span>
                </div>
                <div className="funding_Myfund">
                    <span>내 펀딩 금액:</span>
                    <span> {commaNums(props.my_fund)}</span>
                </div>
                {/* Link경로 바꿔야함 */}

                <div className="Funding_Btn_Area">
                    <Link to={"./login"}>
                        <div className="btn btn-warning funding_Attend">펀딩 참여하기</div>
                    </Link>
                    {/* <button className="btn btn-primary funding_Share" type="button" onClick={handleShow}>
                    공유하기
                </button> */}
                    <button className="funding_Share" onClick={handleShow}>
                        <BsShareFill className="funding_Share_icon" />
                    </button>
                    {/* 공유 버튼 통일 */}
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>공유하기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <span>링크:</span>
                            <input className="Share_LinkBox" type="text" value={url} readOnly></input>
                            <button className="btn btn-light">
                                <IoMdCopy className="copy_Button" onClick={() => CopyClipBoard(url)} />
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
