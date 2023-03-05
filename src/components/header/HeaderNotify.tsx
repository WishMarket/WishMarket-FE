import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import NotifyDropDown from "./NotifyDropDown";
import NotifyDropDownNull from "./NotifyDropDownNull";
import { NotifyBadge } from "../../hooks/axios/Notify";
import { Token } from "./Header.interface";

export default function HeaderNotify({ token }: Token) {
    const [tabNotify, setTabNotify] = useState(false);
    const [badge, setBadge] = useState(0);
    // const EVENT_URL = `http://3.38.63.3:8080/api/alarms/sse`;

    // const eventSource = new EventSource(EVENT_URL, { withCredentials: true });

    // eventSource.addEventListener("message", function (e) {
    //     console.log(e.data);
    // });

    // badge check
    useEffect(() => {
        NotifyBadge(setBadge);
        console.log(badge);
    }, []);

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
                    {badge !== 0 ? <div className="Header_Notify_Badge"></div> : null}
                </label>
                {token ? <NotifyDropDown tabNotify={tabNotify} setTabNotify={setTabNotify} /> : <NotifyDropDownNull tabNotify={tabNotify} setTabNotify={setTabNotify} />}
            </div>
        </>
    );
}
