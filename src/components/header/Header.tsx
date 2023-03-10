import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { LoadWishlist } from "../../hooks/recoil/atoms";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import HeaderCategory from "./HeaderCategory";
import HeaderNotify from "./HeaderNotify";
import SearchContainer from "./SearchContainer";
import ToggleBar from "../header/ToggleBar";
import { getMyWish } from "../../hooks/axios/MyWishlist";
import { requestAccessToken } from "../../hooks/axios/Login";
import { GetRefreshTokenExpiredAt, RemoveTokens, SetAccessToken, SetRefreshToken } from "../../hooks/Tokens";

export default function Header() {
    const [list, setList] = useRecoilState(LoadWishlist);
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

    useEffect(() => {
        checkToken();
        {
            token ? getMyWish(setList) : null;
        }
    }, []);

    const checkToken = async () => {
        if (window.localStorage.getItem("accessToken")) {
            try {
                const newToken = await requestAccessToken();
                const now = new Date();
                const refreshTime = GetRefreshTokenExpiredAt();
                let refresh_date = new Date();
                if (refreshTime) {
                    refresh_date = new Date(refreshTime);
                }
                if (refresh_date < now) {
                    RemoveTokens();
                    alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
                    navigate("/login");
                } else if (newToken == "AccessToken Not Expired") {
                } else if (newToken.refreshToken == null) {
                    SetAccessToken(newToken.accessToken, newToken.accessTokenExpiredAt);
                } else {
                    SetAccessToken(newToken.accessToken, newToken.accessTokenExpiredAt);
                    SetRefreshToken(newToken.refreshToken, newToken.refreshTokenExpiredAt);
                }
            } catch (e) {}
        }
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
