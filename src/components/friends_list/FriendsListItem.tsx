import React, { useState } from "react";
import defaultImg from "../../assets/default-profile-img.png";

import { TiUserDelete } from "react-icons/ti";
import { Modal } from "react-bootstrap";

import { FriendsError } from "../../hooks/Errors";
import { FriendsFollowDelete } from "../../hooks/axios/SearchFriend";
import { FriendsItemState } from "./FriendsLists.inferface";

export default function FriendsListItem({ user, userId, setUserId }: FriendsItemState) {
    const [errorShow, setErrorShow] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<number>(1);

    const DelateFriendHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setErrorShow(true);
        setErrorCode(1);
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setErrorShow(false);
        location.reload();
    };

    const checkUserId = () => {
        setUserId(user.userId);
    };

    const DeleteFriends = () => {
        FriendsFollowDelete(user.userId);
    };

    return (
        <>
            <li className="friends-list-item" key={user.userId} onClick={checkUserId}>
                <div className="friends-list-info">
                    <img src={user.profileImageUrl ? user.profileImageUrl : defaultImg} alt={user.name} className="friends-list-item-img" />
                    <div>
                        <div className="friends-list-name">{user.name}</div>
                        <div className="friends-list-nickname">{user.nickName}</div>
                    </div>
                </div>
                <button type="button" className="friends-list-btn" onClick={DelateFriendHandler}>
                    <TiUserDelete className="friends-list-icon" onClick={DeleteFriends} />
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
