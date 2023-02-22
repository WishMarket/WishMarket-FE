import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import logo from "../../assets/logo.png";
import { FaBell, FaBars } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

import ToggleBar from "../header/ToggleBar";
import { SearchKeyword } from "../../hooks/recoil/atoms";

export default function Header() {
    const [tabState, setTabState] = useState(false);
    const [tabNotify, setTabNotify] = useState(false);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const [showSubMyPage, setshowSubMyPage] = useState(false);
    const [keyword, setKeyword] = useRecoilState(SearchKeyword);

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

    // notify drop down
    const handleToggleNotify = () => {
        setTabNotify(!tabNotify);
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
                                <Link to="/friendslist" className="Header_Category_Link">
                                    친구 목록
                                </Link>
                            </li>
                            <li className="Header_Category_Item">
                                <Link to="/searchfriends" className="Header_Category_Link">
                                    친구 찾기
                                </Link>
                            </li>
                            <li className="Header_Category_Item" onMouseOver={subMyPageMouseOver} onMouseOut={subMyPageMouseOut}>
                                <Link to="/profile" className="Header_Category_Link">
                                    마이 페이지
                                </Link>
                                <ul id="My_Page_Sub_Category" className={showSubMyPage ? "Sub_Category_Active" : ""}>
                                    <li className="My_Page_Sub_Category_Item">
                                        <Link to="/profile" className="My_Page_Sub_Category_Link">
                                            프로필
                                        </Link>
                                    </li>
                                    <li className="My_Page_Sub_Category_Item">
                                        <Link to="/wish" className="My_Page_Sub_Category_Link">
                                            위시 리스트
                                        </Link>
                                    </li>
                                    <li className="My_Page_Sub_Category_Item">
                                        <Link to="/received" className="My_Page_Sub_Category_Link">
                                            받은 선물
                                        </Link>
                                    </li>
                                    <li className="My_Page_Sub_Category_Item">
                                        <Link to="/account" className="My_Page_Sub_Category_Link">
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
                        <div className="Notify_Container">
                            <input id="For_Notify_Dropdown" type="checkbox" className="Notify_Check_Box" />
                            <label className="Notify_Dropdown" htmlFor="For_Notify_Dropdown">
                                <FaBell className="Header_Notify" onClick={handleToggleNotify} />
                                <div className="Header_Notify_Badge"></div>
                            </label>
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
                        </div>
                        <FaBars className="Header_Menu_Toggle" onClick={handleToggleMenu} />
                    </div>
                </div>
            </div>
            <ToggleBar tabState={tabState} setTabState={setTabState} />
        </>
    );
}
