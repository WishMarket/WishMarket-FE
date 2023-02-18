import { useEffect, useState } from "react";
import axios from "axios";
import CategoryItemCard from "../category/CategoryItemCard";

// 검색 컴포넌트 보류
// 쿼리 사용해서 데이터 받아오고 데이터 length가 없으면 검색 결과가 없다 노출하는 방식

interface Product {
    productId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    funded_price: number;
    my_fund: number;
    url: string;
}

interface Keyword {
    keyword: string;
    setKeyword: any;
}

export default function SearchProductResult({ keyword, setKeyword }: Keyword) {
    const [items, setItems] = useState<Product[]>([]);
    const url = "/data/ProductData.json";

    // axios
    const getItems = async () => {
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
        console.log(items.length);
    }, []);

    return (
        <>
            <div className="Search_Result_Title">
                <div className="strong">"{keyword}"</div>에 대한 검색 결과입니다.
            </div>
            <div className="Search_Result_Container">
                {/* 변경 필요 */}
                {/* {items.map((item) => (item.name.toLowerCase().includes(keyword.toLowerCase()) ? <CategoryItemCard item={item} key={item.productId} /> : null))} */}
            </div>
        </>
    );
}
