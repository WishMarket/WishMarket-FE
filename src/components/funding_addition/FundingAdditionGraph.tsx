import React from 'react'
import { commaNums } from "../../hooks/CommaNums";

interface Props{
    items: Price;
}

interface Price{
    price: number;
    funded_price: number;
    my_fund: number;
}
export default function FundingAdditionGraph({items}:Props) {

     let remaining_Amount: number | undefined;
     let remaining_Percent;
     if (items) {
       remaining_Amount = items.price - items.funded_price;
       remaining_Percent = ((items.funded_price / items.price) * 100).toFixed(
         2
       );
     }
    
  return (
    <div className="FundingGraph_Desc">
      <h2>펀딩 상세</h2>
      <div
        className="funding_Progress progress"
        role="progressbar"
        style={{
          height: "25px",
        }}
      >
        <div
          className="progress-bar"
          style={{
            width: `${remaining_Percent}%`,
          }}
        >
          {remaining_Percent}%
        </div>
      </div>

      <div className="Funding_Amount_Desc">
        <div>
          <h3>모인 금액</h3>
          <span> {commaNums(items.funded_price)}</span>
        </div>
        <div>
          <h3>남은 금액</h3>
          <span>{remaining_Amount ? commaNums(remaining_Amount) : null}</span>
        </div>
        <div className="my-Funded">
          <h3>내 펀딩금액</h3>
          <span> {commaNums(items.my_fund)}</span>
        </div>
      </div>
    </div>
  );
}
