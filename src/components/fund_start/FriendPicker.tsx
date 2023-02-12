import React from "react";
interface Props {
  profile: string;
  name: string;
}

export default function FriendPicker(props: Props) {
  return (
    <>
      {/* props로 친구 이름, 사진 받고 checkbox가 체크되면 선택된 친구에 추가 */}
      <li className="Friend">
              <span>{props.name}</span>
              <button className="btn btn-primary">선택</button>
      </li>
    </>
  );
}
