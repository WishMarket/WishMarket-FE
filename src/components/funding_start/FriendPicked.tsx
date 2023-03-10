import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FriendPickedProps } from "./FundingStart.interface";

export default function FriendPicked({
  pickFriendName,
  setPickFriendName,
  pickFriendProfile,
  setPickFriendProfile,
}: FriendPickedProps) {
  const onCancelSelect = () => {
    setPickFriendName(null);
    setPickFriendProfile(null);
  };

  return (
    <div className="Selected_Wrapper">
      <span>
        <h2>
          <BsFillPersonCheckFill className="Selected_Icon" />
          선택된 친구
        </h2>
      </span>
      <div>
        {pickFriendProfile ? (
          <div className="Selected_Friend">
            <div className="Friend_desc">
              <img
                className="Friend_image"
                src={pickFriendProfile}
                alt="friend-image"
              />
              <span>{pickFriendName}</span>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={onCancelSelect}
            >
              취소
            </button>
          </div>
        ) : (
          <div>선택된 친구가 없습니다.</div>
        )}
      </div>
    </div>
  );
}
