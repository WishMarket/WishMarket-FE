import { useState } from "react";
import { Modal } from "react-bootstrap";

import { BsShareFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { TbHeartMinus } from "react-icons/tb";
import { IoMdCopy } from "react-icons/io";

import { CopyClipBoard } from "../../hooks/CopyClipBoard";
import { products } from "../../data/productData.json";

import best from "../../assets/category_icon/best.png";
import clothes from "../../assets/category_icon/clothes.png";
import jewelry from "../../assets/category_icon/jewelry.png";
import furniture from "../../assets/category_icon/furniture.png";
import appliances from "../../assets/category_icon/appliances.png";
import electronics from "../../assets/category_icon/electronics.png";
import toy from "../../assets/category_icon/toy.png";
import etc from "../../assets/category_icon/etc.png";

export default function SubItemCategory() {
    const [currentTab, setCurrentTab] = useState(0);
    const categories = [
        {
            id: 0,
            name: "best",
            img: best,
        },
        {
            id: 1,
            name: "clothes",
            img: clothes,
        },
        {
            id: 2,
            name: "jewelry",
            img: jewelry,
        },
        {
            id: 3,
            name: "furniture",
            img: furniture,
        },
        {
            id: 4,
            name: "appliances",
            img: appliances,
        },
        {
            id: 5,
            name: "electronics",
            img: electronics,
        },
        {
            id: 6,
            name: "toy",
            img: toy,
        },
        {
            id: 7,
            name: "etc",
            img: etc,
        },
    ];

    const selectMenuHandler = (index: any) => {
        setCurrentTab(index);
    };

    // load product card
    const categoryItemList = products.map((product) => {
        const [tabWish, setTabWish] = useState(false);
        const [showModal, setShowModal] = useState(false);

        // wishlist btn
        const handleTabWish = () => {
            setTabWish(!tabWish);
        };

        // comma
        const commaNums = (num: number) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        // share btn
        const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setShowModal(true);
        };

        const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement> | void) => {
            setShowModal(false);
        };

        // category tab 별로 아이템 불러오기
        if (product.category !== 0 && product.category == currentTab) {
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
                                <input className="Share_LinkBox" type="text" value={product.url} readOnly></input>
                                <button className="btn btn-light">
                                    <IoMdCopy className="copy_Button" onClick={() => CopyClipBoard(product.url)} />
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
        } else if (currentTab == 0 && product.best == true) {
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
                                <input className="Share_LinkBox" type="text" value={product.url} readOnly></input>
                                <button className="btn btn-light">
                                    <IoMdCopy className="copy_Button" onClick={() => CopyClipBoard(product.url)} />
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
        }
    });

    return (
        <>
            <h2 className="Category_Title">Category</h2>
            <div className="Sub_Item_Category_Container">
                <div className="Sub_Item_Category_Wrapper">
                    <ul className="Sub_Item_Category_Inner">
                        {categories.map((item, index) => (
                            <li id="Sub_Item_Category_Item" className={index === currentTab ? "focused" : ""} onClick={() => selectMenuHandler(index)} key={item.id}>
                                <img src={item.img} alt={item.name} className="Sub_Item_Category_Img" />
                                <div className="Sub_Item_Category_Title">{item.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="Category_Item_Container">{categoryItemList}</div>
        </>
    );
}
