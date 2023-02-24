import { useEffect, useState } from "react";
import { SearchProduct } from "./Main.interface";
import { getSearchProductList } from "../../hooks/axios/SearchProduct";
import SearchProductResultCard from "./SearchProductResultCard";
import SearchProductPagination from "./SearchProductPagination";

import { GiNothingToSay } from "react-icons/gi";

interface Keyword {
    keyword: string;
    setKeyword: any;
}

export default function SearchProductResult({ keyword, setKeyword }: Keyword) {
    const [items, setItems] = useState<SearchProduct[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        getSearchProductList(setItems, keyword, page, 12);
    }, [page, keyword]);

    return (
        <div className="main">
            <div className="Search_Result_Title">
                <div className="strong">"{keyword}"</div> 에 대한 검색 결과입니다.
            </div>
            {items.length !== 0 ? (
                <>
                    <div className="Search_Result_Container">
                        {items.map((item) => (
                            <SearchProductResultCard item={item} key={item.productId} />
                        ))}
                    </div>
                    <div className="Search_Result_Btns">
                        <SearchProductPagination keyword={keyword} setKeyword={setKeyword} items={items} setItems={setItems} page={page} setPage={setPage} />
                    </div>
                </>
            ) : (
                <>
                    <GiNothingToSay className="Search_Result_None_Icon" />
                    <div className="Search_Result_None">검색 결과가 없습니다.</div>
                </>
            )}
        </div>
    );
}
