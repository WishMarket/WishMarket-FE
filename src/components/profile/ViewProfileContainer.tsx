import React from "react";
import defaultImg from "../../assets/default-profile-img.png";
import { commaNums } from "../../hooks/CommaNums";
import { userInfoItem } from "./Profile.interface";

export default function ViewProfileContainer({ userInfo }: userInfoItem) {
    return (
        <>
            <tbody>
                <tr>
                    <th>
                        <div className="User_Profile_Img_Head">프로필 사진</div>
                    </th>
                    <td>
                        <img src={userInfo.profileImage ? userInfo.profileImage : defaultImg} alt="profile-image" className="User_Profile_Img" />
                    </td>
                </tr>
                <tr>
                    <th>
                        <div className="User_Profile_Name_Head">이름</div>
                    </th>
                    <td>
                        <div className="User_Profile_Name">{userInfo.name}</div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <div className="User_Profile_Nickname_Head">닉네임</div>
                    </th>
                    <td>
                        <div className="User_Profile_Nickname">{userInfo.nickName}</div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <div className="User_Profile_Email_Head">이메일</div>
                    </th>
                    <td>
                        <div className="User_Profile_Email">{userInfo.email}</div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <div className="User_Profile_Point_Head">보유 포인트</div>
                    </th>
                    <td>
                        <div className="User_Profile_Point">{commaNums(userInfo.pointPrice)} P</div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <div className="User_Profile_Address_Head">주소</div>
                    </th>
                    <td>
                        <div className="User_Profile_Address">{userInfo.address === "" ? "아직 정보를 입력하지 않았습니다." : userInfo.address}</div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <div className="User_Profile_Address_Detail_Head">상세 주소</div>
                    </th>
                    <td>
                        <div className="User_Profile_Detail_Address">{userInfo.detailAddress === "" ? "아직 정보를 입력하지 않았습니다." : userInfo.detailAddress}</div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <div className="User_Profile_Phone_Head">연락처</div>
                    </th>
                    <td>
                        <div className="User_Profile_Phone">{userInfo.phone === null ? "아직 정보를 입력하지 않았습니다." : userInfo.phone}</div>
                    </td>
                </tr>
            </tbody>
        </>
    );
}
