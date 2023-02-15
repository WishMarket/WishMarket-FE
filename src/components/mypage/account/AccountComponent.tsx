import { useState, useEffect, useRef } from "react";
import axios from "axios";
import AccountCard from "./AccountCard";
import AccountExpiredCard from "./AccountExpiredCard";
import { BiCalendarHeart, BiCalendarCheck } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Funding {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    accountPoint: number;
    receiver: string;
    participant: any;
    url: string;
    active: boolean;
    achieve: boolean;
}

export default function AccountComponent() {
    // const TEST_URL = "http://3.38.63.3:8080/sample";
    // const [test, setTest] = useState<any>(null);

    const [fundingInfo, setFundingInfo] = useState<Funding[]>([]);
    const FUNDING_URL = "/data/AccountFunding.json";

    const activeRef = useRef<HTMLDivElement>(null);
    const unactiveRef = useRef<HTMLDivElement>(null);

    // funding data axios
    const getFundingData = async () => {
        await axios
            .get(FUNDING_URL)
            .then((res) => {
                let response = res.data.funding;
                setFundingInfo(response);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getFundingData();
    }, []);

    const scrollToActive = () => {
        activeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToUnactive = () => {
        unactiveRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollTab = [
        {
            id: 0,
            name: "진행 중 펀딩",
            scroll: scrollToActive,
        },
        {
            id: 1,
            name: " 지난 펀딩",
            scroll: scrollToUnactive,
        },
    ];

    const handleScroll = (e: any) => {
        scrollTab.map((tab) => (tab.name === e.target.value ? tab.scroll() : null));
    };

    // test
    // const getTest = async () => {
    //     await axios
    //         .get(TEST_URL)
    //         .then((res) => {
    //             setTest(res);
    //         })
    //         .catch((error) => {
    //             return Promise.reject(error);
    //         });
    // };

    // useEffect(() => {
    //     getTest();
    //     console.log(test);
    // }, []);

    return (
        <>
            <div className="Account_Top_Area">
                <div className="Account_Top_Inner">
                    <div className="Account_Title">Funding Account</div>
                    <div className="Account_Select_Area">
                        <div className="Account_Select_Wrapper">
                            <select className="Account_Scroll_Select_Box" defaultValue="" onChange={handleScroll}>
                                <option value="" disabled>
                                    슝슝 💨
                                </option>
                                {scrollTab.map((tab) => (
                                    <option key={tab.id} value={tab.name}>
                                        {tab.name}
                                    </option>
                                ))}
                            </select>
                            <span className="Ico_Arrow">
                                <MdKeyboardArrowDown className="Icon" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Account_Card_Container">
                <div className="Account_Card_Wrapper">
                    <hr className="Account_Division" />
                    <div className="Active_Card_List" ref={activeRef}>
                        <div className="Active_Account_Title">
                            <BiCalendarHeart className="Active_Account_Title_Icon" />
                            진행 중 펀딩
                        </div>
                        <div className="Account_Card_Wrapper">{fundingInfo.map((gift) => (gift.active ? <AccountCard gift={gift} key={gift.fundingId} /> : null))}</div>
                    </div>
                    <hr className="Account_Division" />
                    <div className="Unactive_Card_List" ref={unactiveRef}>
                        <div className="Unactive_Account_Title">
                            <BiCalendarCheck className="Unactive_Account_Title_Icon" />
                            지난 펀딩
                        </div>
                        <div className="Unactive_Card_Wrapper">{fundingInfo.map((gift) => (!gift.active ? <AccountExpiredCard gift={gift} key={gift.fundingId} /> : null))}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
