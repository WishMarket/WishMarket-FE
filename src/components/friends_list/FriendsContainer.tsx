import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import FriendsDefault from "./FriendsDefault";
import FriendsListItem from "./FriendsListItem";
import FriendsListContent from "./FriendsListContent";
import { getFriendList } from "../../hooks/axios/FriendsList";
import { FindUserId } from "../../hooks/recoil/atoms";
import { FriendsObj } from "./FriendsLists.inferface";
import { Link } from "react-router-dom";

export default function FriendsContainer() {
    const [users, setUsers] = useState<FriendsObj[]>([]);
    const [userId, setUserId] = useRecoilState(FindUserId);
    const [page, setPage] = useState<number>(1);
    const [last, setLast] = useState<boolean>(false);
    useEffect(() => {
        getFriends(0);
    }, []);

    const getFriends = async (page: number) => {
        const friends = await getFriendList(page, 15);
        setUsers(users.concat(friends.data.content));

        if (friends.data.last) {
            setLast(true);
        }
    };

    const GetMoreHandler = () => {
        setPage(page + 1);
        getFriends(page);
    };

    return (
        <>
            <div className="friends-list-content main">
                <div className="friends-list-wrapper">
                    <div className="friends-list-left-area">
                        <div className="friends-list-item-wrapper">
                            <div className="friends-list-item-title">친구 목록</div>
                            <ul className="friends-list-item-container">
                                {users && users.map((user, idx) => <FriendsListItem user={user} key={idx} userId={userId} setUserId={setUserId} />)}
                                {last == false ? (
                                    <div className="friends-more-button-wrapper">
                                        <button className="btn btn-warning friends-more-button" onClick={GetMoreHandler}>
                                            더 불러오기
                                        </button>
                                    </div>
                                ) : (
                                    <Link to={"/searchfriends"} className="friends-lastpage-wrapper">
                                        <div className="friends-lastpage">
                                            <h2 className="friedns-lastpage-title">마지막 친구 입니다.</h2>
                                            <p className="friedns-lastpage-desc">
                                                <span>친구 찾기</span> 에서 더 많은 친구를 찾아보세요.
                                            </p>
                                        </div>
                                    </Link>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="friends-list-right-area">{userId === -1 ? <FriendsDefault /> : <FriendsListContent key={userId} users={users} userId={userId} setUserId={setUserId} />}</div>
                </div>
            </div>
        </>
    );
}
