import React from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { CopyClipBoard } from "../../hooks/CopyClipBoard";

import { IoMdCopy } from "react-icons/io";
import { DetailModalType } from "./Detail.interface";

export default function DetailModal({ item, showModal, setShowModal }: DetailModalType) {
    const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setShowModal(false);
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>공유하기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="Modal_Inner">
                    <span className="Modal_Title">링크:</span>
                    <input className="Share_LinkBox" type="text" value={"/category/product/" + item.productId} readOnly />
                    <button className="btn btn-light">
                        <IoMdCopy className="copy_Button" onClick={() => CopyClipBoard("/category/product/" + item.productId)} />
                    </button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                    닫기
                </button>
            </Modal.Footer>
        </Modal>
    );
}
