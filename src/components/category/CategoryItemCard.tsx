import { useState } from "react";
import { Link } from "react-router-dom";

import { BsShareFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import ProductModal from "./ProductModal";
import { commaNums } from "../../hooks/CommaNums";

interface Item {
    item: any;
}

export default function CategoryItemCard({ item }: Item) {
    const [tabWish, setTabWish] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    // wishlist btn
    const handleTabWish = () => {
        setTabWish(!tabWish);
    };

    // share btn
    const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <>
            <div className="Product_List_Item" key={item.productId}>
                <img src={item.productImageUrl} alt="/" className="Product_List_Img" />
                <div className="Product_List_Inner">
                    <div className="Product_Top_Like">
                        <div className="Like_Amount">💙 {item.likes} 명이 추천했어요.</div>
                        {item.best ? <div className="Product_List_Best_Badge">BEST</div> : null}
                    </div>
                    <div className="Product_List_Title">{item.name}</div>
                    <div className="Product_List_Price">{commaNums(item.price)} 원</div>
                    <div className="Product_Btn_Area">
                        <Link to={"/category/product/" + item.productId}>
                            <button className="btn btn-warning Category_Funding_Btn">선물하기</button>
                        </Link>
                        <div className="Product_List_Icon">
                            {tabWish ? <AiFillHeart className="Category_Wish_Minus_Btn" onClick={handleTabWish} /> : <AiOutlineHeart className="Category_Wish_Add_Btn" onClick={handleTabWish} />}
                            <button className="Product_Share_Btn" onClick={handleShowModal}>
                                <BsShareFill className="Product_Share_Inner" />
                            </button>
                        </div>
                    </div>
                </div>
                <ProductModal item={item} showModal={showModal} setShowModal={setShowModal} />
            </div>
        </>
    );
}
