import { useState } from "react";
import { FaBell } from "react-icons/fa";

import NotifyDropDown from "./NotifyDropDown";
import NotifyDropDownNull from "./NotifyDropDownNull";

interface Token {
    token: string | null;
}

export default function HeaderNotify({ token }: Token) {
    const [tabNotify, setTabNotify] = useState(false);

    // notify drop down
    const handleToggleNotify = () => {
        setTabNotify(!tabNotify);
    };

    return (
        <>
            <div className="Notify_Container">
                <input id="For_Notify_Dropdown" type="checkbox" className="Notify_Check_Box" />
                <label className="Notify_Dropdown" htmlFor="For_Notify_Dropdown">
                    <FaBell className="Header_Notify" onClick={handleToggleNotify} />
                    {/* <div className="Header_Notify_Badge"></div> */}
                </label>
                {token ? <NotifyDropDown tabNotify={tabNotify} /> : <NotifyDropDownNull tabNotify={tabNotify} />}
            </div>
        </>
    );
}
