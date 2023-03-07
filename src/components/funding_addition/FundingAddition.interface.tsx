export interface FundingAdditionObj {
  endDate: string;
  myFundedPrice: number;
  fundedStatusType: string;
  fundingId: number;
  fundingStatusType: string;
  participantsNameList: string[];
  participationCount: number;
  productId: number;
  productImageUrl: string;
  productName: string;
  startDate: string;
  targetPrice: number;
  targetUserId: number;
  targetUserProfileImageUrl: string;
  targetUserName: string;
  totalFundedPrice: number;
}

export interface FundingAdditionGraphProps {
  targetPrice: number;
  myFundedPrice: number;
  totalFundedPrice: number;
}

export interface FundingAdditionDateProps {
  startDate: string;
  endDate: string;
}

export interface FundingAdditionToFromProps {
  targetUserName: string;
  targetUserProfileImageUrl: string;
  participantsNameList: string[];
  participationCount: number;
}

export interface FundingAdditionModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  code: number;
}

export interface FundingAdditionAmountprops {
  setFundingAmount: React.Dispatch<React.SetStateAction<number>>;
  targetPrice: number;
  totalFundedPrice: number;
}
