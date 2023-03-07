import React from 'react'
import { Modal } from "react-bootstrap";
import { EmailCheckError } from "../../../hooks/Errors";
import { TimerModalProps } from '../Signup.interface';


export default function TimerModal({errorShow, setErrorShow, error}:TimerModalProps) {

     const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
       setErrorShow(false);
     };
    
  return (
    <Modal show={errorShow} onHide={handleClose}>
      <Modal.Body>{EmailCheckError(error)}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          닫기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
