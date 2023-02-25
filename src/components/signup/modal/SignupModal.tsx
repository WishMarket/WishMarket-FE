import React from "react";
import { Modal } from "react-bootstrap";
import { SignUpError } from "../../../hooks/Errors";
import { SignupModalProps } from "../Signup.interface";

export default function SignupModal({
  setErrorShow,
  errorShow,
  errorCode,
}: SignupModalProps) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };
  return (
    <Modal show={errorShow} onHide={handleClose}>
      <Modal.Body>{SignUpError(errorCode)}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          닫기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
