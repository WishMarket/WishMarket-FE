import React, { useEffect, useState, useRef } from "react";
import FriendList from "./FriendList";
import axios from "axios";
import { Link } from "react-router-dom";
interface FriendsObj {
  Userid: string;
  email: string;
  name: string;
  nickname: string;
  address: string;
  tel: string;
  profile: string;
}

export default function FriendsSidebar() {
  const [open, setOpen] = useState<boolean>(true);
  const [visible, setVisible] = useState<string>("visible");
  const [position, setPosition] = useState<number>(0);
  const [friends, setFriends] = useState<FriendsObj[]>([]);

  const url = "/data/Users.json";
  //axios
  const getFriends = async () => {
    await axios
      .get(url)
      .then((res) => {
        let response = res.data.users;
        setFriends(response); // 연동 시 교체 필요
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);
  const OpenHandler = () => {
    if (open === true) {
      setVisible("hidden");
      setPosition(350);
    } else {
      setVisible("visible");
      setPosition(0);
    }
    setOpen(!open);
  };

  return (
    <div
      className="SideBarContainer"
      style={{
        overflow: `${visible}`,
      }}
    >
      <div
        className="SidebarWrapper"
        style={{
          transform: `translate(${position}px,0px)`,
          transition: "0.3s ease-out",
        }}
      >
        <button className="openButton" onClick={OpenHandler}>
          {open ? <span>친구목록 닫기</span> : <span>친구목록 열기</span>}
        </button>
        <div className="Sidebar_DESC">
          <ul>
            {friends.length !=0 ? (
              friends.map((data: FriendsObj) => {
                return (
                    <Link to={'./'} key={data.Userid} style={{textDecoration:"none", color:"black"}}>
                        <FriendList image={data.profile} name={data.name} nickname={data.nickname} />
                  </Link>
                );
              })
            ) : (
              <li className="NoFriend">친구를 추가해보세요!💪</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
