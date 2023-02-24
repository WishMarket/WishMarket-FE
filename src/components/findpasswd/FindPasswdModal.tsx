import React from "react";
import { Modal } from "react-bootstrap";
import { FindPasswdError } from "../../hooks/Errors";

interface Props {
  errorShow: boolean;
  error: string;
  setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function FindPasswdModal({
  errorShow,
  error,
  setErrorShow,
}: Props) {
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
