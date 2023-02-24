import React from 'react'
import { Timer } from "./Timer";
import { BsPatchCheck } from "react-icons/bs";

interface Props {
  setCode: React.Dispatch<React.SetStateAction<string>>;
  timer: number;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  email:string
}
export default function CodeForm({ setCode, timer, error,setError,email }:Props) {
    const onCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setCode(e.currentTarget.value);
    };
  return (
    <>
      <div className="code-input">
        <div className="code-form-container">
          <input
            id="validationCode"
            type="text"
            placeholder="인증 코드 입력"
            className="findpasswd_Input_Box"
            onChange={onCodeChangeHandler}
            required
          />
          <BsPatchCheck className="findpasswd-code-icon" />
        </div>
      </div>
      <div className="timer-wrapper">
        <Timer
          timer={timer}
          error={error}
          setError={setError}
          email={email}
        />
      </div>
    </>
  );
}
