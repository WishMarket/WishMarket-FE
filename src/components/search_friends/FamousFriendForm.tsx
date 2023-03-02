import React, { useEffect, useState } from "react";
import axios from "axios";
import FamousFriendCard from "./card/FamousFriendCard";

import { MdWhereToVote } from "react-icons/md";
import { FamousFriendObj } from "./SearchFriend.interface";
import { InfluencerFriend } from "../../hooks/axios/SearchFriend";

export default function FamousFriendForm() {
  const [famouseusers, setFamousUsers] = useState<FamousFriendObj[]>([]);

  const getFamousUsers = async () => {
    const Famous = await InfluencerFriend();
    console.log(Famous);
    setFamousUsers(Famous);
    
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
      <div className="FamousFriend_Desc">
        위시마켓의 인플루언서와 친구를 맺고 펀딩을 진행해 보세요.
      </div>
      <div className="FriendResult_List">
        {famouseusers.map((data: FamousFriendObj) => {
          return (
            <FamousFriendCard
              key={data.userId}
              userId={data.userId}
              name={data.name}
              nickname={data.nickname}
              famous={data.famous}
              profileImageUrl={data.profileImageUrl}
              isFriend={data.isFriend}
            />
          );
        })}
      </div>
    </div>
  );
}
