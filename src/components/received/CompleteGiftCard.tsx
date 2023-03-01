import { useState, useEffect } from "react";
import axios from "axios";
import { getFundingGift } from "../../hooks/axios/Gift";
import CompleteGiftCardUnactive from "./CompleteGiftCardUnactive";
import { ReceivedFundingItem } from "./Received.interface";

export default function CompleteGiftCard() {
    const [fundingInfo, setFundingInfo] = useState<ReceivedFundingItem[]>([]);

    useEffect(() => {
        getFundingGift(setFundingInfo);
    }, []);

    return (
        <>
            {fundingInfo.map((gift) => (
                <CompleteGiftCardUnactive gift={gift} key={gift.fundingId} />
            ))}
        </>
    );
}
