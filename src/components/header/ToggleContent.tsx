import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import defaultProfileImg from "../../assets/default-profile-img.png";
import { Account_Logout } from "../../hooks/axios/Togglebar";
import { HandleToggleType } from "./Header.interface";
import { UserInfo } from "../profile/Profile.interface";
import { commaNums } from "../../hooks/CommaNums";
import { getUserInfo } from "../../hooks/axios/Profile";

export default function ToggleContent({ handleToggleMenu, toggleClose }: HandleToggleType) {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleClose(e.target);
        const logout = await Account_Logout();
        console.log(logout);
        if (logout.status == 200) {
            window.localStorage.removeItem("accessToken");
            window.localStorage.removeItem("refreshToken");
        }
    };

    useEffect(() => {
        getUserInfo(setUserInfo);
    }, []);

    return (
        <>
            <div className="Toggle_User_Info">
                {userInfo !== null ? (
                    <>
                        <div className="Toggle_User_Img">
                            <img src={userInfo.profileImage ? userInfo.profileImage : defaultProfileImg} alt="Profile" className="Toggle_User_Profile" />
                        </div>
                        <div className="Toggle_User_Welcome">{userInfo.nickName} 님, 안녕하세요!</div>
                        <div className="Toggle_User_Point">
                            보유 포인트: <span>{commaNums(userInfo.pointPrice)}</span>P
                        </div>
                    </>
                ) : null}
                <div className="Toggle_Btn_Area">
                    <Link to="/profile">
                        <button type="button" className="btn btn-primary Toggle_User_Modify_Btn" onClick={handleToggleMenu}>
                            정보 변경
                        </button>
                    </Link>
                    <a href="/">
                        <button type="button" className="btn Toggle_Logout_Btn" onClick={handleLogout}>
                            로그아웃
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}
