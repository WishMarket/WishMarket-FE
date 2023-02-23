import { useEffect, useState } from "react";
import { Product } from "./Main.interface";
import { getSearchProductList } from "../../hooks/axios/SearchProduct";
import SearchProductResultCard from "./SearchProductResultCard";

import { GiNothingToSay } from "react-icons/gi";

interface Keyword {
    keyword: string;
    setKeyword: any;
}

export default function SearchProductResult({ keyword, setKeyword }: Keyword) {
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
        getSearchProductList(setItems, keyword, 1);
    }, [items]);

    return (
        <div className="main">
            <div className="Search_Result_Title">
                <div className="strong">"{keyword}"</div> 에 대한 검색 결과입니다.
            </div>
            {items.length ? (
                <div className="Search_Result_Container">
                    {items.map((item) => (
                        <SearchProductResultCard item={item} key={item.productId} />
                    ))}
                </div>
            ) : (
                <>
                    <GiNothingToSay className="Search_Result_None_Icon" />
                    <div className="Search_Result_None">검색 결과가 없습니다.</div>
                </>
            )}
        </div>
    );
}
