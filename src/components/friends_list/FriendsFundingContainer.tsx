import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendsFunding from "./FriendsFunding";

interface Funding {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    accountPoint: number;
    receiver: string;
    participant: any;
    url: string;
    active: boolean;
    achieve: boolean;
}

export default function FriendsFundingContainer({ userId }: any) {
    const [fundingInfo, setFundingInfo] = useState<Funding[]>([]);
    const FUNDING_URL = "/data/AccountFunding.json";

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

    return <>{fundingInfo.map((gift) => (gift.active ? <FriendsFunding gift={gift} key={gift.fundingId} /> : null))}</>;
}
