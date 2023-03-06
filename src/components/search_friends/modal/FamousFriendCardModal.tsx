import React from "react";
import { Modal } from "react-bootstrap";
import { FriendsError } from "../../../hooks/Errors";
import { FamousFriendCardModalProps } from "../SearchFriend.interface";

export default function FamousFriendCardModal({
  errorShow,
  setErrorShow,
  errorCode,
  name,
}: FamousFriendCardModalProps) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };

  return (
    <Modal show={errorShow} onHide={handleClose}>
      <Modal.Body>{FriendsError(errorCode, name)}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          닫기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
