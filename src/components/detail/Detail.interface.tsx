export type ProductObj = {
    productId: number;
    name: string;
    productImage: string;
    category: number;
    price: number;
    description: string;
    likes: number;
};

export type ProductItem = {
    item: ProductObj;
};

export interface DetailModalType {
    item: ProductObj;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
