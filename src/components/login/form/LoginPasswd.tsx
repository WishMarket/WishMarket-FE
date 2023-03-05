import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { LoginPasswdProps } from "../Login.interface";

export default function LoginPasswd({ setPassword }: LoginPasswdProps) {
  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };
  return (
    <div className="PW_Input_Container">
      <input
        id="password"
        type="password"
        placeholder="비밀번호"
        className="PW_Input_Box"
        onChange={onPasswordChangeHandler}
        autoComplete="off"
      />
      <RiLockPasswordLine className="PW_Icon" />
    </div>
  );
}
