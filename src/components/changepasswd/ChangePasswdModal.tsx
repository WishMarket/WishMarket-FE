import React from 'react'
import { Modal } from "react-bootstrap";
import { SignUpError } from "../../hooks/Errors";

interface Props {
  errorShow: boolean;
  setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
  error: number;
}


export default function ChangePasswdModal({errorShow, setErrorShow, error}:Props) {
    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
      setErrorShow(false);
    };
  return (
    <Modal show={errorShow} onHide={handleClose}>
      <Modal.Body>{SignUpError(error)}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          닫기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
