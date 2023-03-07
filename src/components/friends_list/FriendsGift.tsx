import React, { useEffect, useState } from "react";
import FriendsFunding from "./FriendsFunding";
import { FundingList } from "./FriendsLists.inferface";
import { getFriendsGift } from "../../hooks/axios/FriendsList";

export default function FriendsGift({ gift, userId }: any) {
    const [fundingInfo, setFundingInfo] = useState<FundingList[]>([]);

    useEffect(() => {
        getFriendsGift(setFundingInfo, userId);
    }, []);

    return (
        <>
            {fundingInfo.map((gift) => (
                <FriendsFunding gift={gift} key={gift.fundingId} />
            ))}
        </>
    );
}
