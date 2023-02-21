import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import SignupModal from "./SignupModal";
import EmailCheckModal from "./EmailCheckModal";

export default function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [blockButton, setBlockButton] = useState<boolean>(true);
  const [emailCheckShow, setEmailCheckShow] = useState<boolean>(false);
  const [checkError, setCheckError] = useState<number>(1);

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };
  const onEmailCheckHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    let regExp =
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    //중복된 이메일없으면
    if (email == "abcd1@naver.com") {
      setCheckError(1);
      setBlockButton(true);
    } else if (!email.match(regExp)) {
      setCheckError(2);
      setBlockButton(true);
    } else if (email == "") {
      setCheckError(3);
      setBlockButton(true);
    } else {
      console.log(email);
      setCheckError(0);
      setBlockButton(false);
    }
    setEmailCheckShow(true);
  };

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

  const onNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  const onNicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.currentTarget.value);
  };

  const onSignupSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(errorShow);
    console.log(errorCode);
    if (password !== retypePassword) {
      setErrorCode(1);
      setErrorShow(true);
    } else if (password.length < 8) {
      setErrorCode(2);
      setErrorShow(true);
    } else {
      e.preventDefault();
      console.log(email);
      console.log(password);
      console.log(retypePassword);
      console.log(name);
      console.log(nickname);

      navigate("/");
    }
  };

  return (
    <div className="signup_Wrapper main">
      <div className="signup">
        <div>
          <h2>Sign Up</h2>
          <h3>위시마켓의 모든 서비스를 이용하시려면 회원 가입하세요.</h3>
        </div>
        <div className="signup_content">
          <form
            onSubmit={onSignupSubmitHandler}
            target="blankifr"
            className="signup-form-container"
          >
            <div className="signup_Form">
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
                  onClick={onEmailCheckHandler}
                  disabled={!blockButton}
                >
                  중복 확인
                </button>
              </div>
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
              <div className="signup_Button">
                <button
                  className="btn btn-warning"
                  type="submit"
                  disabled={blockButton}
                >
                  회원가입
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <iframe
        name="blankifr"
        style={{
          display: "none",
        }}
      ></iframe>
      <SignupModal
        setErrorShow={setErrorShow}
        errorShow={errorShow}
        errorCode={errorCode}
      />
      <EmailCheckModal
        setEmailCheckShow={setEmailCheckShow}
        emailCheckShow={emailCheckShow}
        checkError={checkError}
      />
    </div>
  );
}
