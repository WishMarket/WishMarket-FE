import { useRef, useState } from "react";
import CompleteGiftCard from "./CompleteGiftCard";
import InProgressGiftCard from "./InProgressGiftCard";
import FinishedGiftCard from "./FinishedGiftCard";
import { BiCalendarEdit, BiCalendarHeart, BiCalendarCheck } from "react-icons/bi";

export default function GiftComponent() {
    const completeRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const finishedRef = useRef<HTMLDivElement>(null);

    const onCompleteClick = () => {
        completeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const onProgressClick = () => {
        progressRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const onFinishedClick = () => {
        finishedRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollTab = [
        {
            id: 0,
            name: "펀딩 성공한 상품",
            onClick: onCompleteClick,
        },
        {
            id: 1,
            name: "펀딩 진행 중 상품",
            onClick: onProgressClick,
        },
        {
            id: 2,
            name: "수령한 상품",
            onClick: onFinishedClick,
        },
    ];

    return (
        <>
            <div className="Gift_Title">Received Gift</div>
            <div className="Gift_Scroll_Tab_Area">
                {scrollTab.map((tab) => (
                    <div id="Gift_Scroll_Tab_Item" key={tab.id} onClick={tab.onClick}>
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="Gift_Container">
                <hr className="Gift_Division" />
                <div className="Complete_Gift_Container" ref={completeRef}>
                    <div className="Complete_Gift_Wrapper">
                        <div className="Gift_Sub_Title">
                            <BiCalendarEdit className="Gift_Sub_Title_Icon" />
                            펀딩 성공한 상품
                        </div>
                        <CompleteGiftCard />
                    </div>
                </div>
                <hr className="Gift_Division" />
                <div className="In_Progress_Gift_Container" ref={progressRef}>
                    <div className="In_Progress_Gift_Wrapper">
                        <div className="Gift_Sub_Title">
                            <BiCalendarHeart className="Gift_Sub_Title_Icon" />
                            펀딩 진행 중 상품
                        </div>
                        <InProgressGiftCard />
                    </div>
                </div>
                <hr className="Gift_Division" />
                <div className="Finished_Gift_Container" ref={finishedRef}>
                    <div className="Finished_Gift_Wrapper">
                        <div className="Gift_Sub_Title">
                            <BiCalendarCheck className="Gift_Sub_Title_Icon" />
                            수령한 상품
                        </div>
                        <FinishedGiftCard />
                    </div>
                </div>
            </div>
        </>
    );
}
