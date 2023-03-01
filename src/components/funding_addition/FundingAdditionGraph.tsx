import React from 'react'
import { commaNums } from "../../hooks/CommaNums";
import { FundingAdditionGraphProps } from './FundingAddition.interface';


export default function FundingAdditionGraph({targetPrice, fundedPrice, totalFundedPrice}:FundingAdditionGraphProps) {

     let remaining_Amount: number | undefined;
     let remaining_Percent;

       remaining_Amount = targetPrice - totalFundedPrice;
       remaining_Percent = ((totalFundedPrice / targetPrice) * 100).toFixed(
         2
       );
     
    
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
          <span> {commaNums(totalFundedPrice)}</span>
        </div>
        <div>
          <h3>남은 금액</h3>
          <span>{remaining_Amount ? commaNums(remaining_Amount) : null}</span>
        </div>
        <div className="my-Funded">
          <h3>내 펀딩금액</h3>
          <span> {commaNums(fundedPrice)}</span>
        </div>
      </div>
    </div>
  );
}
