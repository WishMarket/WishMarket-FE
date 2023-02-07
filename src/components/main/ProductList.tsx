import { useState } from "react";

import { BsShareFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { TbHeartMinus } from "react-icons/tb";
import { MdReadMore } from "react-icons/md";
import { products } from "../../data/productData.json";

export default function ProductList() {
    const sliceProducts = products.slice(0, 4);

    const productCardList = sliceProducts.map((product) => {
        const [tabWish, setTabWish] = useState(false);

        // wishlist btn
        const handleTabWish = () => {
            setTabWish(!tabWish);
        };

        // comma
        const commaNums = (num: number) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        return (
            <div className="Product_List_Item" key={product.productId}>
                <img src={product.image} alt="/" className="Product_List_Img" />
                <div className="Product_List_Inner">
                    <div className="Product_Top_Like">
                        <div className="Like_Amount">{product.like} 명이 좋아합니다!</div>
                        <div className="Product_List_Best_Badge">BEST</div>
                    </div>

                    <div className="Product_List_Title">{product.name}</div>

                    <div className="Product_List_Price">{commaNums(product.price)} 원</div>
                    <div className="Product_Btn_Area">
                        <a href="/">
                            <button className="btn btn-warning Category_Funding_Btn">선물하기</button>
                        </a>
                        <div className="Product_List_Icon">
                            {tabWish ? <TbHeartMinus className="Category_Wish_Minus_Btn" onClick={handleTabWish} /> : <RiHeartAddFill className="Category_Wish_Add_Btn" onClick={handleTabWish} />}
                            <BsShareFill className="Product_Share_Btn" />
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="Main_Best_Category_Title">이런 선물 어떠세요?</div>
            <div className="Main_Best_Categort_Desc">위시마켓에서 가장 🔥HOT🔥한 베스트 상품을 소개합니다.</div>
            <div className="Product_List_Container">
                <div className="Card_Product_Wrapper">{productCardList}</div>
            </div>
            <div className="More_Btn_Area">
                <a href="/">
                    <button className="btn Product_More_Info">
                        <MdReadMore className="More_Info_Icon" /> 베스트 상품 더보기
                    </button>
                </a>
            </div>
        </>
    );
}
