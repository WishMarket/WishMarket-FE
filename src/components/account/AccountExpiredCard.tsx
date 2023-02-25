import React, { useState } from "react";
import AchieveCardItem from "./AchieveCardItem";
import ExpiredCardItem from "./ExpiredCardItem";

import { AccountFundingType } from "./Account.interface";

export default function AccountExpiredCard({ gift }: AccountFundingType) {
    const [show, setShow] = useState(false);

    return <>{gift.achieve ? <AchieveCardItem gift={gift} show={show} setShow={setShow} /> : <ExpiredCardItem gift={gift} show={show} setShow={setShow} />}</>;
}
