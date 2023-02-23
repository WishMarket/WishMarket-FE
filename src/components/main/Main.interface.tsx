export interface Product {
    productId: number;
    name: string;
    productImage: string;
    price: number;
    likes: number;
    best: boolean;
}

export interface ItemType {
    item: Product;
}

export interface SearchProductModalType {
    item: Product;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
