import React from "react";
import { TbReportMoney } from "react-icons/tb";

interface Props {
  setFundingAmount: React.Dispatch<React.SetStateAction<number>>;
  price: number;
}
export default function FundingStartAmount({ setFundingAmount, price }: Props) {
  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFundingAmount(parseInt(e.currentTarget.value));
  };

  return (
    <div className="FundingStart_Desc_Bottom">
      <label htmlFor="Funding_Amount">
        <TbReportMoney className="Funding_Amount_Icon" />내 펀딩 금액
      </label>
      <div className="Funding_Amount_Desc">펀딩 금액 단위는 10원입니다.</div>
      <div className="Funding_Amount_Flex">
        <input
          id="Funding_Amount"
          type="number"
          onChange={onChangeAmount}
          step="10"
          min="0"
          max={price}
        />
        <button type="submit" className="btn btn-warning Funding_Amount_Btn">
          시작하기
        </button>
      </div>
    </div>
  );
}
