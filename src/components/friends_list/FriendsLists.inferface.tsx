export interface FundingList {
    fundingId: number;
    targetId: number;
    targetName: string;
    productId: number;
    productName: string;
    productImagerUrl: string;
    price: number;
    fundedPrice: number;
    myFundingPrice: number;
    participants: string[];
    participantsNumber: number;
    fundStatus: string;
    startDate: string;
    endDate: string;
}

export interface FriendsFundingItem {
    gift: FundingList;
}

export interface FriendsObj {
    email: string;
    name: string;
    nickName: string;
    profileImageUrl: string;
    userId: number;
}

export interface FriendsItem {
    users: FriendsObj[];
    userId: number;
    setUserId: any;
}

export interface FriendsItemState {
    user: any;
    userId: number;
    setUserId: any;
}

export interface FriendsWishlist {
    wishListId: number;
    userId: number;
    fundingId: number | null;
    productId: number;
    productName: string;
    price: number;
    productImage: string;
}

export interface FriendsWishItem {
    item: FriendsWishlist;
}
