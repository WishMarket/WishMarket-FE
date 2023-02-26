export interface SearchProduct {
    productId: number;
    name: string;
    productImage: string;
    price: number;
    likes: number;
    best: boolean;
}

export interface ItemType {
    item: SearchProduct;
}

export interface SearchProductType {
    keyword: string;
    setKeyword: any;
    items: SearchProduct[];
    setItems: React.Dispatch<React.SetStateAction<SearchProduct[]>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface FundingModalType {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchProductModalType {
    item: SearchProduct;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FundingItemType {
    fundingId: number;
    targetId: number;
    targetName: string;
    product: {
        productId: number;
        name: string;
        productImageUrl: string;
        price: number;
    };
    fundedPrice: number;
    myfundingPrice: number;
    participants: string[];
    fundStatus: string;
    startDate: string;
    endDate: string;
}

export interface FundingItem {
    gift: FundingItemType;
}

export interface KeywordType {
    keyword: string;
    setKeyword: any;
}
