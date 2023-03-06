import { Link } from "react-router-dom";
import { MdReadMore } from "react-icons/md";
import FetchProduct from "./FetchProduct";

export default function ProductList() {
    return (
        <>
            <div className="Main_Best_Category_Title">이런 선물 어떠세요?</div>
            <div className="Main_Best_Categort_Desc">위시마켓에서 가장 HOT한 베스트 상품을 소개합니다.</div>
            <div className="Product_List_Container">
                <div className="Card_Product_Wrapper">
                    <FetchProduct />
                </div>
            </div>
            <div className="More_Btn_Area">
                <Link to="/category/0">
                    <button className="btn Product_More_Info">
                        <MdReadMore className="More_Info_Icon" /> 베스트 상품 더보기
                    </button>
                </Link>
            </div>
        </>
    );
}
