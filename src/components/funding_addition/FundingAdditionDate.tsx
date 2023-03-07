import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FundingAdditionDateProps } from "./FundingAddition.interface";

export default function FundingAdditionDate({
  startDate,
  endDate,
}: FundingAdditionDateProps) {
  const s_date = new Date(startDate);
  const e_date = new Date(endDate);

  const SmallNumFormat = (value: number) => {
    if (value >= 10) {
      return value;
    } else {
      return `0${value}`;
    }
  };
  const CalendarFormat = (date: Date, delimiter: string = "-") => {
    const year = date.getFullYear();
    const month = SmallNumFormat(date.getMonth() + 1);
    const day = SmallNumFormat(date.getDate());
    const hour = SmallNumFormat(date.getHours());
    const minute = SmallNumFormat(date.getMinutes());
    return [year, month, day].join(delimiter) + ` ${hour}시 ${minute}분`;
  };
  return (
    <div className="FundingAddition_Date">
      <h2>
        <MdOutlineDateRange className="FundingStart_DatePicker_Icon" />
        펀딩 기간 선택
      </h2>
      <div className="FundingAddition_Date_Text">
        {CalendarFormat(s_date)} ~ {CalendarFormat(e_date)}
      </div>
    </div>
  );
}
