import React, { useState, useEffect } from "react";
import axios from "axios";

import CompleteGiftCardUnactive from "./CompleteGiftCardUnactive";

interface Funding {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    participant: any;
    addressInfo: boolean;
}

export default function CompleteGiftCard() {
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
                <CompleteGiftCardUnactive gift={gift} key={gift.fundingId} />
            ))}
        </>
    );
}
