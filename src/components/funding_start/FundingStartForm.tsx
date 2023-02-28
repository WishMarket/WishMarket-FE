import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { commaNums } from "../../hooks/CommaNums";
import { ko } from "date-fns/esm/locale";

import DatePicker from "react-datepicker";
import FriendPicker from "./FriendPicker";
import FundingStartAmount from "./FundingStartAmount";
import FriendPicked from "./FriendPicked";
import FundingStartModal from "./FundingStartModal";

import { MdOutlineDateRange } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import {
  FundingStartFriendObj,
  FundingStartProductObj,
} from "./FundingStart.interfact";
import { getFriend, getProduct } from "../../hooks/axios/FundingStart";

export default function FundingStartForm() {
  const navigate = useNavigate();
  const [items, setItems] = useState<FundingStartProductObj | null>(null);

  const [endDate, setEndDate] = useState<Date | null>(null);
  const [pickFriend, setPickFriend] = useState<number | null>(null);
  const [pickFriendName, setPickFriendName] = useState<string | null>(null);
  const [pickFriendProfile, setPickFriendProfile] = useState<string | null>(
    null
  );
  const [fundingAmount, setFundingAmount] = useState<number>(0);
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);
  let { id } = useParams() as { id: string };

  const moreDataRef = useRef<HTMLDivElement>(null);

  const [friends, setFriends] = useState<FundingStartFriendObj[]>([]);
  const [page, setPage] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);
  
  const callback = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log("관찰됨");
        setPage(page + 1);
        //page가늘어나면 아래 useEffect로 리랜더링을 해야하는데 안함
      console.log(page+1);
    }
  };
    
  useEffect(() => {
      const observer = new IntersectionObserver(callback, { threshold: 0.5 });
    if (moreDataRef.current) {
      observer.observe(moreDataRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    getFriends();
    console.log(page);
  }, [page]);

  useEffect(() => {
    console.log(friends);
  }, [friends]);

  const getFriends = async () => {
    setShow(false);
    try {
      const lists = await getFriend(page, 10);
      setFriends(friends.concat(lists));
    } catch (e) {
      console.log(e);
    } finally {
      setShow(true);
    }
  };

  const getItems = async () => {
    const item = await getProduct(id);
    setItems(item);
  };

  const fileterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const onFriendsSelectHandler = (
    userId: number,
    name: string,
    profileImageUrl: string
  ) => {
    setPickFriend(userId);
    setPickFriendName(name);
    setPickFriendProfile(profileImageUrl);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //1.날짜현재시간이후 , 2.친구선택, 3.금액이 10원 이상
    if (endDate === null) {
      setErrorCode(1);
      setErrorShow(true);
    } else if (pickFriend === null) {
      setErrorCode(2);
      setErrorShow(true);
    } else if (fundingAmount < 10) {
      setErrorCode(3);
      setErrorShow(true);
    } else {
      setErrorCode(0);
      setErrorShow(true);
      console.log("product: " + id);
      console.log(new Date());
      console.log(endDate);
      console.log(pickFriend);
      console.log(fundingAmount);
      navigate("/");
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="FundingStart_Container">
        <div className="FundingStart_Wrapper">
          {items != null ? (
            <form onSubmit={onSubmitHandler} target="blankifr">
              <div className="FundingStart_Top_Area">
                <div>
                  <img
                    src={items.productImage}
                    alt={items.name}
                    className="FundingStart_Img"
                  />
                </div>
                <div className="FundingStart_Desc">
                  <div className="FundingStart_Title">{items.name}</div>
                  <div className="FundingStart_Price">
                    {commaNums(items.price)} 원
                  </div>

                  <div className="FundingStart_DatePicker">
                    <h2>
                      <MdOutlineDateRange className="FundingStart_DatePicker_Icon" />
                      펀딩 기간 선택
                    </h2>
                    <DatePicker
                      placeholderText="펀딩 기간을 선택해 주세요."
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      showTimeSelect
                      dateFormat="yyyy년 MM월 dd일 a hh시"
                      timeFormat="HH:mm"
                      timeIntervals={60}
                      filterTime={fileterPassedTime}
                      locale={ko}
                      minDate={new Date()}
                    />
                  </div>

                  <div className="FundingStart_FriendPicker">
                    <div>
                      <h2>
                        <FaUserFriends className="FundingStart_FriendPicker_Icon" />
                        펀딩 받을 친구 선택
                      </h2>
                      <ul className="FriendPicker_Wrapper">
                        {friends &&
                          friends.map((data: FundingStartFriendObj) => (
                            <FriendPicker
                              key={data.userId}
                              userId={data.userId}
                              name={data.name}
                              profileImageUrl={data.profileImageUrl}
                              email={data.email}
                              FriendSelect={(userId, name, profileImageUrl) =>
                                onFriendsSelectHandler(
                                  userId,
                                  name,
                                  profileImageUrl
                                )
                              }
                            />
                          ))}
                        {show && (
                          <div className="See_more" ref={moreDataRef}>
                            Loading...
                          </div>
                        )}
                      </ul>
                    </div>
                    <FriendPicked
                      pickFriendName={pickFriendName}
                      setPickFriendName={setPickFriendName}
                      pickFriendProfile={pickFriendProfile}
                      setPickFriendProfile={setPickFriendProfile}
                    />
                  </div>
                  <FundingStartAmount
                    setFundingAmount={setFundingAmount}
                    price={items.price}
                  />
                </div>
              </div>
            </form>
          ) : null}
        </div>
      </div>
      <iframe
        name="blankifr"
        style={{
          display: "none",
        }}
      ></iframe>
      <FundingStartModal
        show={errorShow}
        setShow={setErrorShow}
        code={errorCode}
      />
    </>
  );
}
