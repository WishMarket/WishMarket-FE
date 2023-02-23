import React from "react";
import { Modal } from "react-bootstrap";
import { EmailCheckError } from "../../hooks/Errors";

interface Props {
  setEmailCheckShow: React.Dispatch<React.SetStateAction<boolean>>;
  emailCheckShow: boolean;
  checkError: string;
}
export default function EmailCheckModal({
  setEmailCheckShow,
  emailCheckShow,
  checkError,
}: Props) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setEmailCheckShow(false);
  };
  return (
    <Modal show={emailCheckShow} onHide={handleClose}>
      <Modal.Body>{EmailCheckError(checkError)}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          닫기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
