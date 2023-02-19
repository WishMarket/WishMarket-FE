import React from 'react'

interface Props {
  items: Price;
}

interface Price {
    startdate: string;
    enddate: string;
}

export default function FundingAdditionDate({ items }: Props) {
  return (
    <div className="FundingAddition_Date">
      <h2>펀딩 기간</h2>
      <div>
        {items ? items.startdate : null} ~ {items ? items.enddate : null}
      </div>
    </div>
  );
}
