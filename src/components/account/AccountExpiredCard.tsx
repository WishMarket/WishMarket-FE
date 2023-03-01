import React, { useState } from "react";
import AchieveCardItem from "./AchieveCardItem";
import ExpiredCardItem from "./ExpiredCardItem";

import { AccountFundingType } from "./Account.interface";

export default function AccountExpiredCard({ gift }: AccountFundingType) {
    const [show, setShow] = useState<boolean>(false);

    return <>{gift.fundStatus !== "FAIL" ? <AchieveCardItem gift={gift} show={show} setShow={setShow} /> : <ExpiredCardItem gift={gift} show={show} setShow={setShow} />}</>;
}
