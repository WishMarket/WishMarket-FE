import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailProductInfo from "./DetailProductInfo";
import DetailModal from "./DetailModal";
import DetailTab from "./DetailTab";

import { getProductDetail } from "../../hooks/axios/ProductDetail";
import { ProductObj } from "./Detail.interface";

export default function DetailComponent() {
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState<ProductObj | null>(null);

    let { id } = useParams() as { id: string };

    useEffect(() => {
        getProductDetail(setItem, id);
    }, []);

    return (
        <>
            <div className="Detail_Container">
                <div className="Detail_Wrapper">
                    {item != null ? (
                        <>
                            <DetailProductInfo showModal={showModal} setShowModal={setShowModal} item={item} />
                            <DetailModal item={item} showModal={showModal} setShowModal={setShowModal} />
                            <DetailTab item={item} />
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}
