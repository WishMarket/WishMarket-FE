import React from "react";
import defaultProfileImg from "../../assets/default-profile-img.png";
import { Account_Logout } from "../../hooks/axios/Togglebar";

interface ToggleType {
    handleToggleMenu: () => void;
    toggleClose: (e: any) => void;
}

export default function ToggleContent({ handleToggleMenu, toggleClose }: ToggleType) {
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

  return (
    <>
      <div className="Toggle_User_Info">
        <div className="Toggle_User_Img">
          <img
            src={defaultProfileImg}
            alt="Profile"
            className="Toggle_User_Profile"
          />
        </div>
        <div className="Toggle_User_Welcome">user.nickname 님, 안녕하세요!</div>

        <div className="Toggle_User_Point">
          보유 포인트: <span>user.pointPrice</span>P
        </div>
        <div className="Toggle_Btn_Area">
          <a href="/">
            <button
              type="button"
              className="btn btn-primary Toggle_User_Modify_Btn"
              onClick={handleToggleMenu}
            >
              정보 변경
            </button>
          </a>
          <a href="/">
            <button
              type="button"
              className="btn Toggle_Logout_Btn"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
