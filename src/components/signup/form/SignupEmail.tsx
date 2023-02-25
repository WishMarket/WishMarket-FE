import React from "react";
import { emailSend } from "../../../hooks/axios/Signup";
import { AiOutlineMail } from "react-icons/ai";
import { SignupEmailProps } from "../Signup.interface";

export default function SignupEmail({
  setEmail,
  setBlockButton,
  setCheckError,
  setShowInput,
  setTimer,
  setEmailCheckShow,
  email,
  timer,
  blockButton,
}: SignupEmailProps) {
  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const onEmailSendHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const send = await emailSend(email, "signUp");
    if (send.status == 400) {
      setBlockButton(true);
      setCheckError(send.data.message);
    } else if (send.status == 200) {
      setBlockButton(false);
      setShowInput("block");
      setTimer(timer);
      setCheckError(send.data.message);
    }
    setEmailCheckShow(true);
  };

  return (
    <div className="sign-up-form-container">
      <input
        id="email"
        type="email"
        placeholder="이메일"
        className="signup_Input_Box email-check"
        onChange={onEmailChangeHandler}
        required
        readOnly={!blockButton}
      />
      <AiOutlineMail className="Login_Icon" />
      <button
        className="sign-up-check-btn"
        type="button"
        onClick={onEmailSendHandler}
        disabled={!blockButton}
      >
        이메일 인증
      </button>
    </div>
  );
}
