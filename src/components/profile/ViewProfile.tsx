import React, { useState, useEffect } from "react";
import ViewProfileContainer from "./ViewProfileContainer";
import WithdrawalModal from "./WithdrawalModal";
import { IProfiles, UserInfo } from "./Profile.interface";
import { getUserInfo } from "../../hooks/axios/Profile";

export default function ViewProfile({ profileState, setProfileState }: IProfiles) {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [errorShow, setErrorShow] = useState<boolean>(false);

    useEffect(() => {
        getUserInfo(setUserInfo);
        console.log(userInfo);
    }, []);

    const onClickWithdrawal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErrorShow(true);
    };
    return (
        <>
            <div className="Profile_Select_Container">
                <table>
                    <caption>프로필 수정</caption>
                    {userInfo ? <ViewProfileContainer userInfo={userInfo} /> : null}
                </table>
            </div>
            <div className="User_Profile_Btn_Area">
                <button className="btn btn-primary" onClick={() => setProfileState(false)}>
                    정보 변경
                </button>
                <button className="btn Point_Charge_Btn">포인트 충전</button>
                <button className="btn btn-warning" onClick={onClickWithdrawal}>
                    회원 탈퇴
                </button>
            </div>
            <WithdrawalModal errorShow={errorShow} setErrorShow={setErrorShow} />
        </>
    );
}
