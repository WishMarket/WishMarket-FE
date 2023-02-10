import React from "react";
import defaultImg from "../../assets/default-profile-img.png";

interface IProfiles {
    profileState: boolean;
    setProfileState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModifyProfile({ profileState, setProfileState }: IProfiles) {
    return (
        <>
            <div className="Profile_Select_Container">
                <table>
                    <caption>프로필 수정</caption>
                    <tbody>
                        <tr>
                            <th>
                                <div className="User_Profile_Img_Head">프로필 사진</div>
                            </th>
                            <td>
                                <form method="post" className="Profile_Img_Select_Form">
                                    <label htmlFor="chooseFile">
                                        <img src={defaultImg} alt="profile-image" className="Profile_Img_Select_Area" />
                                    </label>
                                    <input type="file" id="chooseFile" name="chooseFile" accept="image/*" />
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="User_Profile_Name_Head">이름</div>
                            </th>
                            <td>
                                <div className="User_Profile_Name">김철수</div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="User_Profile_Nickname_Head">닉네임</div>
                            </th>
                            <td>
                                <div className="User_Profile_Nickname">철수</div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="User_Profile_Email_Head">이메일</div>
                            </th>
                            <td>
                                <div className="User_Profile_Email">mainmirror@gmail.com</div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="User_Profile_Point_Head">보유 포인트</div>
                            </th>
                            <td>
                                <div className="User_Profile_Point">999,999 P</div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="User_Profile_Address_Head">주소</div>
                            </th>
                            <td>
                                <div className="User_Profile_Address">서울특별시 영등포구 여의도동 800</div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="User_Profile_Phone_Head">연락처</div>
                            </th>
                            <td>
                                <div className="User_Profile_Phone">010-0000-0000</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="User_Profile_Btn_Area">
                <button className="btn btn-primary" onClick={() => setProfileState(true)}>
                    변경하기
                </button>
                <button className="btn Point_Charge_Btn">포인트 충전</button>
            </div>
        </>
    );
}
