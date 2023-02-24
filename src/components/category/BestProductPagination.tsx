import { useEffect, useState } from "react";
import { BestPagination } from "./Category.interface";
import { getBestProduct } from "../../hooks/axios/ProductList";
import { getTotalBestElements, getTotalBestPages } from "../../hooks/axios/ProductPage";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function BestProductPagination({ page, setPage, items, setItems }: BestPagination) {
    const [totalElements, setTotalElements] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        getTotalBestElements(setTotalElements);
        getTotalBestPages(setTotalPages);
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
        getBestProduct(setItems, page - 1, 12);
        scrollToTop();
    };

    const handlePageNextClick = () => {
        setPage(page + 1);
        getBestProduct(setItems, page + 1, 12);
        scrollToTop();
    };

    const handlePageNumsClick = (idx: number) => {
        setPage(idx + 1);
        getBestProduct(setItems, idx + 1, 12);
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
