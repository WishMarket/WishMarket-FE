import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import HeaderCategory from "./HeaderCategory";
import HeaderNotify from "./HeaderNotify";
import SearchContainer from "./SearchContainer";
import ToggleBar from "../header/ToggleBar";

export default function Header() {
  const [tabState, setTabState] = useState(false);
  const token = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();

  // 우측 토글 handle
  const handleToggleMenu = () => {
    const toggleMenu = document.querySelector("#Toggle_Bar") as HTMLElement;
    setTabState(!tabState);
    toggleMenu.classList.add("on");
    toggleMenu.classList.remove("off");
    document.body.style.overflow = "hidden";
  };

    return (
        <>
            <div className="Header_Bar">
                {/* 로고, 카테고리, 서브 카테고리 구현 영역 */}
                <div className="Header_Left_Area">
                    <Link to="/">
                        <img className="Header_Title" src={logo} alt="Wish Market" />
                    </Link>
                    <HeaderCategory token={token} />
                </div>
                {/* 검색, 알림, 토글 바 */}
                <div className="Header_Right_Area">
                    <SearchContainer />
                    <div className="Header_Icon_Area">
                        <HeaderNotify token={token} />
                        <FaBars className="Header_Menu_Toggle" onClick={handleToggleMenu} />
                    </div>
                </div>
            </div>
            <ToggleBar tabState={tabState} setTabState={setTabState} token={token} />
        </>
    );
}
