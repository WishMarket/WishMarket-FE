import React from "react";
interface Props {
  name: string;
  nickname: string;
  image: string;
}
export default function FriendList(props: Props) {
  return (
    <>
      <li className="FriendList">
        <div className="Friend">
          <img src={props.image} />
          <div className="Friend_DESC">
            <span>{props.name}</span>
            <span>{props.nickname}</span>
          </div>
        </div>
        <button type="button" className="btn btn-danger Friend_Button ">
          X
        </button>
      </li>
    </>
  );
}
