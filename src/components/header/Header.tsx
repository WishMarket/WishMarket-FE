import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import logo from "../../assets/logo.png";

import { ImSearch } from "react-icons/im";
import { FaBars } from "react-icons/fa";

import HeaderNotify from "./HeaderNotify";
import ToggleBar from "../header/ToggleBar";
import { SearchKeyword } from "../../hooks/recoil/atoms";

export default function Header() {
    const [tabState, setTabState] = useState(false);

    const [showSubCategory, setShowSubCategory] = useState(false);
    const [showSubMyPage, setshowSubMyPage] = useState(false);
    const [keyword, setKeyword] = useRecoilState(SearchKeyword);
    const token = window.localStorage.getItem("accessToken");

    // search
    const handleKeywordChange = (e: any) => {
        setKeyword(e.target.value);
    };

    // 우측 토글 handle
    const handleToggleMenu = () => {
        const toggleMenu = document.querySelector("#Toggle_Bar") as HTMLElement;
        setTabState(!tabState);
        toggleMenu.classList.add("on");
        toggleMenu.classList.remove("off");
        document.body.style.overflow = "hidden";
    };

    // subcategory drop down
    const subCategoryMouseOver = () => {
        setShowSubCategory(true);
    };

    const subCategoryMouseOut = () => {
        setShowSubCategory(false);
    };

    const subMyPageMouseOver = () => {
        setshowSubMyPage(true);
    };

    const subMyPageMouseOut = () => {
        setshowSubMyPage(false);
    };

    return (
        <>
            <div className="Header_Bar">
                {/* 로고, 카테고리, 서브 카테고리 구현 영역 */}
                <div className="Header_Left_Area">
                    <Link to="/">
                        <img className="Header_Title" src={logo} alt="Wish Market" />
                    </Link>
                    <div className="Header-Category">
                        <ul className="Header_Category_Area">
                            <li className="Header_Category_Item" onMouseOver={subCategoryMouseOver} onMouseOut={subCategoryMouseOut}>
                                <Link to="/category/0" className="Header_Category_Link">
                                    카테고리
                                </Link>
                            </li>
                            <li className="Header_Category_Item">
                                <Link to={token ? "/friendslist" : "/login"} className="Header_Category_Link">
                                    친구 목록
                                </Link>
                            </li>
                            <li className="Header_Category_Item">
                                <Link to={token ? "/searchfriends" : "/login"} className="Header_Category_Link">
                                    친구 찾기
                                </Link>
                            </li>
                            <li className="Header_Category_Item" onMouseOver={subMyPageMouseOver} onMouseOut={subMyPageMouseOut}>
                                <Link to={token ? "/profile" : "/login"} className="Header_Category_Link">
                                    마이 페이지
                                </Link>
                                <ul id="My_Page_Sub_Category" className={showSubMyPage ? "Sub_Category_Active" : ""}>
                                    <li className="My_Page_Sub_Category_Item">
                                        <Link to={token ? "/profile" : "/login"} className="My_Page_Sub_Category_Link">
                                            프로필
                                        </Link>
                                    </li>
                                    <li className="My_Page_Sub_Category_Item">
                                        <Link to={token ? "/wish" : "/login"} className="My_Page_Sub_Category_Link">
                                            위시 리스트
                                        </Link>
                                    </li>
                                    <li className="My_Page_Sub_Category_Item">
                                        <Link to={token ? "/received" : "/login"} className="My_Page_Sub_Category_Link">
                                            받은 선물
                                        </Link>
                                    </li>
                                    <li className="My_Page_Sub_Category_Item">
                                        <Link to={token ? "/account" : "/login"} className="My_Page_Sub_Category_Link">
                                            펀딩 내역
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 검색, 알림, 토글 바 */}
                <div className="Header_Right_Area">
                    <div className="Header_Search_Container">
                        <input type="text" className="Header_Search_Box" placeholder="상품을 검색해 보세요." onChange={handleKeywordChange} value={keyword || ""} />
                        <Link to="/search">
                            <ImSearch className="Header_Search_Btn" />
                        </Link>
                    </div>
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
