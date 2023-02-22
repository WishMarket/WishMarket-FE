import React, { useEffect, useState } from "react";
import axios from "axios";
import FamousFriendCard from "./card/FamousFriendCard";

import { MdWhereToVote } from "react-icons/md";

interface FamousFriendsObj {
    Userid: string;
    name: string;
    nickname: string;
    profileImage: string;
    famous: boolean;
    isfriend: boolean;
}

export default function FamousFriendForm() {
    const [famouseusers, setFamousUsers] = useState<FamousFriendsObj[]>([]);

    const url2 = "/data/FamousFriends.json";
    const getFamousUsers = async () => {
        await axios
            .get(url2)
            .then((res) => {
                let response = res.data.famousfriend;
                setFamousUsers(response); // 연동 시 교체 필요
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getFamousUsers();
    }, []);

    return (
        <div className="FamousFriend">
            <div className="FamousFriend_title">
                <MdWhereToVote className="FamousFriend_title_Icon" />
                위시마켓 <h2>인기</h2> 유저
            </div>
            <div className="FamousFriend_Desc">위시마켓의 인플루언서와 친구를 맺고 펀딩을 진행해 보세요.</div>
            <div className="FriendResult_List">
                {famouseusers.map((data: FamousFriendsObj) => {
                    return <FamousFriendCard data={data} key={data.Userid} />;
                })}
            </div>
        </div>
    );
}
