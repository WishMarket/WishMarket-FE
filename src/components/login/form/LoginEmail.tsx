import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { LoginEmailProps } from '../Login.interface';

export default function LoginEmail({setEmail}:LoginEmailProps) {
    const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setEmail(e.currentTarget.value);
    };
    return (
    <div className="Login_Input_Container">
      <input
        id="email"
        type="email"
        placeholder="이메일"
        className="login_Input_Box"
        onChange={onEmailChangeHandler}
      />
      <AiOutlineMail className="Login_Icon" />
    </div>
  );
}
