export interface SearchFormProps {
  input: string;
  select: string;
  selected: string;
}

export interface FamousFriendObj {
  Userid: string;
  name: string;
  nickname: string;
  profileImage: string;
  famous: boolean;
  isfriend: boolean;
}

export interface SearchFriendsObj {
  Userid: string;
  email: string;
  name: string;
  nickname: string;
  profileImage: string;
  isfriend: boolean;
}

export interface SelectBoxProps {
  setShow: React.Dispatch<React.SetStateAction<string>>;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  selectRef: React.MutableRefObject<any>;
  show: string;
}