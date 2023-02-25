import React from 'react'
import { SlPeople } from "react-icons/sl";
import { SignupNicknameProps } from '../Signup.interface';

export default function SignupNickname({ setNickname }: SignupNicknameProps) {
  const onNicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.currentTarget.value);
  };
  return (
    <div className="sign-up-form-container">
      <input
        id="nickname"
        type="text"
        placeholder="닉네임"
        className="signup_Input_Box"
        onChange={onNicknameChangeHandler}
        required
      />
      <SlPeople className="name-icon" />
    </div>
  );
}
