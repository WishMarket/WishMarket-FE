import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function FriendsDefault() {
    return (
        <>
            <div className="friends-default-container">
                <div>
                    <BsFillPatchCheckFill className="friends-default-container-icon" />
                    친구의 위시리스트와
                </div>
                <div>진행 중인 펀딩 내역을 확인할 수 있습니다.</div>
            </div>
            <div className="friends-default-desc">우측 친구 목록을 클릭하세요.</div>
        </>
    );
}
