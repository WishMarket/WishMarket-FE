import React, { useState, useEffect } from "react";
import NotifyUnreadItem from "./NotifyUnreadItem";
import NotifyReadItem from "./NotifyReadItem";
import { TabStateType, NotifyType } from "./Header.interface";
import { getNotifyList } from "../../hooks/axios/Notify";

export default function NotifyDropDown({ tabNotify, setTabNotify }: TabStateType) {
    const [notifyList, setNotifyList] = useState<NotifyType[]>([]);

    useEffect(() => {
        getNotifyList(setNotifyList);
    }, [notifyList]);

    return (
        <div id="Notify_dropdown_Content" className={tabNotify ? "Dropdown_Active" : "Dropdown_Unactive"}>
            <ul>
                <div className="Unread_Notify">{notifyList.map((item) => (item.read === false ? <NotifyUnreadItem item={item} key={item.id} /> : null))}</div>
                <hr />
                <div className="Read_Notify">{notifyList.map((item) => (item.read === true ? <NotifyReadItem item={item} key={item.id} /> : null))}</div>
            </ul>
        </div>
    );
}
