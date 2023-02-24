import React from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SignupCodeProps } from '../Signup.interface';

export default function SignupCode({setCode,showInput }: SignupCodeProps) {
     const onCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
       e.preventDefault();
       setCode(e.currentTarget.value);
     };
    
  return (
    <div className="sign-up-form-container" style={{ display: `${showInput}` }}>
      <input
        id="text"
        type="text"
        placeholder="인증코드 입력"
        className="signup_Input_Box"
        onChange={onCodeChangeHandler}
        autoComplete="off"
        required
      />
      <MdOutlineMarkEmailRead className="Login_Icon" />
    </div>
  );
}
