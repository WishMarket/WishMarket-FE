import React from "react";
interface Props {
  Userid: string;
  profile: string;
  name: string;
  FriendSelect(Userid: string, name: string, profile: string): any;
}

export default function FriendPicker(props: Props) {
  const clickSelect = (Userid: string, name: string, profile: string) => {
    props.FriendSelect(Userid, name, profile);
  };
  return (
    <>
      {/* props로 친구 이름, 사진 받고 checkbox가 체크되면 선택된 친구에 추가 */}
      <li className="Friend">
        <div className="Friend_desc">
          <img
            className="Friend_image"
            src={props.profile}
            alt="friend-image"
          />
          <span>{props.name}</span>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => clickSelect(props.Userid, props.name, props.profile)}
          type="button"
        >
          선택
        </button>
      </li>
    </>
  );
}
