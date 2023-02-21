import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FriendsError } from "../../../hooks/Errors";

interface Props {
  data: {
    Userid: string;
    nickname: string;
    email: string;
    name: string;
    profileImage: string;
    isfriend: boolean;
  };
}

export default function FriendCard({ data }: Props) {
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
            <div className="FriendResult_names">
              <h2>{data.name}</h2>
              <h3>{data.nickname}</h3>
            </div>
            <div>{data.email}</div>
            <div>
              {friended ? (
                <button
                  className="btn btn-danger"
                  onClick={FriendDeleteHandler}
                >
                  친구삭제
                </button>
              ) : (
                <button className="btn btn-primary " onClick={FriendAddHandler}>
                  친구추가
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
