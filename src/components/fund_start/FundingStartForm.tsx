import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { commaNums } from "../../hooks/CommaNums";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import FriendPicker from "./FriendPicker";

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
  const [items, setItems] = useState<ProductObj | null>(null);
  const [friends, setFriends] = useState<FriendsObj[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);

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
        console.log(response);
        setFriends(response); // 연동 시 교체 필요
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      <div className="FundingStart_Container">
        <div className="FundingStart_Wrapper">
          {items != null ? (
            <>
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
                      <div>
                        <DatePicker
                          placeholderText="펀딩 기간을 선택해 주세요"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          dateFormat="yyyy년 MM월 dd일 a hh시"
                          timeFormat="HH:mm"
                          timeIntervals={60}
                          locale={ko}
                          minDate={new Date()}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="FundingStart_FriendPicker">
                      <h2>펀딩 받을 친구 선택</h2>
                      <ul className="FriendPicker_Wrapper">
                        {friends.map((data: FriendsObj) => (
                          <FriendPicker
                            key={data.Userid}
                            name={data.name}
                            profile={data.profile}
                          />
                        ))}
                      </ul>
                      <div className="Selected_Wrapper">
                        <span>
                          <h2>선택된 친구</h2>
                        </span>
                        <div>
                          <div className="Selected_Friend">
                            {/* props 끌어올리기 */}
                            <span>친구1</span>
                            <button className="btn btn-primary" type="button">
                              취소
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="FundingStart_Desc_Bottom">
                      <label htmlFor="Funding_Amount">내 펀딩 금액:</label>
                      <input id="Funding_Amount" type="number" />
                      <button type="submit" className="btn btn-warning">
                        펀딩 시작
                      </button>
                    </div>
                  </div>
           
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
