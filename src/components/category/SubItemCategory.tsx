import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

import best from "../../assets/category_icon/best.png";
import clothes from "../../assets/category_icon/clothes.png";
import jewelry from "../../assets/category_icon/jewelry.png";
import furniture from "../../assets/category_icon/furniture.png";
import appliances from "../../assets/category_icon/appliances.png";
import electronics from "../../assets/category_icon/electronics.png";
import toy from "../../assets/category_icon/toy.png";
import etc from "../../assets/category_icon/etc.png";

import CategoryItemList from "./CategoryItemList";
import { Link } from "react-router-dom";

interface Product {
    name: string;
    image: string;
    price: number;
    date: string;
    funded_price: number;
    my_fund: number;
    url: string;
}

export default function SubItemCategory() {
    const [currentTab, setCurrentTab] = useState(0);
    const [items, setItems] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

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

    const url = "/data/ProductData.json";

    // tab
    const selectMenuHandler = (id: any) => {
        setCurrentTab(id);
    };

    // axios
    const getItems = async () => {
        setLoading(true);
        await axios
            .get(url)
            .then((res) => {
                let response = res.data.products;
                setItems(response);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
            <h2 className="Category_Title">Category</h2>
            <div className="Sub_Item_Category_Container">
                <div className="Sub_Item_Category_Wrapper">
                    <ul className="Sub_Item_Category_Inner">
                        {categories.map((item) => (
                            <Link to={"/category/" + item.id}>
                                <li id="Sub_Item_Category_Item" className={item.id === currentTab ? "focused" : ""} onClick={() => selectMenuHandler(item.id)} key={item.id}>
                                    <img src={item.img} alt={item.name} className="Sub_Item_Category_Img" />
                                    <div className="Sub_Item_Category_Title">{item.name}</div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="Category_Item_Container">
                <CategoryItemList currentTab={currentTab} items={items} />
            </div>
        </>
    );
}
