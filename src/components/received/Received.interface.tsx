export interface ReceivedFundingItem {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    participant: any;
    addressInfo: boolean;
    review: string;
    url: string;
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
