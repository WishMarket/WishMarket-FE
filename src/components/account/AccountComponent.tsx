import { useState, useEffect, useRef } from "react";
import AccountCard from "./AccountCard";
import AccountExpiredCard from "./AccountExpiredCard";
import { BiCalendarHeart, BiCalendarCheck } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AccountFunding } from "./Account.interface";
import { getFundingHistory } from "../../hooks/axios/Gift";

export default function AccountComponent() {
    const [fundingInfo, setFundingInfo] = useState<AccountFunding[]>([]);

    const activeRef = useRef<HTMLDivElement>(null);
    const unactiveRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getFundingHistory(setFundingInfo);
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

    return (
        <>
            <div className="Account_Top_Area">
                <div className="Account_Top_Inner">
                    <div className="Account_Title">Funding Account</div>
                    <div className="Account_Select_Area">
                        <div className="Account_Select_Wrapper">
                            <select className="Account_Scroll_Select_Box" defaultValue="" onChange={handleScroll}>
                                <option value="" disabled>
                                    목록 보기
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
                        <div className="Account_Card_Wrapper">{fundingInfo.map((gift) => (gift.fundStatus === "ING" ? <AccountCard gift={gift} key={gift.fundingId} /> : null))}</div>
                    </div>
                    <hr className="Account_Division" />
                    <div className="Unactive_Card_List" ref={unactiveRef}>
                        <div className="Unactive_Account_Title">
                            <BiCalendarCheck className="Unactive_Account_Title_Icon" />
                            지난 펀딩
                        </div>
                        <div className="Unactive_Card_Wrapper">{fundingInfo.map((gift) => (gift.fundStatus !== "ING" ? <AccountExpiredCard gift={gift} key={gift.fundingId} /> : null))}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
