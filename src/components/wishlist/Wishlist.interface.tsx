export interface WishlistType {
    productId: number;
    name: string;
    image: string;
    price: number;
}

export interface WishlistItemType {
    item: WishlistType;
}
