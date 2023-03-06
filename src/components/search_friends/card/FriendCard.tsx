import React, { useState } from "react";
import defaultImg from "../../../assets/default-profile-img.png";
import { SearchFriendsObj } from "../SearchFriend.interface";
import {
  FriendsFollowAdd,
  FriendsFollowDelete,
} from "../../../hooks/axios/SearchFriend";
import FriendCardModal from "../modal/FriendCardModal";
export default function FriendCard({
  userId,
  profileImageUrl,
  name,
  nickName,
  email,
  isFriend,
}: SearchFriendsObj) {
  const [friended, setFriended] = useState<boolean>(isFriend);
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);

  const FriendDeleteHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const follow = await FriendsFollowDelete(userId);
    if (follow.status == 200) {
      setErrorCode(1);
      setFriended(false);
      setErrorShow(true);
    }
  };

  const FriendAddHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const follow = await FriendsFollowAdd(userId);
    if (follow.status == 200) {
      setErrorCode(0);
      setFriended(true);
      setErrorShow(true);
    }
  };

  if (userId == null) {
    return <div>검색 결과가 없습니다.</div>;
  } else {
    return (
      <div className="FriendResult_Wrapper">
        <div>
          <img
            src={profileImageUrl ? profileImageUrl : defaultImg}
            className="FriendResult_image"
          />
        </div>
        <div className="FriendResult_DESC">
          <div className="FriendResult_bgc">
            <div className="FriendResult_names">
              <h2>{name}</h2>
              <h3>{nickName}</h3>
            </div>
            <div className="FriendResult_Mail">{email}</div>
            <div className="FriendResult_Btns">
              {friended ? (
                <button
                  className="btn btn-danger"
                  onClick={FriendDeleteHandler}
                >
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
        <FriendCardModal
          errorShow={errorShow}
          setErrorShow={setErrorShow}
          errorCode={errorCode}
          name={name}
        />
      </div>
    );
  }
}
