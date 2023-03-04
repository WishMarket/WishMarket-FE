import React from "react";
import { NotifyItem } from "./Header.interface";
import { NotifyRead, NotifyDelete } from "../../hooks/axios/Notify";

export default function NotifyUnreadItem({ item }: NotifyItem) {
    const handleNotifyRead = () => {
        NotifyRead(item.id);
    };

    const handleNotifyDelete = () => {
        NotifyDelete(item.id);
    };

    return (
        <li className="Unread_Notify_Item Notify_dropdown_Item">
            {/* 추후에 조건부 렌더링 추가 */}
            <a href="/">받은 선물이 있습니다.</a>
            <div className="Notify_Cotroll">
                <div className="Notify_Read" onClick={handleNotifyRead}>
                    읽음
                </div>
                <div className="Notify_Delete" onClick={handleNotifyDelete}>
                    삭제
                </div>
            </div>
        </li>
    );
}
