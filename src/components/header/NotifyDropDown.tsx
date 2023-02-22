import React from "react";

interface Tab {
    tabNotify: boolean;
}

export default function NotifyDropDown({ tabNotify }: Tab) {
    return (
        <div id="Notify_dropdown_Content" className={tabNotify ? "Dropdown_Active" : "Dropdown_Unactive"}>
            <ul>
                <div className="Unread_Notify">
                    <li className="Unread_Notify_Item Notify_dropdown_Item">
                        <a href="/">받은 선물이 있습니다.</a>
                        <div className="Notify_Cotroll">
                            <a href="/" className="Notify_Read">
                                읽음
                            </a>
                            <a href="/" className="Notify_Delete">
                                삭제
                            </a>
                        </div>
                    </li>
                    <li className="Read_Notify_Item Notify_dropdown_Item">
                        <a href="/">펀딩에 성공했어요.</a>
                        <div className="Notify_Cotroll">
                            <a href="/" className="Notify_Read">
                                읽음
                            </a>
                            <a href="/" className="Notify_Delete">
                                삭제
                            </a>
                        </div>
                    </li>
                </div>
                <hr />
                <div className="Read_Notify">
                    <li className="Read_Notify_Item Notify_dropdown_Item">
                        <a href="/">펀딩에 성공했어요.</a>
                        <div className="Notify_Cotroll">
                            <a href="/" className="Notify_Delete">
                                삭제
                            </a>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
}
