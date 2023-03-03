import React from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Account_Withdrawal } from "../../hooks/axios/Profile";
import { RemoveTokens } from "../../hooks/Tokens";
import { WithdrawalProps } from "./Profile.interface";

export default function WithdrawalModal({ errorShow, setErrorShow }: WithdrawalProps) {
    const navigate = useNavigate();
    const onClickWithdrawal = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await Account_Withdrawal();
        console.log(result);
        if (result.data == "WITHDRAWAL_SUCCESS") {
            RemoveTokens();
            setErrorShow(false);
            alert("회원탈퇴 되었습니다. 이용해주셔서 감사합니다.");
            navigate("/");
        }
    };
    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setErrorShow(false);
    };
    return (
        <Modal show={errorShow} onHide={handleClose}>
            <Modal.Body>
                <div className="Withdrawal_Wrapper">
                    <div className="Withdrawal_DESC">계정을 삭제하면 되돌릴 수 없으며, 삭제한 데이터를 복구할 수 없습니다. 정말로 탈퇴하시겠습니까?</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-warning" onClick={onClickWithdrawal}>
                    회원 탈퇴
                </button>
                <button className="btn btn-secondary" onClick={handleClose}>
                    취소
                </button>
            </Modal.Footer>
        </Modal>
    );
}
