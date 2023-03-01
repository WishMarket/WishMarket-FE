import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import FriendsDefault from "./FriendsDefault";
import FriendsListItem from "./FriendsListItem";
import FriendsListContent from "./FriendsListContent";

import { getFriend } from "../../hooks/axios/FundingStart";
import { FindUserId } from "../../hooks/recoil/atoms";
import { FriendsObj } from "./FriendsLists.inferface";

export default function FriendsContainer() {
    const [users, setUsers] = useState<FriendsObj[]>([]);
    const [userId, setUserId] = useRecoilState(FindUserId);

    useEffect(() => {
        getFriends(0);
    }, []);

    useEffect(() => {
        console.log(users);
    }, [users]);

    const getFriends = async (page: number) => {
        try {
            const lists = await getFriend(1, 12);
            setUsers(users.concat(lists.data));
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className="friends-list-content main">
                <div className="friends-list-wrapper">
                    <div className="friends-list-left-area">
                        <div className="friends-list-item-wrapper">
                            <div className="friends-list-item-title">친구 목록</div>
                            <ul className="friends-list-item-container">{users && users.map((user, idx) => <FriendsListItem user={user} key={idx} userId={userId} setUserId={setUserId} />)}</ul>
                        </div>
                    </div>
                    <div className="friends-list-right-area">{userId === -1 ? <FriendsDefault /> : <FriendsListContent key={userId} users={users} userId={userId} />}</div>
                </div>
            </div>
        </>
    );
}
