export interface IProfiles {
    profileState: boolean;
    setProfileState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AddressData {
    address: string;
}

export interface AddressModalType {
    mapShow: boolean;
    setMapShow: React.Dispatch<React.SetStateAction<boolean>>;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
}

export type UserInfo = {
    id: number;
    name: string;
    email: string;
    nickName: string;
    phone: null | string;
    profileImage: string;
    address: string;
    detailAddress: string;
    userRegistrationType: string;
    userStatusType: string;
    userRolesType: null | string;
    createdAt: string;
    modifiedAt: string;
    pointPrice: number;
};

export interface userInfoItem {
    userInfo: UserInfo;
}

export interface WithdrawalProps {
    errorShow: boolean;
    setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
}
