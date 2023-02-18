import React, { useState, useEffect } from "react";
import axios from "axios";
import { commaNums } from "../../hooks/CommaNums";

interface Funding {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    participant: any;
    addressInfo: boolean;
    url: string;
    review: string | null;
}

export default function FinishedGiftCard() {
    const [fundingInfo, setFundingInfo] = useState<Funding[]>([]);
    const FUNDING_URL = "/data/TestFundingData.json";

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
            {fundingInfo.map((gift) => (
                <div className="Finished_Gift_Item" key={gift.fundingId}>
                    <img className="Finished_Gift_Img" src={gift.image} alt={gift.name} />
                    <div className="Finished_Gift_Content">
                        <div className="Finished_Gift_Title">{gift.name}</div>
                        <div className="Finished_Gift_Price">{commaNums(gift.price)} 원</div>
                        <div className="Finished_Gift_Notify">이미 수령한 상품입니다.</div>
                        <div className="Finished_Gift_Date">
                            <div className="Finished_Gift_Date_Label">펀딩 기간</div>
                            <div className="Finished_Gift_Date_Content">{gift.date}</div>
                        </div>
                        <div className="Finished_Gift_Review">
                            <div className="Finished_Gift_Review_Label">보낸 리뷰</div>
                            <div className="Finished_Gift_Review_Content">{gift.review ? gift.review : "리뷰를 작성하지 않았습니다."}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
