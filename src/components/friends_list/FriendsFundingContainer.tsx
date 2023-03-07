import React, { useState, useEffect } from "react";
import FriendsFunding from "./FriendsFunding";
import { FundingList } from "./FriendsLists.inferface";
import { getFriendsFunding } from "../../hooks/axios/FriendsList";

export default function FriendsFundingContainer({ userId }: any) {
    const [fundingInfo, setFundingInfo] = useState<FundingList[]>([]);

    useEffect(() => {
        getFriendsFunding(setFundingInfo, userId);
    }, []);

    return <>{fundingInfo.map((gift) => (gift.fundStatus === "ING" ? <FriendsFunding gift={gift} key={gift.fundingId} /> : null))}</>;
}
