import { useState } from "react";
import { Link } from "react-router-dom";
import { Token } from "./Header.interface";

export default function HeaderCategory({ token }: Token) {
    const [showSubCategory, setShowSubCategory] = useState(false);
    const [showSubMyPage, setshowSubMyPage] = useState(false);

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
    );
}
