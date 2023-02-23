export interface Product {
    best: boolean;
    category: number;
    createdAt: string;
    description: string;
    likes: number;
    modifiedAt: string;
    name: string;
    price: number;
    productId: number;
    productImageUrl: string;
}

export interface CategoryTab {
    currentTab: number;
    items: Product[];
    setItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

export interface ProductModalType {
    item: Product;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductType {
    item: Product;
}
