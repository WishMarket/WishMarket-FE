import React, { useState } from "react";
import AchieveCardItem from "./AchieveCardItem";
import ExpiredCardItem from "./ExpiredCardItem";

import { AccountFundingItem } from "./Account.interface";

export default function AccountExpiredCard({ gift }: AccountFundingItem) {
    const [show, setShow] = useState<boolean>(false);

    return <>{gift.fundStatus !== "FAIL" ? <AchieveCardItem gift={gift} show={show} setShow={setShow} /> : <ExpiredCardItem gift={gift} show={show} setShow={setShow} />}</>;
}
