import React from "react";
import { Modal } from "react-bootstrap";
import { IoMdCopy } from "react-icons/io";
import { CopyClipBoard } from "../../hooks/CopyClipBoard";
import { GiftShareModalType } from "./Received.interface";

export default function GiftShareModal({ show, setShow }: GiftShareModalType) {
    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setShow(false);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>공유하기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="Modal_Inner">
                    <span className="Modal_Title">링크:</span>
                    <input className="Share_LinkBox" type="text" value="보류" readOnly />
                    <button className="btn btn-light">
                        <IoMdCopy className="copy_Button" onClick={() => CopyClipBoard("보류")} />
                    </button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClose}>
                    닫기
                </button>
            </Modal.Footer>
        </Modal>
    );
}