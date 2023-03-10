import React from "react";
import { Modal } from "react-bootstrap";
import { FundingStartError } from "../../hooks/Errors";
import { FundingAdditionModalProps } from "./FundingAddition.interface";

export default function FundingAdditionModal({
  show,
  setShow,
  code,
}: FundingAdditionModalProps) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{FundingStartError(code)}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
