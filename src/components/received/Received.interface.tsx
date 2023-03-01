export interface ReceivedFundingItem {
    fundingId: number;
    productId: number;
    productName: string;
    productImagerUrl: string;
    price: number;
    fundedPrice: number;
    participants: string[];
    participantsNumber: number;
    fundedStatusType: string;
    review: string;
    startDate: string;
    endDate: string;
}

export interface ReceivedFundingInfo {
    gift: ReceivedFundingItem;
}

export interface ReceivedModalType {
    mapShow: boolean;
    setMapShow: React.Dispatch<React.SetStateAction<boolean>>;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
}

export interface GiftShareModalType {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
