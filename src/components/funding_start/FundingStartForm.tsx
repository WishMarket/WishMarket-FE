import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { commaNums } from "../../hooks/CommaNums";
import { ko } from "date-fns/esm/locale";

import DatePicker from "react-datepicker";
import FriendPicker from "./FriendPicker";
import FundingStartAmount from "./FundingStartAmount";
import FriendPicked from "./FriendPicked";
import FundingStartModal from "./FundingStartModal";

type ProductObj = {
  category: number;
  productId: string;
  name: string;
  image: string;
  price: number;
  like: number;
  date: string;
  funded_price: number;
  my_fund: number;
  url: string;
  best: boolean;
};
interface FriendsObj {
  Userid: string;
  email: string;
  name: string;
  nickname: string;
  address: string;
  tel: string;
  profile: string;
}

export default function FundingStartForm() {
  const navigate = useNavigate();
  const [items, setItems] = useState<ProductObj | null>(null);
  const [friends, setFriends] = useState<FriendsObj[]>([]);

  const [endDate, setEndDate] = useState<Date | null>(null);
  const [pickFriend, setPickFriend] = useState<string | null>(null);
  const [pickFriendName, setPickFriendName] = useState<string | null>(null);
  const [pickFriendProfile, setPickFriendProfile] = useState<string | null>(
    null
  );
  const [fundingAmount, setFundingAmount] = useState<number>(0);
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);

  let { id } = useParams() as { id: string };

  const url = "/data/ProductData.json";
  const url2 = "/data/Users.json";

  // axios
  const getItems = async () => {
    await axios
      .get(url)
      .then((res) => {
        let response = res.data.products;
        setItems(response[id]); // 연동 시 교체 필요
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const getFriends = async () => {
    await axios
      .get(url2)
      .then((res) => {
        let response = res.data.users;
        setFriends(response); // 연동 시 교체 필요
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const fileterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const onFriendsSelectHandler = (
    Userid: string,
    name: string,
    profile: string
  ) => {
    setPickFriend(Userid);
    setPickFriendName(name);
    setPickFriendProfile(profile);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //1.날짜현재시간이후 , 2.친구선택, 3.금액이 1000원 이상
    if (endDate === null) {
      setErrorCode(1);
      setErrorShow(true);
    } else if (pickFriend === null) {
      setErrorCode(2);
      setErrorShow(true);
    } else if (fundingAmount < 1000) {
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
    getFriends();
  }, [items, friends]);

  return (
    <>
      <div className="FundingStart_Container">
        <div className="FundingStart_Wrapper">
          {items != null ? (
            <form onSubmit={onSubmitHandler} target="blankifr">
              <div className="FundingStart_Top_Area">
                <div>
                  <img
                    src={items.image}
                    alt={items.name}
                    className="FundingStart_Img"
                  />
                </div>
                <div className="FundingStart_Desc">
                  <div className="FundingStart_Title">{items.name}</div>
                  <div className="FundingStart_Price">
                    {commaNums(items.price)} 원
                  </div>
                  <hr />
                  <div className="FundingStart_DatePicker">
                    <h2>펀딩 기간 선택</h2>

                    <DatePicker
                      placeholderText="펀딩 기간을 선택해 주세요"
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
                  <hr />
                  <div className="FundingStart_FriendPicker">
                    <div>
                      <h2>펀딩 받을 친구 선택</h2>
                      <ul className="FriendPicker_Wrapper">
                        {friends.map((data: FriendsObj) => (
                          <FriendPicker
                            key={data.Userid}
                            Userid={data.Userid}
                            name={data.name}
                            profile={data.profile}
                            email={data.email}
                            FriendSelect={(Userid, name, profile) =>
                              onFriendsSelectHandler(Userid, name, profile)
                            }
                          />
                        ))}
                      </ul>
                    </div>
                    <FriendPicked
                      pickFriendName={pickFriendName}
                      setPickFriendName={setPickFriendName}
                      pickFriendProfile={pickFriendProfile}
                      setPickFriendProfile={setPickFriendProfile}
                    />
                  </div>
                  <hr />
                  <FundingStartAmount setFundingAmount={setFundingAmount} />
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
