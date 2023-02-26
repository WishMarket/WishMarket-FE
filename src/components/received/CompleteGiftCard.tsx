import { useState, useEffect } from "react";
import axios from "axios";

import CompleteGiftCardUnactive from "./CompleteGiftCardUnactive";
import { ReceivedFundingItem } from "./Received.interface";

export default function CompleteGiftCard() {
    const [fundingInfo, setFundingInfo] = useState<ReceivedFundingItem[]>([]);
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
