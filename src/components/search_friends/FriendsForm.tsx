import React, { useState, useEffect, useRef } from "react";
import FamousFriendForm from "./FamousFriendForm";
import SearchForm from "./SearchForm";
import SelectBox from "./SelectBox";
import { SearchFriends } from "../../hooks/axios/SearchFriend";
import { SearchFriendsObj } from "./SearchFriend.interface";

export default function FriendsForm() {
  const [input, setInput] = useState<string>("");
  const [select, setSelect] = useState<string>("name");
  const [selected, setSelected] = useState<string>("이름");
  const [show, setShow] = useState<string>("none");
  const [showFriend, setShowFriend] = useState<boolean>(false);
  const [friend, setFriend] = useState<SearchFriendsObj[]>([]);
  const selectRef = useRef<any>("");

  const onInputChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput(e.currentTarget.value);
    setShowFriend(false);
  };

  const outsideSelect = (e: any) => {
    if (selectRef.current != null) {
      if (!selectRef.current.contains(e.target)) {
        setShow("none");
      }
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const getFriends = await SearchFriends(input, select);
    setFriend(getFriends);
    setShowFriend(true);
  };

  useEffect(() => {
    if (select == "name") {
      setSelected("이름");
    } else if (select == "nickName") {
      setSelected("닉네임");
    } else if (select == "email") {
      setSelected("이메일");
    }
  }, [select]);

  useEffect(() => {
    document.addEventListener("mousedown", outsideSelect);
  });

  return (
    <div className="FriendsWrapper main">
      <div className="FriendMain_DESC">
        <div className="FriendMain_Title">
          친구의 이름이나 이메일을 검색해 보세요.
        </div>
        <div className="FriendSearch_Wrapper">
          <form onSubmit={onSubmitHandler}>
            <div className="FriendMain_Search">
              <SelectBox
                setShow={setShow}
                setSelect={setSelect}
                selected={selected}
                selectRef={selectRef}
                show={show}
              />
              <input
                type="text"
                placeholder="친구를 검색해 보세요."
                onChange={onInputChangeHandler}
              />
              <button type="submit" className="btn btn-warning search-button">
                친구 검색
              </button>
            </div>
          </form>
        </div>

        {showFriend != false ? (
          <SearchForm
            input={input}
            select={select}
            selected={selected}
            friend={friend}
          />
        ) : (
          <FamousFriendForm />
        )}
      </div>
    </div>
  );
}
