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

export interface FundingModalType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchProductModalType {
  item: SearchProduct;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FundingItem {
  gift: FamousFundingItemType;
}

export interface KeywordType {
  keyword: string;
  setKeyword: any;
}

export interface FamousFundingItemType {
  fundingId: number;
  productId: number;
  productName: string;
  productImageUrl: string;
  targetUserId: number;
  targetUserName: string;
  targetUserProfileImageUrl: string;
  targetPrice: number;
  myFundedPrice: number;
  totalFundedPrice: number;
  startDate: string;
  endDate: string;
  fundingStatusType: string;
  fundedStatusType: string;
  participationCount: number;
  participantsNameList: string[];
}
