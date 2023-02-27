export interface WishlistType {
    wishListId: number;
    userId: number;
    fundingId: number | null;
    productId: number;
    productName: string;
    price: number;
    productImage: string;
}

export interface WishlistItemType {
    item: WishlistType;
}
