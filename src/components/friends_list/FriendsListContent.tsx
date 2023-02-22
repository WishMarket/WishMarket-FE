import React, { useRef } from "react";

import FriendsFundingContainer from "./FriendsFundingContainer";
import FriendsWishContainer from "./FriendsWishContainer";

import { BiCalendarHeart, BiCalendarCheck } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

interface FriendsObj {
    users: any;
    userId: number;
}

export default function FriendsListContent({ users, userId }: FriendsObj) {
    const fundingRef = useRef<HTMLDivElement>(null);
    const wishRef = useRef<HTMLDivElement>(null);

    const handleScrollFunding = () => {
        fundingRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScrollWish = () => {
        wishRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollTab = [
        {
            id: 0,
            name: "진행 중 펀딩",
            scroll: handleScrollFunding,
        },
        {
            id: 1,
            name: "위시리스트",
            scroll: handleScrollWish,
        },
    ];

    const handleScroll = (e: any) => {
        scrollTab.map((tab) => (tab.name === e.target.value ? tab.scroll() : null));
    };

    return (
        <>
            <div className="friends-list-right-top-area">
                <div className="friends-list-select-scroll-wrapper">
                    <select className="friends-list-select-scroll" defaultValue="" onChange={handleScroll}>
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
            <div className="friends-list-right-bottom-area">
                {users.map((user: any) => {
                    if (user.Userid === userId) {
                        return (
                            <div key={user.Userid} className="friends-list-content-wrapper">
                                <div className="friends-list-funding-wrapper">
                                    <div className="friends-list-funding-title" ref={fundingRef}>
                                        <BiCalendarCheck className="friends-list-funding-title-icon" />
                                        {user.name} 님의 진행 중 펀딩
                                    </div>
                                    <div className="friends-list-funding">
                                        <FriendsFundingContainer />
                                    </div>
                                </div>
                                <hr />
                                <div className="friends-list-wish-wrapper">
                                    <div className="friends-list-wish-title" ref={wishRef}>
                                        <BiCalendarHeart className="friends-list-wish-title-icon" />
                                        {user.name} 님의 Wishlist
                                    </div>
                                    <div className="friends-list-wish">
                                        <FriendsWishContainer />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
}
