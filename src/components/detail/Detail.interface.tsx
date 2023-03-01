export type ProductObj = {
    productId: number;
    name: string;
    productImage: string;
    category: number;
    price: number;
    description: string;
    likes: number;
    best: boolean;
};

export interface ReviewType {
    id: number;
    userId: number;
    userName: string;
    comment: string;
}

export type ProductItem = {
    item: ProductObj;
};

export interface DetailModalType {
    item: ProductObj;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
