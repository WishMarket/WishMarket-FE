import React from "react";
import { Modal } from "react-bootstrap";

interface Props {
  errorShow: boolean;
  setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WithdrawalMoadl({ errorShow, setErrorShow }: Props) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };
  return (
    <Modal show={errorShow} onHide={handleClose}>
      <Modal.Body>
        <div className="Withdrawal_Wrapper">
          <div className="Withdrawal_DESC">
            계정을 삭제하면 되돌릴 수 없으며, 삭제한 데이터를 복구할 수
            없습니다. 정말로 탈퇴하시겠습니까?
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-warning">회원 탈퇴</button>
        <button className="btn btn-secondary" onClick={handleClose}>
          취소
        </button>
      </Modal.Footer>
    </Modal>
  );
}
