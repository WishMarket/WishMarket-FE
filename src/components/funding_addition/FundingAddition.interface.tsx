export interface FundingAdditionObj {
  endDate: string;
  fundedPrice: number;
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
  //수정되야함
  targetUserImageUrl: string;
  targetUserName: string;
  totalFundedPrice: number;
}

export interface FundingAdditionGraphProps {
  targetPrice: number;
  fundedPrice: number;
  totalFundedPrice: number;
}

export interface FundingAdditionDateProps {
  startDate: string;
  endDate: string;
}

export interface FundingAdditionToFromProps {
  targetUserName: string;
  //수정되야함
  targetUserImageUrl: string;
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