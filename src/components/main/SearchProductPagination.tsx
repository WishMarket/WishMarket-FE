import { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import { getSearchProductList } from "../../hooks/axios/SearchProduct";
import { getSearchTotalElements, getSearchTotalPages } from "../../hooks/axios/ProductPage";
import { SearchProductType } from "./Main.interface";

export default function SearchProductPagination({ keyword, setKeyword, items, setItems, page, setPage }: SearchProductType) {
    const [totalElements, setTotalElements] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        getSearchTotalElements(setTotalElements, keyword, page);
        getSearchTotalPages(setTotalPages, keyword, page);
    }, []);

    // scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // page tab
    const handlePagePrevClick = () => {
        setPage(page - 1);
        getSearchProductList(setItems, keyword, page - 1, 12);
        scrollToTop();
    };

    const handlePageNextClick = () => {
        setPage(page + 1);
        getSearchProductList(setItems, keyword, page + 1, 12);
        scrollToTop();
    };

    const handlePageNumsClick = (idx: number) => {
        setPage(idx + 1);
        getSearchProductList(setItems, keyword, idx + 1, 12);
        scrollToTop();
    };

    return (
        <nav className="pagination-btn-area">
            <button className="pagination-btn-item go-to-prev" onClick={handlePagePrevClick} disabled={page === 1}>
                <AiFillCaretLeft className="pagination-btn-item-icon" />
            </button>
            {new Array(totalPages).fill(0).map((_, idx) => (
                <button key={idx} className="pagination-btn-item" onClick={() => handlePageNumsClick(idx)}>
                    {idx + 1}
                </button>
            ))}
            <button className="pagination-btn-item go-to-next" onClick={handlePageNextClick} disabled={page === totalPages}>
                <AiFillCaretRight className="pagination-btn-item-icon" />
            </button>
        </nav>
    );
}
