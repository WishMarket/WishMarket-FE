import React, { useEffect, useState } from "react";
import axios from "axios";
import FriendCard from "./card/FriendCard";

import NotFriendResult from "./NotFriendResult";
import { SearchFriendsObj, SearchFormProps } from "./SearchFriend.interface";
import { SearchFriends } from "../../hooks/axios/SearchFriend";

export default function SearchForm({ input, select, selected }: SearchFormProps) {
    const [users, setUsers] = useState<SearchFriendsObj[]>([]);

    const url = "/data/Friends.json";
    const getUsers = async () => {
        await axios
            .get(url)
            .then((res) => {
                let response = res.data.friend;
                setUsers(response); // 연동 시 교체 필요
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
      <div className="FriendResult_Container">
        <div className="FriendResult_title">
          <h2>🍀 {input}&nbsp;</h2>
          {selected}
          &nbsp;검색 결과 입니다.
        </div>
        <div className="FriendResult_List">
          {users.map((data: SearchFriendsObj, idx) => {
            if (select == "name") {
              if (input == data.name) {
                return <FriendCard data={data} key={data.Userid} />;
              } else {
                if (data.name != null) {
                  if (idx < 1) {
                    return <NotFriendResult key={idx} />;
                  }
                }
              }
            } else if (select == "nickname") {
              if (input == data.nickname) {
                return <FriendCard data={data} key={data.Userid} />;
              } else {
                if (data.nickname == null) {
                  if (idx < 1) {
                    return <NotFriendResult key={idx} />;
                  }
                }
              }
            } else if (select == "email") {
              if (input == data.email) {
                return <FriendCard data={data} key={data.Userid} />;
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
