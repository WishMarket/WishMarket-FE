export interface FundingList {
    fundingId: number;
    name: string;
    image: string;
    price: number;
    date: string;
    gatherPoint: number;
    accountPoint: number;
    receiver: string;
    participant: any;
    url: string;
    active: boolean;
    achieve: boolean;
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
    users: any;
    userId: number;
}

export interface FriendsItemState {
    user: any;
    userId: number;
    setUserId: any;
}

export interface FriendsWishlist {
    productId: number;
    name: string;
    image: string;
    price: number;
}

export interface FriendsWishItem {
    item: FriendsWishlist;
}
