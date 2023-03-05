import React, { useEffect, useState } from "react";
import axios from "axios";
import FriendCard from "./card/FriendCard";

import NotFriendResult from "./NotFriendResult";
import { SearchFriendsObj, SearchFormProps } from "./SearchFriend.interface";

export default function SearchForm({
  input,
  select,
  selected,
  friend,
}: SearchFormProps) {
  return (
    <div className="FriendResult_Container">
      <div className="FriendResult_title">
        <h2>
          🍀 <span>{input}</span>&nbsp;
        </h2>
        {selected}
        &nbsp;검색 결과 입니다.
      </div>
      <div className="FriendResult_List">
        {friend.map((data: SearchFriendsObj, idx) => {
          if (select == "name") {
            if (data.name.includes(input)) {
              return (
                <FriendCard
                  userId={data.userId}
                  profileImageUrl={data.profileImageUrl}
                  name={data.name}
                  nickName={data.nickName}
                  email={data.email}
                  isFriend={data.isFriend}
                  key={data.userId}
                />
              );
            } else {
              if (data.name != null) {
                if (idx < 1) {
                  return <NotFriendResult key={idx} />;
                }
              }
            }
          } else if (select == "nickName") {
            if (data.nickName.includes(input)) {
              return (
                <FriendCard
                  userId={data.userId}
                  profileImageUrl={data.profileImageUrl}
                  name={data.name}
                  nickName={data.nickName}
                  email={data.email}
                  isFriend={data.isFriend}
                  key={data.userId}
                />
              );
            } else {
              if (data.nickName == null) {
                if (idx < 1) {
                  return <NotFriendResult key={idx} />;
                }
              }
            }
          } else if (select == "email") {
            if (data.email.includes(input)) {
              return (
                <FriendCard
                  userId={data.userId}
                  profileImageUrl={data.profileImageUrl}
                  name={data.name}
                  nickName={data.nickName}
                  email={data.email}
                  isFriend={data.isFriend}
                  key={data.userId}
                />
              );
            } else {
              if (data.email == null) {
                if (idx < 1) {
                  return <NotFriendResult key={idx} />;
                }
              }
            }
          }
        })}
      </div>
    </div>
  );
}
