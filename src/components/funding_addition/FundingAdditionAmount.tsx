import React from 'react'
import { FundingAdditionAmountprops } from './FundingAddition.interface';

export default function FundingAdditionAmount({ setFundingAmount, targetPrice, totalFundedPrice }: FundingAdditionAmountprops) {
  const max_amount = targetPrice - totalFundedPrice;
  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFundingAmount(parseInt(e.currentTarget.value));
  };

  return (
    <div className="FundingAddition_Desc_Bottom">
      <label htmlFor="Funding_Amount">내 펀딩 금액:</label>
      <input id="Funding_Amount" type="number" onChange={onChangeAmount} min={10} max={max_amount} />
      <button type="submit" className="btn btn-warning">
        펀딩 시작
      </button>
    </div>
  );
}
