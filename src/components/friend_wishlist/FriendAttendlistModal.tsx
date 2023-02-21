import React from 'react'
import { Modal } from "react-bootstrap";
import { IoMdCopy } from "react-icons/io";
import { CopyClipBoard } from "../../hooks/CopyClipBoard";

interface Props {
  show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    fundingId: number;
}
export default function FriendAttendlistModal({show, setShow,fundingId}:Props) {

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
      setShow(false);
    }; 
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>공유하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Modal_Inner">
          <span className="Modal_Title">링크:</span>
          <input
            className="Share_LinkBox"
            type="text"
            value={`http://localhost:5173/funding/join/${fundingId}`}
            readOnly
          ></input>
          <button className="btn btn-light">
            <IoMdCopy
              className="copy_Button"
              onClick={() =>
                CopyClipBoard(
                  `http://localhost:5173/funding/join/${fundingId}`
                )
              }
            />
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          닫기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
