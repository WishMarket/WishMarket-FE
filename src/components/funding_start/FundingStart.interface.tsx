export interface FundingStartProductObj {
  productId: number;
  name: string;
  productImage: string;
  price: number;
}

export interface FundingStartFriendObj {
  email: string;
  name: string;
  nickName: string;
  profileImageUrl: string;
  userId: number;
}

export interface FriendPickerProps {
  email: string;
  userId: number;
  name: string;
  profileImageUrl: string;
  FriendSelect(userId: number, name: string, profile: string): any;
}

export interface FriendPickedProps {
  pickFriendName: string | null;
  setPickFriendName: React.Dispatch<React.SetStateAction<string | null>>;
  pickFriendProfile: string | null;
  setPickFriendProfile: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface FundingStartModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  code: number;
}

export interface FundingStartAmountProps {
  setFundingAmount: React.Dispatch<React.SetStateAction<number>>;
  price: number;
}
