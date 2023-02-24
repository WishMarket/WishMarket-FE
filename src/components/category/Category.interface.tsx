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

export interface BestPagination {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    items: Product[];
    setItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

export interface Pagination {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    items: Product[];
    setItems: React.Dispatch<React.SetStateAction<Product[]>>;
    currentTab: number;
}

export interface ProductModalType {
    item: Product;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductType {
    item: Product;
}
