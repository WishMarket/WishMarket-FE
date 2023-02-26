import React from "react";
import { SelectBoxProps } from "./SearchFriend.interface";

export default function SelectBox({
  setShow,
  setSelect,
  selected,
  selectRef,
  show,
}: SelectBoxProps) {
  const closeSelect = (value: string, e: any) => {
    setShow("none");
    setSelect(value);
  };
  const showSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow("flex");
  };

  return (
    <>
      <div className="SelectButton" onClick={showSelect}>
        <div>{selected}</div>
      </div>
      <div
        ref={selectRef}
        style={{ 
          display: `${show}`,
        }}
        className="SelectOptions"
      >
        <div onClick={(e) => closeSelect("name", e)}>이름</div>
        <div onClick={(e) => closeSelect("nickname", e)}>닉네임</div>
        <div onClick={(e) => closeSelect("email", e)}>이메일</div>
      </div>
    </>
  );
}
