import React from "react";
interface Props {
  Userid: string;
  profile: string;
  name: string;
  email: string;
  FriendSelect(Userid: string, name: string, profile: string): any;
}

export default function FriendPicker(props: Props) {
  const clickSelect = (Userid: string, name: string, profile: string) => {
    props.FriendSelect(Userid, name, profile);
  };
  return (
    <>
      <li className="Friend">
        <div className="Friend_desc">
          <img
            className="Friend_image"
            src={props.profile}
            alt="friend-image"
          />
          <div className="Friend_info">
            <span>{props.name}</span>
            <span className="Friend_email">{props.email}</span>
            </div>
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
