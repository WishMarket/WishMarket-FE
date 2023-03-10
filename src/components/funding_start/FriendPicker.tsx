import React from "react";
import defaultImg from "../../assets/default-profile-img.png";
import { FriendPickerProps } from "./FundingStart.interface";

export default function FriendPicker({ email, userId, name, profileImageUrl, FriendSelect }: FriendPickerProps) {
    const clickSelect = (userId: number, name: string, profileImageUrl: string) => {
        FriendSelect(userId, name, profileImageUrl);
    };

    return (
        <>
            <li className="Friend">
                <div className="Friend_desc">
                    <img className="Friend_image" src={profileImageUrl ? profileImageUrl : defaultImg} alt="friend-image" />
                    <div className="Friend_info">
                        <span>{name}</span>
                        <span className="Friend_email">{email}</span>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={() => clickSelect(userId, name, profileImageUrl)} type="button">
                    선택
                </button>
            </li>
        </>
    );
}
