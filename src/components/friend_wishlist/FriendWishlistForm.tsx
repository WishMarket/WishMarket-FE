import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendAttendlistCard from "./FriendAttendlistCard";
import { useParams } from "react-router-dom";
import FriendWishlistCard from "./FriendWishlistCard";
import {
  BiCalendarHeart,
  BiCalendarStar,
  BiCalendarEdit,
} from "react-icons/bi";
interface Wishlist {
  fundingId: number;
  userId: number;
  name: string;
  fundStatus: string;
  participant: string[];
  product: {
    productId: number;
    name: string;
    image: string;
    price: number;
  };
}

interface AttendList {
  fundingId: number;
  targetId: number;
  targetName: string;
  product: {
    productId: number;
    name: string;
    productImageUrl: string;
    price: number;
  };
  fundedPrice: number;
  myfundingPrice: number;
  participants: string[];
  fundStatus: string;
  startDate: string;
  endDate: string;
}

export default function FriendWishlistForm() {
  const [wishlist, setWishList] = useState<Wishlist[]>([]);
  const [attendlist, setAttendList] = useState<AttendList[]>([]);
  let params = useParams();

  let current_name = "";
  const url = "/data/FriendWishlist.json";
  const url2 = "/data/FriendAttendlist.json";

  console.log(params.id);
  // axios
  const getWishList = async () => {
    await axios
      .get(url)
      .then((res) => {
        let response = res.data.wishlist;
        console.log(response);
        setWishList(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const getAttendList = async () => {
    await axios
      .get(url2)
      .then((res) => {
        let response = res.data.attend;
        console.log(response);
        setAttendList(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  useEffect(() => {
    getWishList();
    getAttendList();
  }, []);

  wishlist.map((item: Wishlist) => {
    if (params.id) {
      if (item.userId == Number(params.id)) {
        current_name = item.name;
      }
    }
  });
  return (
    <>
      <div className="FriendWishlist_Title_Text">
        {" "}
        {current_name} 님의 Wishlist
      </div>
      <div className="FriendWishlist_SubTitle_Text">
        <BiCalendarHeart />
        참여 가능한 펀딩
      </div>
      <div className="FriendWishlist_Container">
        <div className="FriendWishlist_Wrapper">
          {wishlist.map((item: Wishlist) => {
            if (params.id) {
              if (item.userId == Number(params.id)) {
                return item.fundStatus == "Ing" ? (
                  <FriendWishlistCard item={item} key={item.fundingId} />
                ) : null;
              }
            }
          })}
        </div>
      </div>
      <div className="FriendWishlist_SubTitle_Text">
        <BiCalendarStar />
        시작 가능한 펀딩
      </div>
      <div className="FriendWishlist_Container">
        <div className="FriendWishlist_Wrapper">
          {wishlist.map((item: Wishlist) => {
            if (params.id) {
              if (item.userId == Number(params.id)) {
                return item.fundStatus == "NotStart" ? (
                  <FriendWishlistCard item={item} key={item.fundingId} />
                ) : null;
              }
            }
          })}
        </div>
      </div>
      <div className="FriendWishlist_SubTitle_Text">
        <BiCalendarEdit /> &nbsp;{current_name} 님의 펀딩 참여 목록
      </div>
      <div className="FriendWishlist_Container">
        <div className="FriendWishlist_Wrapper">
          {attendlist.map((item: AttendList,idx) => {
            if (item.participants.find(element => element == current_name)) {
              return <FriendAttendlistCard item={item} key={item.fundingId} />
            } 
          })}
        </div>
      </div>
    </>
  );
}
