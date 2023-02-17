import React, { useState, useEffect } from "react";
import axios from "axios";
import defaultImg from "../../assets/default-profile-img.png";

import { commaNums } from "../../hooks/CommaNums";

interface IProfiles {
    profileState: boolean;
    setProfileState: React.Dispatch<React.SetStateAction<boolean>>;
}

type UserInfo = {
    name: string;
    nickname: string;
    pointPrice: number;
    email: string;
    address: string;
    phone: string;
    photo: string;
};

export default function ViewProfile({ profileState, setProfileState }: IProfiles) {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const url = "/data/UserData.json";

    // axios
    const getUserInfo = async () => {
        await axios
            .get(url)
            .then((res) => {
                let response = res.data.users;
                setUserInfo(response[0]); // 연동 시 교체 필요
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <>
            <div className="Profile_Select_Container">
                <table>
                    <caption>프로필 수정</caption>
                    {userInfo ? (
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
                    ) : null}
                </table>
            </div>
            <div className="User_Profile_Btn_Area">
                <button className="btn btn-primary" onClick={() => setProfileState(false)}>
                    정보 변경
                </button>
                <button className="btn Point_Charge_Btn">포인트 충전</button>
            </div>
        </>
    );
}
