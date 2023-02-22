import { useRef } from "react";
import CompleteGiftCard from "./CompleteGiftCard";
import InProgressGiftCard from "./InProgressGiftCard";
import FinishedGiftCard from "./FinishedGiftCard";
import { BiCalendarEdit, BiCalendarHeart, BiCalendarCheck } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function GiftComponent() {
    const completeRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const finishedRef = useRef<HTMLDivElement>(null);

    const handleOnComplete = () => {
        completeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleOnProgress = () => {
        progressRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleOnFinished = () => {
        finishedRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollTab = [
        {
            id: 0,
            name: "펀딩 성공한 상품",
            scroll: handleOnComplete,
        },
        {
            id: 1,
            name: "펀딩 진행 중 상품",
            scroll: handleOnProgress,
        },
        {
            id: 2,
            name: "수령한 상품",
            scroll: handleOnFinished,
        },
    ];

    const handleScroll = (e: any) => {
        scrollTab.map((tab) => (tab.name === e.target.value ? tab.scroll() : null));
    };

    return (
        <>
            <div className="Gift_Title">Received Gift</div>
            <div className="Gift_Scroll_Tab_Area">
                <div className="Scroll_Select_Wrapper">
                    <select className="Gift_Scroll_Select_Box" defaultValue="" onChange={handleScroll}>
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
