import React, { useState } from "react";
import SearchForm from "./SearchForm";

export default function FriendsMain() {
  return (
    <div className="FriendMain_Wrapper">
      <div className="FriendMain_DESC">
        <div className="FriendMain_Title">
          친구의 이름이나 이메일을 검색해 보세요.
        </div>
              <SearchForm />
      </div>
    </div>
  );
}
