import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

import FriendsDefault from "./FriendsDefault";
import FriendsListItem from "./FriendsListItem";
import FriendsListContent from "./FriendsListContent";

import { FindUserId } from "../../hooks/recoil/atoms";
import { FriendsObj } from "./FriendsLists.inferface";

export default function FriendsContainer() {
    const [users, setUsers] = useState<FriendsObj[]>([]);
    const [userId, setUserId] = useRecoilState(FindUserId);
    const FRIENDS_URL = "/data/Users.json";

    // setUsers
    const getFriends = async () => {
        await axios
            .get(FRIENDS_URL)
            .then((res) => {
                let response = res.data.users;
                setUsers(response); // 연동 시 교체 필요
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <>
            <div className="friends-list-content main">
                <div className="friends-list-wrapper">
                    <div className="friends-list-left-area">
                        <div className="friends-list-item-wrapper">
                            <div className="friends-list-item-title">친구 목록</div>
                            <ul className="friends-list-item-container">
                                {users.map((user, idx) => (
                                    <FriendsListItem user={user} key={idx} userId={userId} setUserId={setUserId} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="friends-list-right-area">{userId === -1 ? <FriendsDefault /> : <FriendsListContent key={userId} users={users} userId={userId} />}</div>
                </div>
            </div>
        </>
    );
}
