import React from "react";
import { Modal } from "react-bootstrap";
import { LoginError } from "../../hooks/Errors";
import { LoginModalProps } from "./Login.interface";

export default function LoginModal({
  setErrorShow,
  errorShow,
  errorCode,
}: LoginModalProps) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };
  return (
    <Modal show={errorShow} onHide={handleClose}>
      <Modal.Body>{LoginError(errorCode)}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          닫기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
