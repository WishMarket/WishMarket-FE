import React from "react";
import { Link } from "react-router-dom";
import { TabStateType } from "./Header.interface";

export default function NotifyDropDownNull({ tabNotify }: TabStateType) {
    return (
        <div id="Notify_dropdown_Content" className={tabNotify ? "Dropdown_Active" : "Dropdown_Unactive"}>
            <ul>
                <div className="Unread_Notify">
                    <li className="Unread_Notify_Item Notify_dropdown_Item">
                        <Link to="/login">로그인 후 이용 가능합니다.</Link>
                    </li>
                </div>
            </ul>
        </div>
    );
}
