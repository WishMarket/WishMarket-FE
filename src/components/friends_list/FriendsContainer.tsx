import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

import FriendsDefault from "./FriendsDefault";
import FriendsListItem from "./FriendsListItem";
import FriendsListContent from "./FriendsListContent";

import { FindUserId } from "../../hooks/recoil/atoms";

interface FriendsObj {
    Userid: number;
    email: string;
    name: string;
    nickname: string;
    address: string;
    tel: string;
    profile: string;
}

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
            <div className="friends-list-content">
                <div className="friends-list-left-area">
                    <>
                        {users.map((user) => {
                            if (user.Userid === userId) {
                                return <FriendsListContent key={user.Userid} user={user} />;
                            } else return null;
                        })}
                    </>
                    {userId === -1 ? <FriendsDefault /> : null}
                </div>
                <div className="friends-list-right-area">
                    <div className="friends-list-item-wrapper">
                        <div className="friends-list-item-title">친구 목록</div>
                        <ul className="friends-list-item-container">
                            {users.map((user) => (
                                <FriendsListItem user={user} key={user.Userid} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
