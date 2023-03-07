import React from "react";
import { Modal } from "react-bootstrap";
import { FindPasswdError } from "../../../hooks/Errors";
import { FindPasswdTimerModalProps } from "../FindPasswd.interface";

export default function FindPasswdTimerModal({
  errorShow,
  setErrorShow,
  error,
}: FindPasswdTimerModalProps) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };

  return (
    <Modal show={errorShow} onHide={handleClose}>
      <Modal.Body>{FindPasswdError(error)}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          닫기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
