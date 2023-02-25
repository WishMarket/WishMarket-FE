export interface AccountFunding {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    accountPoint: number;
    receiver: string;
    participant: any;
    url: string;
    active: boolean;
    achieve: boolean;
}

export interface AccountFundingItem {
    gift: AccountFunding;
}

export interface AccountFundingType {
    gift: AccountFunding;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
