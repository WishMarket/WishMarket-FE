import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { MdReadMore } from "react-icons/md";
import FetchProduct from "./FetchProduct";

interface Product {
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
}

export default function ProductList() {
    const [items, setItems] = useState<Product[]>([]);

    const getItems = async () => {
        const url = "/data/ProductData.json";
        await axios.get(url).then((res) => {
            setItems(res.data.products);
        });
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
            <div className="Main_Best_Category_Title">이런 선물 어떠세요?</div>
            <div className="Main_Best_Categort_Desc">위시마켓에서 가장 HOT한 베스트 상품을 소개합니다.</div>
            <div className="Product_List_Container">
                <div className="Card_Product_Wrapper">
                    <FetchProduct items={items} />
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
