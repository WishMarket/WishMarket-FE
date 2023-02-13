import CompleteGiftCard from "./CompleteGiftCard";

export default function GiftComponent() {
    return (
        <>
            <div className="Gift_Title">Received Gift</div>
            <div className="Gift_Container">
                <div className="Complete_Gift_Container">
                    <div className="Complete_Gift_Wrapper">
                        <div className="Complete_Gift_Title">펀딩 성공한 상품</div>
                        <CompleteGiftCard />
                    </div>
                </div>
                <div className="In_Progress_Gift_Container">
                    <div className="In_Progress_Gift_Title">펀딩 진행 중 상품</div>
                    <div className="In_Progress_Gift_Wrapper">{/* 아이템 카드 */}</div>
                </div>
                <div className="Finish_Gift_Container">
                    <div className="Finish_Gift_Title">수령한 상품</div>
                    <div className="Finish_Gift_Wrapper">{/* 아이템 카드 */}</div>
                </div>
            </div>
        </>
    );
}
