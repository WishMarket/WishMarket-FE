import React from "react";
import { NotifyItem } from "./Header.interface";
import { Link } from "react-router-dom";
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
            {item.contents === "SUCCESS_TARGET" ? (
                <Link to="/received">받은 선물이 있습니다.</Link>
            ) : item.contents === "SUCCESS_PARTICIPANT" ? (
                <Link to="/account">펀딩에 성공했어요.</Link>
            ) : (
                <Link to="/account">펀딩에 실패했어요.</Link>
            )}
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
