import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { BsShareFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { commaNums } from "../../hooks/CommaNums";
import { DetailModal } from "./Detail.interface";

export default function DetailProductInfo({ item, showModal, setShowModal }: DetailModal) {
    const [tabWish, setTabWish] = useState(false);

    let { id } = useParams() as { id: string };

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
        <div className="Detail_Top_Area">
            <div className="Detail_Img_Area">
                <img src={item.productImage} alt={item.name} className="Detail_Img" />
            </div>
            <div className="Detail_Desc">
                <div className="Detail_Desc_Top">
                    <div className="Detail_Like_Area">
                        <div className="Like_Amount">💙 {item.likes} 명이 추천했어요.</div>
                        {/* best 항목 추가 */}
                        {/* {item.best ? <div className="Detail_Best_Badge">BEST</div> : null} */}
                    </div>
                    <div className="Detail_Title">{item.name}</div>
                    <div className="Detail_Price">{commaNums(item.price)} 원</div>
                </div>
                <hr />
                <div className="Detail_Desc_Bottom">
                    <div className="Detail_List_Icon">
                        {tabWish ? <AiFillHeart className="Detail_Wish_Minus_Btn" onClick={handleTabWish} /> : <AiOutlineHeart className="Detail_Wish_Add_Btn" onClick={handleTabWish} />}
                        <button className="Detail_Share_Btn" onClick={handleShowModal}>
                            <BsShareFill className="Detail_Share_Inner" />
                        </button>
                    </div>
                    <Link to={`/funding/start/${id}`}>
                        <button className="btn btn-warning Detail_Btn">펀딩 시작</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}