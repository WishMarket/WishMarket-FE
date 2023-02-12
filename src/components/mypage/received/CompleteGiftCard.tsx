import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import DaumPostCode from "react-daum-postcode";
import { FaSearchLocation } from "react-icons/fa";
import { MdSentimentVerySatisfied, MdSentimentVeryDissatisfied } from "react-icons/md";

interface AddressData {
    address: string;
}

interface FundingInfo {
    gift: any;
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

export default function CompleteGiftCard({ gift }: FundingInfo) {
    const [address, setAddress] = useState<string>("");
    const [mapShow, setMapShow] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    const USER_URL = "/data/UserData.json";

    // address axios
    const getUserInfo = async () => {
        await axios
            .get(USER_URL)
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

    return (
        <>
            <div className="Complate_Gift_Card_Item">
                <div className="Complate_Gift_Left">
                    <div className="Complate_Gift_Date">{gift.date}</div>
                    <img src={gift.image} alt={gift.name} />
                </div>
                <div className="Complate_Gift_Content">
                    <div className="Complate_Gift_Info">
                        <div className="Complate_Gift_Title">{gift.name}</div>
                        <div className="Complate_Gift_Price">{gift.price}</div>
                        <div className="Complate_Gift_Addres">
                            {userInfo?.address != null ? (
                                <input type="text" value={address ? address : userInfo?.address} readOnly />
                            ) : (
                                <input type="text" value={address ? address : "주소를 입력해 주세요."} readOnly />
                            )}
                            <button className="btn btn-light Modify_Profile_Address_Btn" onClick={onMapClickHandler}>
                                <FaSearchLocation className="Modify_Profile_Address_Btn_Icon" />
                            </button>
                        </div>
                        <div className="Complate_Gift_Review">
                            <input type="text" className="Complate_Review_Input" />
                            <div className="Complate_Review_Icon">
                                <MdSentimentVerySatisfied />
                                <MdSentimentVeryDissatisfied />
                            </div>
                        </div>
                    </div>
                    <div className="Complate_Gift_Btn_Area">
                        <button className="btn btn-warning Active_Controll">제출</button>
                    </div>
                </div>
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
        </>
    );
}
