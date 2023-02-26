import React from "react";
import { Modal } from "react-bootstrap";
import DaumPostCode from "react-daum-postcode";
import { AddressData } from "../profile/Profile.interface";
import { ReceivedModalType } from "./Received.interface";

export default function GiftModal({ mapShow, setMapShow, setAddress }: ReceivedModalType) {
    const onAddressChangeHandler = (data: AddressData) => {
        setAddress(data.address);
        setMapShow(false);
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setMapShow(false);
    };

    return (
        <Modal show={mapShow} onHide={handleClose}>
            <Modal.Body>
                <DaumPostCode autoClose={false} onComplete={onAddressChangeHandler} />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClose}>
                    닫기
                </button>
            </Modal.Footer>
        </Modal>
    );
}
