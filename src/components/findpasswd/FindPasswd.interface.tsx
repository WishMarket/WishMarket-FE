export interface FindPasswdTimerModalProps {
  errorShow: boolean;
  setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
}

export interface FindPasswdModalProps {
  errorShow: boolean;
  error: string;
  setErrorShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TimerProps {
  timer: number;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

export interface CodeFormProps {
  setCode: React.Dispatch<React.SetStateAction<string>>;
  timer: number;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}
