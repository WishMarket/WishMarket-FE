import React from "react";
import { Modal } from "react-bootstrap";
import DaumPostCode from "react-daum-postcode";
import { AddressData } from "./Profile.interface";
import { AddressModalType } from "./Profile.interface";

export default function ModifyProfileContainer({ mapShow, setMapShow, setAddress }: AddressModalType) {
    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setMapShow(false);
    };

    const onAddressChangeHandler = (data: AddressData) => {
        setAddress(data.address);
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
