import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { commaNums } from "../../hooks/CommaNums";

import FundingAdditionAmount from "./FundingAdditionAmount";
import FundingAdditionGraph from "./FundingAdditionGraph";
import FundingAdditionDate from "./FundingAdditionDate";
import FundingAdditionToFrom from "./FundingAdditionToFrom";
import FundingAdditionModal from "./FundingAdditionModal";

interface ProductObj {
    productId: number;
    name: string;
    image: string;
    price: number;
    startdate: string;
    enddate: string;
    funded_price: number;
    my_fund: number;
    url: string;
    to: string;
    to_picture: string;
    from: string[];
}

export default function FundingAdditionForm() {
    const navigate = useNavigate();
    const [items, setItems] = useState<ProductObj | null>(null);
    const [fundingAmount, setFundingAmount] = useState<number>(0);
    const [errorShow, setErrorShow] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<number>(0);

    // fundingid 로 변경필요
    let { id } = useParams() as { id: string };

    const url = "/data/FundingData.json";

    // axios
    const getItems = async () => {
        await axios
            .get(url)
            .then((res) => {
                let response = res.data.fundData;
                setItems(response[0]); // 연동 시 교체 필요
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (fundingAmount < 1000) {
            setErrorCode(3);
            setErrorShow(true);
        } else {
            setErrorCode(0);
            setErrorShow(true);
            console.log("product: " + id);
            console.log(fundingAmount);
            navigate("/");
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
            <div className="FundingAddition_Container">
                <div className="FundingAddition_Wrapper">
                    {items != null ? (
                        <>
                            <form onSubmit={onSubmitHandler} target="blankifr">
                                <div className="FundingAddition_Top_Area">
                                    <div>
                                        <img src={items.image} alt={items.name} className="FundingAddition_Img" />
                                    </div>
                                    <div className="FundingAddition_Desc">
                                        <div className="FundingAddition_Title">{items.name}</div>
                                        <div className="FundingAddition_Price">
                                            <h2>목표 금액</h2>
                                            <span>{commaNums(items.price)} 원</span>
                                        </div>
                                        <FundingAdditionGraph items={items} />
                                        <hr />
                                        <FundingAdditionDate items={items} />
                                        <hr />
                                        <FundingAdditionToFrom items={items} />
                                        <hr />
                                        <FundingAdditionAmount setFundingAmount={setFundingAmount} />
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : null}
                </div>
            </div>
            <iframe
                name="blankifr"
                style={{
                    display: "none",
                }}
            ></iframe>
            <FundingAdditionModal show={errorShow} setShow={setErrorShow} code={errorCode} />
        </>
    );
}
