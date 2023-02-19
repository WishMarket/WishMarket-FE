import React,{useEffect, useState} from 'react'
import axios from 'axios';
import FamousFriendCard from "./card/FamousFriendCard";

interface FamousFriendsObj {
  Userid: string;
  name: string;
  nickname: string;
  profile: string;
  famous: boolean;
  friends: boolean;
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
  }, [])
  
  return (
    <div className="FamousFriend">
      <div className="FamousFriend_title">
        🔥 추천하는&nbsp;<h2>인플루언서</h2>&nbsp; 목록입니다!
      </div>
      <div className="FriendResult_List">
        {famouseusers.map((data: FamousFriendsObj) => {
          return <FamousFriendCard data={data} key={data.Userid} />;
        })}
      </div>
    </div>
  );
}
