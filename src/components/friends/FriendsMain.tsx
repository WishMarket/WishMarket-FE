import React, { useState, useEffect, useRef } from "react";
import FamousFriendForm from "./FamousFriendForm";
import SearchForm from "./SearchForm";

export default function FriendsMain() {
  const [input, setInput] = useState<string>("");
  const [select, setSelect] = useState<string>("name");
  const [selected, setSelected] = useState<string>("이름");
  const [show, setShow] = useState<string>("none");
  const selectRef = useRef<any>("");
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  const closeSelect = (value: string, e: any) => {
    setShow("none");
    setSelect(value);
  };
  const showSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow("flex");
  };

  const outsideSelect = (e: any) => {
    if (selectRef.current !=null) {
      if (!selectRef.current.contains(e.target)) {
        setShow("none");
      }
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(select);
    console.log(input);
  };

  useEffect(() => {
    if (select == "name") {
      setSelected("이름");
    } else if (select == "nickname") {
      setSelected("닉네임");
    } else if (select == "email") {
      setSelected("이메일");
    }
  }, [select]);

  useEffect(() => {
    document.addEventListener("mousedown", outsideSelect);
  });

  return (
    <div className="FriendMain_Wrapper">
      <div className="FriendMain_DESC">
        <div className="FriendMain_Title">
          친구의 이름이나 이메일을 검색해 보세요.
        </div>
        <div className="FriendSearch_Wrapper">
          <form onSubmit={onSubmitHandler}>
            <div className="FriendMain_Search">
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
              <input
                type="text"
                placeholder="친구를 검색해 보세요"
                onChange={onInputChangeHandler}
              />
              <button type="submit" className="btn btn-primary search-button">
                검색
              </button>
            </div>
          </form>
        </div>

        {input != "" ? (
          <SearchForm input={input} select={select} selected={selected} />
        ) : null}
        {input == "" ? <FamousFriendForm /> : null}
      </div>
    </div>
  );
}
