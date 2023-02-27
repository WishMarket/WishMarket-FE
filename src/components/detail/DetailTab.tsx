import { useEffect, useState } from "react";

import ProductInfo from "./ProductInfo";
import HowToUse from "./HowToUse";
import ProductReview from "./ProductReview";

import { ProductItem } from "./Detail.interface";

export default function DetailTab({ item }: ProductItem) {
    const [currentTab, setCurrentTab] = useState(0);

    const tabs = [
        { id: 0, name: "상품 정보", content: <ProductInfo item={item} /> },
        { id: 1, name: "한줄 리뷰", content: <ProductReview item={item} /> },
        { id: 2, name: "이용 안내", content: <HowToUse /> },
    ];

    // tab
    const selectMenuHandler = (id: any) => {
        setCurrentTab(id);
    };

    return (
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
    );
}
