import React from 'react'
import defaultImg from "../../assets/default-profile-img.png";

interface Props {
  items: Price;
}

interface Price {
    to_picture: string;
    to: string;
    from: string[];
}

export default function FundingAdditionToFrom({ items }: Props) {
  return (
    <div>
      <div className="FundingAddition_To">
        <span>
          <h2>받는 친구</h2>
        </span>
        <div className="To_desc">
          <img
            src={items ? items.to_picture : defaultImg}
            className="To_image"
          ></img>
          <span>{items ? items.to : null}</span>
        </div>
      </div>

      <div>
        <span className="FundingAddition_From">
          <h2>
            참여한 친구
            <div className="From_count">
              {items ? items.from.length + "명 참여" : ""}
            </div>
          </h2>
          <div className="From_desc">
            <span>{items ? items.from + " " : "참여한 친구가 없습니다."}</span>
          </div>
        </span>
      </div>
    </div>
  );
}
