import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import best from "../../assets/category_icon/best.png";
import clothes from "../../assets/category_icon/clothes.png";
import jewelry from "../../assets/category_icon/jewelry.png";
import furniture from "../../assets/category_icon/furniture.png";
import appliances from "../../assets/category_icon/appliances.png";
import electronics from "../../assets/category_icon/electronics.png";
import toy from "../../assets/category_icon/toy.png";
import etc from "../../assets/category_icon/etc.png";

import CategoryItemList from "./CategoryItemList";
import { getProductList, getBestProduct } from "../../hooks/axios/ProductList";
import { Product } from "./Category.interface";

export default function SubItemCategory() {
    const [items, setItems] = useState<Product[]>([]);
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
            name: "appliances",
            img: appliances,
        },
        {
            id: 3,
            name: "toy",
            img: toy,
        },
        {
            id: 4,
            name: "electronics",
            img: electronics,
        },
        {
            id: 5,
            name: "jewelry",
            img: jewelry,
        },
        {
            id: 6,
            name: "furniture",
            img: furniture,
        },
        {
            id: 7,
            name: "etc",
            img: etc,
        },
    ];

    // tab
    const selectMenuHandler = (id: number) => {
        setCurrentTab(id);
        if (id === 0) {
            getBestProduct(setItems);
        } else {
            getProductList(setItems, id, 1, 12);
        }
    };

    return (
        <>
            <h2 className="Category_Title">Category</h2>
            <div className="Sub_Item_Category_Container">
                <div className="Sub_Item_Category_Wrapper">
                    <ul className="Sub_Item_Category_Inner">
                        {categories.map((item) => (
                            <Link to={"/category/" + item.id} key={item.id}>
                                <li id="Sub_Item_Category_Item" className={item.id === currentTab ? "focused" : ""} onClick={() => selectMenuHandler(item.id)}>
                                    <img src={item.img} alt={item.name} className="Sub_Item_Category_Img" />
                                    <div className="Sub_Item_Category_Title">{item.name}</div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="Category_Item_Container">
                <CategoryItemList currentTab={currentTab} items={items} setItems={setItems} />
            </div>
        </>
    );
}
