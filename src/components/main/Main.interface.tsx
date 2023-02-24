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

export interface SearchProductModalType {
    item: SearchProduct;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
