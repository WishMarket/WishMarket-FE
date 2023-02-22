import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FriendsError } from "../../../hooks/Errors";
import { FaMedal } from "react-icons/fa";
interface Props {
    data: {
        Userid: string;
        name: string;
        nickname: string;
        famous: boolean;
        profileImage: string;
        isfriend: boolean;
    };
}

export default function FamousFriendCard({ data }: Props) {
    const [friended, setFriended] = useState<boolean>(data.isfriend);
    const [errorShow, setErrorShow] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<number>(0);

    const FriendDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setErrorCode(1);
        setFriended(false);
        setErrorShow(true);
        // 친구 삭제 axios
    };
    const FriendAddHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setErrorCode(0);
        setFriended(true);
        setErrorShow(true);
        // 친구 추가 axios
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setErrorShow(false);
    };

    if (data.Userid.length == 0) {
        return <div>검색 결과가 없습니다.</div>;
    } else {
        return (
            <div className="FriendResult_Wrapper">
                <div>
                    <img src={data.profileImage} className="FriendResult_image" />
                </div>
                <div className="FriendResult_DESC">
                    <div className="FriendResult_bgc">
                        <div>
                            {data.famous ? (
                                <span className="FriendResult_Badge">
                                    <FaMedal className="FriendResult_Badge_Icon" /> Famous User
                                </span>
                            ) : (
                                <span>일반</span>
                            )}
                        </div>
                        <div className="FriendResult_names">
                            <h2>{data.name}</h2>
                            <h3>{data.nickname}</h3>
                        </div>

                        <div className="FriendResult_Btns">
                            {friended ? (
                                <button className="btn btn-danger" onClick={FriendDeleteHandler}>
                                    친구 삭제
                                </button>
                            ) : (
                                <button className="btn btn-warning " onClick={FriendAddHandler}>
                                    친구 추가
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <Modal show={errorShow} onHide={handleClose}>
                    <Modal.Body>{FriendsError(errorCode, data.name)}</Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={handleClose}>
                            닫기
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
