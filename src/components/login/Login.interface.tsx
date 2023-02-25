export interface LoginModalProps {
  setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
  errorShow: boolean;
  errorCode: number;
}

export interface LoginEmailProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoginPasswdProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}