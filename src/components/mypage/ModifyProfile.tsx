import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { Modal } from "react-bootstrap";
import DaumPostCode from "react-daum-postcode";

import { commaNums } from "../../hooks/CommaNums";
import { validateNickname, validatePhone } from "../../utils/regex";

import { FaSearchLocation } from "react-icons/fa";

interface IProfiles {
    profileState: boolean;
    setProfileState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AddressData {
    address: string;
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

export default function ModifyProfile({ profileState, setProfileState }: IProfiles) {
    const [imageSrc, setImageSrc]: any = useState(null);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [nickname, setNickname] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const phoneRef = useRef<HTMLInputElement>(null);
    const [phoneErrorMsg, setPhoneErrorMsg] = useState<string>("");
    const [nicknameErrorMsg, setNicknameErrorMsg] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [mapShow, setMapShow] = useState<boolean>(false);
    const [disabled, setDisabled] = useState(false);

    const url = "/data/UserData.json";

    // photo upload
    const onUpload = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise<void>((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result || null);
                resolve();
            };
        });
    };

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

    useEffect(() => {
        setDisabled(!(!phoneErrorMsg && !nicknameErrorMsg));
    }, [phoneErrorMsg, nicknameErrorMsg]);

    const onAddressChangeHandler = (data: AddressData) => {
        setAddress(data.address);
        setMapShow(false);
    };

    const onMapClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setMapShow(true);
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setMapShow(false);
    };

    const handleNicknameChange = (nickname: string) => {
        setNickname(nickname);
        setNicknameErrorMsg(validateNickname(nickname) ? "📢 닉네임은 3 글자 이상, 최대 8 글자입니다." : "");
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
        setPhoneErrorMsg(validatePhone(e.target.value) ? "📢 올바른 휴대폰 번호 형식이 아닙니다." : "");
    };

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
                                    <form method="post" className="Profile_Img_Select_Form">
                                        <label htmlFor="chooseFile">
                                            <img src={imageSrc ? imageSrc : userInfo.photo} alt="profile-image" className="Profile_Img_Select_Area" />
                                        </label>
                                        <input type="file" id="chooseFile" name="chooseFile" accept="image/*" className="hidden" onChange={(e) => onUpload(e)} />
                                    </form>
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
                                    <input type="text" className="Modify_Profile_Nickname" defaultValue={userInfo.nickname} onChange={(e) => handleNicknameChange(e.target.value)} />
                                    <div className="Modify_Profile_Error_Msg">{nicknameErrorMsg}</div>
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
                                    <div className="Address_Area">
                                        <input type="text" className="Modify_Profile_Address" value={address ? address : userInfo.address} readOnly />
                                        <button className="btn btn-light Modify_Profile_Address_Btn" onClick={onMapClickHandler}>
                                            <FaSearchLocation className="Modify_Profile_Address_Btn_Icon" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="User_Profile_Phone_Head">연락처</div>
                                </th>
                                <td>
                                    <input type="text" className="Modify_Profile_Phone" defaultValue={userInfo.phone} ref={phoneRef} onChange={handlePhoneChange} />
                                    <div className="Modify_Profile_Error_Msg">{phoneErrorMsg}</div>
                                </td>
                            </tr>
                        </tbody>
                    ) : null}
                </table>
            </div>
            <Modal show={mapShow} onHide={handleClose}>
                <Modal.Body>
                    <DaumPostCode autoClose={false} onComplete={onAddressChangeHandler} />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        닫기
                    </button>
                </Modal.Footer>
            </Modal>
            <div className="User_Profile_Btn_Area">
                <button className="btn btn-primary" onClick={() => setProfileState(true)} disabled={disabled}>
                    변경하기
                </button>
                <button className="btn Point_Charge_Btn">포인트 충전</button>
            </div>
        </>
    );
}
