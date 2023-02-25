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
    name: string;
    nickname: string;
    pointPrice: number;
    email: string;
    address: string;
    phone: string;
    photo: string;
};

export interface userInfoItem {
    userInfo: UserInfo;
}

export interface WithdrawalProps {
    errorShow: boolean;
    setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
}
