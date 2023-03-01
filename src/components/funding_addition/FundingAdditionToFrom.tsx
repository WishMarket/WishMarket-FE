import React from 'react'
import defaultImg from "../../assets/default-profile-img.png";
import { FundingAdditionToFromProps } from './FundingAddition.interface';


export default function FundingAdditionToFrom({
  targetUserName,
  targetUserImageUrl,
  participantsNameList,
  participationCount,
}: FundingAdditionToFromProps) {
  const FormatParticipant = () => {
    let result:string = "";
    for (let i = 0; i < participantsNameList.length; i++){
      if (i<participantsNameList.length-1) {
        result += participantsNameList[i] +", ";
      } else {
        result += participantsNameList[i];
      }
  }
    return result;
  }
  return (
    <div>
      <div className="FundingAddition_To">
        <span>
          <h2>받는 친구</h2>
        </span>
        <div className="To_desc">
          <img
            src={targetUserImageUrl ? targetUserImageUrl : defaultImg}
            className="To_image"
          ></img>
          <span>{targetUserName}</span>
        </div>
      </div>

      <div>
        <span className="FundingAddition_From">
          <h2>
            참여한 친구
            <div className="From_count">{participationCount + "명 참여"}</div>
          </h2>
          <div className="From_desc">
            <span>
              {participantsNameList
                ? FormatParticipant()
                : "참여한 친구가 없습니다."}
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
