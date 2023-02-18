import React from "react";
import defaultImg from "../../assets/default-profile-img.png";
import { commaNums } from "../../hooks/CommaNums";

interface userInfo {
    userInfo: any;
}

export default function ViewProfileContainer({ userInfo }: userInfo) {
    return (
        <>
            <tbody>
                <tr>
                    <th>
                        <div className="User_Profile_Img_Head">프로필 사진</div>
                    </th>
                    <td>
                        <img src={userInfo.photo ? userInfo.photo : defaultImg} alt="profile-image" className="User_Profile_Img" />
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
                        <div className="User_Profile_Nickname">{userInfo.nickname}</div>
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
                        <div className="User_Profile_Address">{userInfo.address}</div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <div className="User_Profile_Phone_Head">연락처</div>
                    </th>
                    <td>
                        <div className="User_Profile_Phone">{userInfo.phone}</div>
                    </td>
                </tr>
            </tbody>
        </>
    );
}
