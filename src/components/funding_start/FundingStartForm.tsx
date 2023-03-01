import { useEffect, useState, useRef, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { commaNums } from "../../hooks/CommaNums";
import { ko } from "date-fns/esm/locale";

import DatePicker from "react-datepicker";
import FriendPicker from "./FriendPicker";
import FundingStartAmount from "./FundingStartAmount";
import FriendPicked from "./FriendPicked";
import FundingStartModal from "./FundingStartModal";

import { MdOutlineDateRange } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FundingStartFriendObj, FundingStartProductObj } from "./FundingStart.interfact";
import { getFriend, getProduct, PostFundingStart } from "../../hooks/axios/FundingStart";

export default function FundingStartForm() {
    const SIZE = 10;
    const navigate = useNavigate();
    let { id } = useParams() as { id: string };
    const [items, setItems] = useState<FundingStartProductObj | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [pickFriend, setPickFriend] = useState<number | null>(null);
    const [pickFriendName, setPickFriendName] = useState<string | null>(null);
    const [pickFriendProfile, setPickFriendProfile] = useState<string | null>(null);
    const [fundingAmount, setFundingAmount] = useState<number>(0);
    const [errorShow, setErrorShow] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<number>(0);

    const [friends, setFriends] = useState<FundingStartFriendObj[]>([]);
    const [page, setPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<boolean>(false);
    useEffect(() => {
        getFriends(0);
    }, []);

    useEffect(() => {
        console.log(friends);
    }, [friends]);

    let id_num = Number(id);
    const getFriends = async (page: number) => {
        try {
            const lists = await getFriend(page, SIZE);
            setFriends(friends.concat(lists.data));
            if (lists.data.length < SIZE) {
                setLastPage(true);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const getItems = async () => {
        const item = await getProduct(id_num);
        setItems(item);
    };

    const FriendCallHandler = () => {
        setPage(page + 1);
        getFriends(page);
        console.log(page);
    };

    const fileterPassedTime = (time: Date) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

    const onFriendsSelectHandler = (userId: number, name: string, profileImageUrl: string) => {
        setPickFriend(userId);
        setPickFriendName(name);
        setPickFriendProfile(profileImageUrl);
        console.log(pickFriendName);
    };

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const now = new Date();
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
            const start = await PostFundingStart(id_num, pickFriend, fundingAmount, now, endDate);
            console.log(start);
            alert("펀딩을 시작합니다!");
            setErrorCode(0);
            setErrorShow(true);

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
                                    <img src={items.productImage} alt={items.name} className="FundingStart_Img" />
                                </div>
                                <div className="FundingStart_Desc">
                                    <div className="FundingStart_Title">{items.name}</div>
                                    <div className="FundingStart_Price">{commaNums(items.price)} 원</div>

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
                                                            FriendSelect={(userId, name, profileImageUrl) => onFriendsSelectHandler(userId, name, profileImageUrl)}
                                                        />
                                                    ))}
                                                {!lastPage ? (
                                                    <div className="See_more">
                                                        <button className="btn btn-warning See_more_Button" onClick={FriendCallHandler} type="button">
                                                            친구 더 보기
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <Link to="/searchfriends" className="Last_Friend_Wrapper">
                                                        <div className="Last_Friend">
                                                            <h2 className="Last_Friend_title">마지막 친구 입니다.</h2>
                                                            <p className="Last_Friend_Detail">친구찾기에서 더많은 친구를 찾아보세요</p>
                                                        </div>
                                                    </Link>
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
                                    <FundingStartAmount setFundingAmount={setFundingAmount} price={items.price} />
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
            <FundingStartModal show={errorShow} setShow={setErrorShow} code={errorCode} />
        </>
    );
}
