import React, { useState, useEffect, useRef } from "react";
import ModifyProfileContainer from "./ModifyProfileModal";
import defaultImg from "../../assets/default-profile-img.png";
import { getUserInfo, updateUserInfoImg, updateUserInfo, increasePoint } from "../../hooks/axios/Profile";
import { commaNums } from "../../hooks/CommaNums";
import { IProfiles, UserInfo } from "./Profile.interface";
import { validateNickname, validatePhone } from "../../utils/regex";
import { FaSearchLocation } from "react-icons/fa";

export default function ModifyProfile({ profileState, setProfileState }: IProfiles) {
    const [point, setPoint] = useState<number>(0);
    const [files, setFiles]: any = useState(null);
    const [imageSrc, setImageSrc]: any = useState(null);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [nickName, setNickName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const phoneRef = useRef<HTMLInputElement>(null);
    const [phoneErrorMsg, setPhoneErrorMsg] = useState<string>("");
    const [nickNameErrorMsg, setNickNameErrorMsg] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [detailAddress, setDetailAddress] = useState<string>("");
    const [mapShow, setMapShow] = useState<boolean>(false);
    const [disabled, setDisabled] = useState(false);

    // photo upload
    const onUpload = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFiles(e.target.files[0]);

        return new Promise<void>((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result || null);
                resolve();
            };
        });
    };

    useEffect(() => {
        getUserInfo(setUserInfo);
    }, [point]);

    useEffect(() => {
        setDisabled(!(!phoneErrorMsg && !nickNameErrorMsg));
    }, [phoneErrorMsg, setNickNameErrorMsg]);

    const onMapClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setMapShow(true);
    };

    const handleNicknameChange = (nickName: string) => {
        setNickName(nickName);
        setNickNameErrorMsg(validateNickname(nickName) ? "???? ???????????? 3 ?????? ??????, ?????? 8 ???????????????." : "");
    };

    const handlePhoneChange = (e: any) => {
        const value = phoneRef.current!.value.replace(/\D+/g, "");
        const numberLength = 11;

        let result;
        result = "";

        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 3:
                    result += "-";
                    break;
                case 7:
                    result += "-";
                    break;

                default:
                    break;
            }

            result += value[i];
        }

        phoneRef.current!.value = result;

        setPhone(e.target.value);
        setPhoneErrorMsg(validatePhone(e.target.value) ? "???? ????????? ????????? ?????? ????????? ????????????." : "");
    };

    const frm = new FormData();
    frm.append("nickName", nickName);
    frm.append("address", address);
    frm.append("detailAddress", detailAddress);
    frm.append("phone", phone);

    const imgFrm = new FormData();
    imgFrm.append("profileImage", files);

    const handleModifyProfile = () => {
        files ? updateUserInfoImg(imgFrm) : null;
        updateUserInfo(frm);
        setProfileState(true);
        location.reload();
    };

    const getPoint = () => {
        increasePoint();
        setPoint(point + 1);
    };

    return (
        <>
            <div className="Profile_Select_Container">
                <table>
                    <caption>????????? ??????</caption>
                    {userInfo ? (
                        <tbody>
                            <tr>
                                <th>
                                    <div className="User_Profile_Img_Head">????????? ??????</div>
                                </th>
                                <td>
                                    <form method="post" className="Profile_Img_Select_Form">
                                        <label htmlFor="chooseFile">
                                            {userInfo.profileImageUrl ? (
                                                <img src={imageSrc ? imageSrc : userInfo.profileImageUrl} alt="profile-image" className="Profile_Img_Select_Area" />
                                            ) : (
                                                <img src={imageSrc ? imageSrc : defaultImg} alt="profile-image" className="Profile_Img_Select_Area" />
                                            )}
                                        </label>
                                        <input type="file" id="chooseFile" name="chooseFile" accept="image/*" className="hidden" onChange={(e) => onUpload(e)} />
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="User_Profile_Name_Head">??????</div>
                                </th>
                                <td>
                                    <div className="User_Profile_Name">{userInfo.name}</div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="User_Profile_Nickname_Head">?????????</div>
                                </th>
                                <td>
                                    <input type="text" className="Modify_Profile_Nickname" defaultValue={userInfo.nickName} onChange={(e) => handleNicknameChange(e.target.value)} />
                                    <div className="Modify_Profile_Error_Msg">{nickNameErrorMsg}</div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="User_Profile_Email_Head">?????????</div>
                                </th>
                                <td>
                                    <div className="User_Profile_Email">{userInfo.email}</div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="User_Profile_Point_Head">?????? ?????????</div>
                                </th>
                                <td>
                                    <div className="User_Profile_Point">{commaNums(userInfo.pointPrice)} P</div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="User_Profile_Address_Head">??????</div>
                                </th>
                                <td>
                                    <div className="Address_Area">
                                        <input type="text" className="Modify_Profile_Address" value={address ? address : userInfo.address} onChange={(e) => setAddress(e.target.value)} readOnly />
                                        <button className="btn btn-light Modify_Profile_Address_Btn" onClick={onMapClickHandler}>
                                            <FaSearchLocation className="Modify_Profile_Address_Btn_Icon" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="User_Profile_Address_Detail_Head">?????? ??????</div>
                                </th>
                                <td>
                                    <input type="text" className="Modify_Profile_Detail_Address" defaultValue={userInfo.detailAddress} onChange={(e) => setDetailAddress(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="User_Profile_Phone_Head">?????????</div>
                                </th>
                                <td>
                                    <input type="text" className="Modify_Profile_Phone" defaultValue={userInfo.phone == null ? "" : userInfo.phone} ref={phoneRef} onChange={handlePhoneChange} />
                                    <div className="Modify_Profile_Error_Msg">{phoneErrorMsg}</div>
                                </td>
                            </tr>
                        </tbody>
                    ) : null}
                </table>
            </div>
            <ModifyProfileContainer mapShow={mapShow} setMapShow={setMapShow} setAddress={setAddress} />
            <div className="User_Profile_Btn_Area">
                <button className="btn btn-primary" onClick={handleModifyProfile} disabled={disabled}>
                    ????????????
                </button>
                <button className="btn Point_Charge_Btn" onClick={getPoint}>
                    ????????? ??????
                </button>
            </div>
        </>
    );
}
