import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import DaumPostCode from "react-daum-postcode";

import CompleteGiftCardUnactive from "./CompleteGiftCardUnactive";
import CompleteGiftCardActive from "./CompleteGiftCardActive";
import { commaNums } from "../../../hooks/CommaNums";
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
    const [isActive, setIsActive] = useState<boolean>(false);
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
            <CompleteGiftCardUnactive gift={gift} isActive={isActive} setIsActive={setIsActive} />
            <CompleteGiftCardActive gift={gift} />
        </>
    );
}
