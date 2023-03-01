export interface AccountFunding {
    fundingId: number;
    targetId: number;
    targetName: string;
    productId: number;
    productName: string;
    productImagerUrl: string;
    price: number;
    fundedPrice: number;
    myFundingPrice: number;
    participants: string[];
    participantsNumber: number;
    fundStatus: string;
    startDate: string;
    endDate: string;
}

export interface AccountFundingItem {
    gift: AccountFunding;
}

export interface AccountFundingType {
    gift: AccountFunding;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
