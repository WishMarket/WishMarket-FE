import React from 'react'

interface Props {
  setFundingAmount: React.Dispatch<React.SetStateAction<number>>;
}

export default function FundingAdditionAmount({ setFundingAmount }: Props) {
  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFundingAmount(parseInt(e.currentTarget.value));
  };

  return (
    <div className="FundingAddition_Desc_Bottom">
      <label htmlFor="Funding_Amount">내 펀딩 금액:</label>
      <input id="Funding_Amount" type="number" onChange={onChangeAmount} />
      <button type="submit" className="btn btn-warning">
        펀딩 시작
      </button>
    </div>
  );
}
