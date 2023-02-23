import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ImSearch } from "react-icons/im";

import { SearchKeyword } from "../../hooks/recoil/atoms";

export default function SearchContainer() {
    const [inputValue, setInputValue] = useState<string>("");
    const [keyword, setKeyword] = useRecoilState(SearchKeyword);

    // search
    const handleKeywordChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleKeywordSubmit = () => {
        setKeyword(inputValue);
    };

    return (
        <div className="Header_Search_Container">
            <input type="text" className="Header_Search_Box" placeholder="상품을 검색해 보세요." onChange={handleKeywordChange} value={inputValue || ""} />
            <Link to="/search">
                <ImSearch className="Header_Search_Btn" onClick={handleKeywordSubmit} />
            </Link>
        </div>
    );
}
