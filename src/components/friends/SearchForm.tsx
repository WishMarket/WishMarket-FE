import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import FriendCard from "./card/FriendCard";
import FamousFriendCard from "./card/FamousFriendCard";
import NotFriendResult from "./NotFriendResult";

interface FriendsObj {
  Userid: string;
  email: string;
  name: string;
  nickname: string;
  friends: boolean;
  profile: string;
}

interface FamousFriendsObj {
  Userid: string;
  name: string;
  nickname: string;
  profile: string;
  // famous: boolean;
  friends: boolean;
}

export default function SearchForm() {
  const selectRef = useRef<any>();
  const [select, setSelect] = useState<string>("name");
  const [show, setShow] = useState<string>("none");
  const [selected, setSelected] = useState<string>("이름");
  const [input, setInput] = useState<string>("");
  const [users, setUsers] = useState<FriendsObj[]>([]);
  const [famouseusers, setFamousUsers] = useState<FamousFriendsObj[]>([]);

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
    getUsers();
  }, []);
  useEffect(() => {
    getFamousUsers();
  }, []);


  const showSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow("flex");
  };

  const outsideSelect = (e: any) => {
    if (!selectRef.current.contains(e.target)) {
      setShow("none");
    }
  };

  const closeSelect = (value: string, e: any) => {
    setShow("none");
    setSelect(value);
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(select);
    console.log(input);
  };

  useEffect(() => {
    if (select == "name") {
      setSelected("이름");
    } else if (select == "nickname") {
      setSelected("닉네임");
    } else if (select == "email") {
      setSelected("이메일");
    }
  }, [select]);

  useEffect(() => {
    document.addEventListener("mousedown", outsideSelect);
  });
  return (
    <div className="FriendSearch_Wrapper">
      <form onSubmit={onSubmitHandler}>
        <div className="FriendMain_Search">
          <div className="SelectButton" onClick={showSelect}>
            <div>{selected}</div>
          </div>
          <div
            ref={selectRef}
            style={{
              display: `${show}`,
            }}
            className="SelectOptions"
          >
            <div onClick={(e) => closeSelect("name", e)}>이름</div>
            <div onClick={(e) => closeSelect("nickname", e)}>닉네임</div>
            <div onClick={(e) => closeSelect("email", e)}>이메일</div>
          </div>
          <input
            type="text"
            placeholder="친구를 검색해 보세요"
            onChange={onInputChangeHandler}
          />
          <button type="submit" className="btn btn-primary search-button">
            검색
          </button>
        </div>
      </form>
      <div className="FriendResult_Container">
        <div className="FriendResult_title">
          <h2>{input}&nbsp;</h2>
          {selected}
          &nbsp;검색 결과 입니다.
        </div>
        <div className="FriendResult_List">
          {users.map((data: FriendsObj,idx) => {
              if (select == "name") {
                if (input == data.name) {
                  return <FriendCard data={data} key={data.Userid} />;
                } else {
                  if (data.name != null) {
                    if (idx<1) {
                      return <NotFriendResult key={idx}/>
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
      </div>  
    </div>
  );
}
