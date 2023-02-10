import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import { CopyClipBoard } from "../../hooks/CopyClipBoard";
import { commaNums } from "../../hooks/CommaNums";

import { BsShareFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { TbHeartMinus } from "react-icons/tb";
import { IoMdCopy } from "react-icons/io";

interface IFetch {
    items: any;
}

export default function FetchProduct({ items }: IFetch) {
    const [tabWish, setTabWish] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
            {items.slice(0, 4).map((item: any) => {
                return (
                    <div className="Product_List_Item" key={item.productId}>
                        <img src={item.image} alt="/" className="Product_List_Img" />
                        <div className="Product_List_Inner">
                            <div className="Product_Top_Like">
                                <div className="Like_Amount">💙 {item.like} 명이 추천했어요.</div>
                                {item.best ? <div className="Product_List_Best_Badge">BEST</div> : null}
                            </div>
                            <div className="Product_List_Title">{item.name}</div>
                            <div className="Product_List_Price">{commaNums(item.price)} 원</div>
                            <div className="Product_Btn_Area">
                                <Link to={"/category/product/" + item.productId}>
                                    <button className="btn btn-warning Category_Funding_Btn">선물하기</button>
                                </Link>
                                <div className="Product_List_Icon">
                                    {tabWish ? (
                                        <TbHeartMinus className="Category_Wish_Minus_Btn" onClick={handleTabWish} />
                                    ) : (
                                        <RiHeartAddFill className="Category_Wish_Add_Btn" onClick={handleTabWish} />
                                    )}
                                    <button className="Product_Share_Btn" onClick={handleShowModal}>
                                        <BsShareFill className="Product_Share_Inner" />
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
                                    <input className="Share_LinkBox" type="text" value={item.url} readOnly></input>
                                    <button className="btn btn-light">
                                        <IoMdCopy className="copy_Button" onClick={() => CopyClipBoard(item.url)} />
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
                );
            })}
        </>
    );
}
