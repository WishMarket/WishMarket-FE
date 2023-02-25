import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendsFunding from "./FriendsFunding";
import { FundingList } from "./FriendsLists.inferface";

export default function FriendsFundingContainer({ userId }: any) {
    const [fundingInfo, setFundingInfo] = useState<FundingList[]>([]);
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
