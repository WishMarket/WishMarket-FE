import React from "react";
import { SlPeople } from "react-icons/sl";
import { SignupNameProps } from "../Signup.interface";

export default function SignupName({ setName }: SignupNameProps) {
  const onNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };
  return (
    <div className="sign-up-form-container">
      <input
        id="name"
        type="text"
        placeholder="이름"
        className="signup_Input_Box"
        onChange={onNameChangeHandler}
        required
      />
      <SlPeople className="name-icon" />
    </div>
  );
}
