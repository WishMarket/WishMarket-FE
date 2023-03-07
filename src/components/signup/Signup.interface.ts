export interface TimerProps {
  timer: number;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

export interface EmailCheckModalProps {
  setEmailCheckShow: React.Dispatch<React.SetStateAction<boolean>>;
  emailCheckShow: boolean;
  checkError: string;
}

export interface SignupModalProps {
  setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
  errorShow: boolean;
  errorCode: string;
}

export interface SignupCodeProps {
  setCode: React.Dispatch<React.SetStateAction<string>>;
  showInput: string;
}

export interface SignupEmailProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setBlockButton: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckError: React.Dispatch<React.SetStateAction<string>>;
  setShowInput: React.Dispatch<React.SetStateAction<string>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setEmailCheckShow: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  timer: number;
  blockButton: boolean;
}

export interface SignupNameProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export interface SignupNicknameProps {
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

export interface SignupPasswdProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setRetypePassword: React.Dispatch<React.SetStateAction<string>>;
}

export interface TimerModalProps{
  errorShow:boolean;
  setErrorShow:React.Dispatch<React.SetStateAction<boolean>>;
  error:string;
}