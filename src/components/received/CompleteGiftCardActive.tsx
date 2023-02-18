import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import DaumPostCode from "react-daum-postcode";
import { commaNums } from "../../hooks/CommaNums";
import { MdSentimentVerySatisfied, MdSentimentVeryDissatisfied } from "react-icons/md";
import { FaKaaba } from "react-icons/fa";

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

export default function CompleteGiftCardActive({ gift }: FundingInfo) {
    const [goodIcon, setGoodIcon] = useState<boolean>(false);
    const [badIcon, setBadIcon] = useState<boolean>(false);
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
            <div className="Complete_Gift_Card_Item Active">
                <img src={gift.image} alt={gift.name} className="Complete_Gift_Img" />
                <div className="Complete_Gift_Content">
                    <div className="Complete_Gift_Info">
                        <div className="Complete_Gift_Item_Title">{gift.name}</div>
                        <div className="Complete_Gift_Price">{commaNums(gift.price)} 원</div>
                        <div className="Complete_Gift_Address">
                            <div className="Complete_Gift_Address_Label">주소</div>
                            <div className="Complete_Gift_Address_Area">
                                {userInfo?.address != null ? (
                                    <input type="text" value={address ? address : userInfo?.address} className="Complete_Gift_Address_Input" readOnly />
                                ) : (
                                    <input type="text" value={address ? address : "주소를 입력해 주세요."} className="Complete_Gift_Address_Input" readOnly />
                                )}
                                <button className="btn btn-warning Modify_Profile_Address_Btn" onClick={onMapClickHandler}>
                                    주소 변경
                                </button>
                            </div>
                        </div>
                        <div className="Complete_Gift_Review">
                            <div className="Complete_Gift_Review_Label">한줄 리뷰</div>
                            <div className="Complete_Review_Area">
                                <input type="text" className="Complete_Review_Input" placeholder="리뷰를 입력하세요." />
                                <div className="Complete_Review_Icon">
                                    <div className={goodIcon ? "Complete_Review_Good active" : "Complete_Review_Good"} onClick={() => setGoodIcon(!goodIcon)}>
                                        <MdSentimentVerySatisfied className="Complete_Review_Good_Icon" />
                                        <div>좋아요</div>
                                    </div>
                                    <div className={badIcon ? "Complete_Review_Bad active" : "Complete_Review_Bad"} onClick={() => setBadIcon(!badIcon)}>
                                        <MdSentimentVeryDissatisfied className="Complete_Review_Bad_Icon" />
                                        <div>별로예요</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Complete_Gift_Date">
                            <div className="Complete_Gift_Date_Label">펀딩 기간</div>
                            <div className="Complete_Gift_Date_Content">{gift.date}</div>
                        </div>
                        <div className="Complete_Gift_People">
                            <div className="Complete_Gift_People_Label">참여자</div>
                            <div className="Flex_Container">
                                <div className="Complete_Gift_People_Content">{gift.participant.join(", ")}</div>
                                <div className="Complete_Gift_People_Badge">{gift.participant.length} 명 참여</div>
                            </div>
                        </div>
                    </div>
                    <div className="Complete_Gift_Btn_Area">
                        <button className="btn btn-primary Active_Controll">제출</button>
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
