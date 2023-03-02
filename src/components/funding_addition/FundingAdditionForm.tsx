import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { commaNums } from "../../hooks/CommaNums";

import FundingAdditionAmount from "./FundingAdditionAmount";
import FundingAdditionGraph from "./FundingAdditionGraph";
import FundingAdditionDate from "./FundingAdditionDate";
import FundingAdditionToFrom from "./FundingAdditionToFrom";
import FundingAdditionModal from "./FundingAdditionModal";
import { getFunding, PostFundingAddition } from "../../hooks/axios/FundingAddition";
import { FundingAdditionObj } from "./FundingAddition.interface";



export default function FundingAdditionForm() {
  const navigate = useNavigate();
  const [items, setItems] = useState<FundingAdditionObj | null>(null);
  const [fundingAmount, setFundingAmount] = useState<number>(0);
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);


  let { id } = useParams() as { id: string };
  const id_num = Number(id); 

  const getFund = async (id_num:number) => {
    const getFundingItem = await getFunding(id_num); 
    console.log(getFundingItem);
    setItems(getFundingItem);
  };

  const onSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fundingAmount < 10) {
      setErrorCode(3);
      setErrorShow(true);
    } else {
      const now = new Date();
      const addition = await PostFundingAddition(now, id_num, fundingAmount);
      console.log(addition);
      if (addition.status == 200) {
        alert('펀딩참여에 성공 하였습니다.')
        navigate("/account");
      }
    }
  };

  useEffect(() => {
    getFund(id_num);
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
                    <img
                      src={items.productImageUrl}
                      alt={items.productName}
                      className="FundingAddition_Img"
                    />
                  </div>
                  <div className="FundingAddition_Desc">
                    <div className="FundingAddition_Title">
                      {items.productName}
                    </div>
                    <div className="FundingAddition_Price">
                      <h2>목표 금액</h2>
                      <span>{commaNums(items.targetPrice)} 원</span>
                    </div>
                    <FundingAdditionGraph
                      targetPrice={items.targetPrice}
                      myFundedPrice={items.myFundedPrice}
                      totalFundedPrice={items.totalFundedPrice}
                    />
                    <hr />
                    <FundingAdditionDate
                      startDate={items.startDate}
                      endDate={items.endDate}
                    />
                    <hr />
                    <FundingAdditionToFrom
                      targetUserName={items.targetUserName}
                      targetUserProfileImageUrl={
                        items.targetUserProfileImageUrl
                      }
                      participantsNameList={items.participantsNameList}
                      participationCount={items.participationCount}
                    />
                    <hr />
                    <FundingAdditionAmount
                      setFundingAmount={setFundingAmount}
                      targetPrice={items.targetPrice}
                      totalFundedPrice={items.totalFundedPrice}
                    />
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
      <FundingAdditionModal
        show={errorShow}
        setShow={setErrorShow}
        code={errorCode}
      />
    </>
  );
}
