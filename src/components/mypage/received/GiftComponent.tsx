import React, { useState, useEffect } from "react";
import axios from "axios";
import CompleteGiftCard from "./CompleteGiftCard";

interface Funding {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    participant: any;
}

export default function GiftComponent() {
    const [fundingInfo, setFundingInfo] = useState<Funding[]>([]);

    const FUNDING_URL = "/data/FundingData.json";

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

    return (
        <>
            <div className="Gift_Title">Received Gift</div>
            <div className="Gift_Container">
                <div className="Complete_Gift_Container">
                    <div className="Complete_Gift_Wrapper">
                        <div className="Complete_Gift_Title">펀딩 성공한 상품</div>
                        {fundingInfo.map((gift) => (
                            <CompleteGiftCard gift={gift} key={gift.fundingId} />
                        ))}
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
