export interface SearchFormProps {
  input: string;
  select: string;
  selected: string;
  friend: SearchFriendsObj[];
}

export interface FamousFriendObj {
  userid: number;
  name: string;
  nickname: string;
  profileImage: string;
  famous: boolean;
  isfriend: boolean;
}

export interface SearchFriendsObj {
  email: string;
  isFriend: boolean;
  name: string;
  nickName: string;
  profileImageUrl: string;
  userId: number;
}

export interface SelectBoxProps {
  setShow: React.Dispatch<React.SetStateAction<string>>;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  selectRef: React.MutableRefObject<any>;
  show: string;
}