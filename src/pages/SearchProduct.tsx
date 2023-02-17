import React from "react";
import { useRecoilState } from "recoil";

import Header from "../components/header/Header";
import SearchProductResult from "../components/main/SearchProductResult";
import Footer from "../components/footer/Footer";

import { SearchKeyword } from "../hooks/recoil/atoms";

export default function SearchProduct() {
    const [keyword, setKeyword] = useRecoilState(SearchKeyword);
    console.log(keyword);

    return (
        <>
            <Header />
            <SearchProductResult keyword={keyword} setKeyword={setKeyword} />
            <Footer />
        </>
    );
}
