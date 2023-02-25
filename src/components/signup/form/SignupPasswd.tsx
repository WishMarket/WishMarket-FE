import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { SignupPasswdProps } from "../Signup.interface";

export default function SignupPasswd({ setPassword, setRetypePassword }: SignupPasswdProps) {
  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };

  const onRetypePasswordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setRetypePassword(e.currentTarget.value);
  };
  return (
    <>
      <div className="sign-up-form-container">
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          className="signup_Input_Box"
          onChange={onPasswordChangeHandler}
          autoComplete="off"
          required
        />
        <RiLockPasswordLine className="PW_Icon" />
      </div>
      <div className="sign-up-form-container">
        <input
          id="re-password"
          type="password"
          placeholder="비밀번호 확인"
          className="signup_Input_Box"
          onChange={onRetypePasswordChangeHandler}
          autoComplete="off"
          required
        />
        <RiLockPasswordLine className="PW_Icon" />
      </div>
    </>
  );
}
