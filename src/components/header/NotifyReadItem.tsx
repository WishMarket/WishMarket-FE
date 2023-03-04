import React from "react";
import { NotifyItem } from "./Header.interface";
import { NotifyDelete } from "../../hooks/axios/Notify";

export default function NotifyReadItem({ item }: NotifyItem) {
    const handleNotifyDelete = () => {
        NotifyDelete(item.id);
    };

    return (
        <li className="Read_Notify_Item Notify_dropdown_Item">
            <a href="/">펀딩에 성공했어요.</a>
            <div className="Notify_Cotroll">
                <div className="Notify_Delete" onClick={handleNotifyDelete}>
                    삭제
                </div>
            </div>
        </li>
    );
}
