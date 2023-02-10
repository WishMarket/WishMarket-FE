import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import { BsShareFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { TbHeartMinus } from "react-icons/tb";
import { IoMdCopy } from "react-icons/io";

import ProductInfo from "./ProductInfo";
import HowToUse from "./HowToUse";

import { CopyClipBoard } from "../../hooks/CopyClipBoard";
import { commaNums } from "../../hooks/CommaNums";

type ProductObj = {
    category: number;
    productId: string;
    name: string;
    image: string;
    price: number;
    like: number;
    date: string;
    funded_price: number;
    my_fund: number;
    url: string;
    best: boolean;
};

export default function DetailComponent() {
    const [currentTab, setCurrentTab] = useState(0);
    const [tabWish, setTabWish] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState<ProductObj | null>(null);

    let { id } = useParams() as { id: string };
    const url = "/data/ProductData.json";

    const tabs = [
        { id: 0, name: "상품 정보", content: <ProductInfo items={items} /> },
        { id: 1, name: "이용 안내", content: <HowToUse /> },
    ];

    // axios
    const getItems = async () => {
        await axios
            .get(url)
            .then((res) => {
                let response = res.data.products;
                setItems(response[id]); // 연동 시 교체 필요
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getItems();
    }, []);

    // tab
    const selectMenuHandler = (id: any) => {
        setCurrentTab(id);
    };

    // wishlist btn
    const handleTabWish = () => {
        setTabWish(!tabWish);
    };

    // share btn
    const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setShowModal(false);
    };

    return (
        <>
            <div className="Detail_Container">
                <div className="Detail_Wrapper">
                    {items != null ? (
                        <>
                            <div className="Detail_Top_Area">
                                <div className="Detail_Img_Area">
                                    <img src={items.image} alt={items.name} className="Detail_Img" />
                                </div>
                                <div className="Detail_Desc">
                                    <div className="Detail_Desc_Top">
                                        <div className="Detail_Like_Area">
                                            <div className="Like_Amount">💙 {items.like} 명이 추천했어요.</div>
                                            {items.best ? <div className="Detail_Best_Badge">BEST</div> : null}
                                        </div>
                                        <div className="Detail_Title">{items.name}</div>
                                        <div className="Detail_Price">{commaNums(items.price)} 원</div>
                                    </div>
                                    <hr />
                                    <div className="Detail_Desc_Bottom">
                                        <a href="">
                                            <button className="btn btn-warning Detail_Btn">선물하기</button>
                                        </a>
                                        <div className="Detail_List_Icon">
                                            {tabWish ? (
                                                <TbHeartMinus className="Detail_Wish_Minus_Btn" onClick={handleTabWish} />
                                            ) : (
                                                <RiHeartAddFill className="Detail_Wish_Add_Btn" onClick={handleTabWish} />
                                            )}
                                            <button className="Detail_Share_Btn" onClick={handleShowModal}>
                                                <BsShareFill className="Detail_Share_Inner" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Modal show={showModal} onHide={handleCloseModal}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>공유하기</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="Modal_Inner">
                                            <span className="Modal_Title">링크:</span>
                                            <input className="Share_LinkBox" type="text" value={items.url} readOnly></input>
                                            <button className="btn btn-light">
                                                <IoMdCopy className="copy_Button" onClick={() => CopyClipBoard(items.url)} />
                                            </button>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className="btn btn-secondary" onClick={handleCloseModal}>
                                            닫기
                                        </button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div className="Detail_Info_Container">
                                <div className="Detail_Info_Wrapper">
                                    <ul className="Detail_Info_Inner">
                                        {tabs.map((tab) => (
                                            <li id="Detail_Info_Tab" className={tab.id === currentTab ? "focused" : ""} onClick={() => selectMenuHandler(tab.id)} key={tab.id}>
                                                {tab.name}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="Detail_Info_Content">{tabs[currentTab].content}</div>
                                </div>
                            </div>
                            <div className="Detail_Review_Container">
                                {/* 더보기 처리 논의 필요 */}
                                <div className="Detail_Review_Wrapper">
                                    <div className="Detail_Review_Title">상품 리뷰</div>
                                    <div className="Detail_Review_Desc">상품을 선물 받은 분들이 작성하신 리뷰입니다.</div>
                                    <div className="Detail_Review_Item">
                                        <div className="Detail_Review_Name">철수</div>
                                        <div className="Detail_Review_Content">너무 좋아요</div>
                                    </div>
                                    <div className="Detail_Review_Item">
                                        <div className="Detail_Review_Name">철수</div>
                                        <div className="Detail_Review_Content">너무 좋아요</div>
                                    </div>
                                    <div className="Detail_Review_Item">
                                        <div className="Detail_Review_Name">철수</div>
                                        <div className="Detail_Review_Content">너무 좋아요</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}
