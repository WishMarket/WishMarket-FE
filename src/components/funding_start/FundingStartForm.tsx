import { useEffect, useState } from "react";
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
import { FundingStartFriendObj, FundingStartProductObj } from "./FundingStart.interface";
import { getFriend, getProduct, PostFundingStart } from "../../hooks/axios/FundingStart";

export default function FundingStartForm() {
    const navigate = useNavigate();
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

    let { id } = useParams() as { id: string };
    let id_num = Number(id);

    const getFriends = async (page: number) => {
        try {
            const lists = await getFriend(page, 10);
            setFriends(friends.concat(lists.data.content));
            if (lists.data.last == true) {
                setLastPage(true);
            }
        } catch (e) {}
    };

    const getItems = async () => {
        const item = await getProduct(id_num);
        setItems(item);
    };

    const FriendCallHandler = () => {
        setPage(page + 1);
        getFriends(page);
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
    };

    const getFormatDate = (date: any) => {
        let year = date.getFullYear();
        let month = 1 + date.getMonth();
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();

        month = month >= 10 ? month : "0" + month;
        day = day >= 10 ? day : "0" + day;
        hour = hour >= 10 ? hour : "0" + hour;
        minute = minute >= 10 ? minute : "0" + minute;
        return year + "-" + month + "-" + day + " " + hour + ":" + minute;
    };

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const now = new Date();
        const nowDateString = getFormatDate(now);
        const endDateString = getFormatDate(endDate);
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
            const start = await PostFundingStart(id_num, pickFriend, fundingAmount, nowDateString, endDateString);
            if (start.status == 200) {
                alert("????????? ???????????????!");
                navigate("/");
            } else {
                setErrorCode(4);
                setErrorShow(true);
            }
        }
    };

    useEffect(() => {
        getFriends(0);
    }, []);

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
                                    <div className="FundingStart_Price">{commaNums(items.price)} ???</div>

                                    <div className="FundingStart_DatePicker">
                                        <h2>
                                            <MdOutlineDateRange className="FundingStart_DatePicker_Icon" />
                                            ?????? ?????? ??????
                                        </h2>
                                        <DatePicker
                                            placeholderText="?????? ????????? ????????? ?????????."
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            showTimeSelect
                                            dateFormat="yyyy??? MM??? dd??? a hh???"
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
                                                ?????? ?????? ?????? ??????
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
                                                            ?????? ??? ??????
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <Link to="/searchfriends" className="Last_Friend_Wrapper">
                                                        <div className="Last_Friend">
                                                            <h2 className="Last_Friend_title">????????? ?????? ?????????.</h2>
                                                            <p className="Last_Friend_Detail">?????????????????? ????????? ????????? ???????????????</p>
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
