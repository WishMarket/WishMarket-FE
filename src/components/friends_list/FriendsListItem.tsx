import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { MdCancel } from "react-icons/md";
import { Modal } from "react-bootstrap";

import { FindUserId } from "../../hooks/recoil/atoms";
import { FriendsError } from "../../hooks/Errors";

interface FriendsObj {
    user: any;
}

export default function FriendsListItem({ user }: FriendsObj) {
    const [errorShow, setErrorShow] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<number>(1);
    const [userId, setUserId] = useRecoilState(FindUserId);

    const DelateFriendHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setErrorShow(true);
        setErrorCode(1);
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setErrorShow(false);
    };

    const checkUserId = () => {
        setUserId(user.Userid);
    };

    return (
        <>
            <li className="friends-list-item" key={user.Userid} onClick={checkUserId}>
                <div className="friends-list-info">
                    <img src={user.profile} alt={user.name} className="friends-list-item-img" />
                    <div>
                        <div className="friends-list-name">{user.name}</div>
                        <div className="friends-list-nickname">{user.nickname}</div>
                    </div>
                </div>
                <button type="button" className="friends-list-btn" onClick={DelateFriendHandler}>
                    <MdCancel className="friends-list-icon" />
                </button>
            </li>
            <Modal show={errorShow} onHide={handleClose}>
                <Modal.Body>{FriendsError(errorCode, user.name)}</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        닫기
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
