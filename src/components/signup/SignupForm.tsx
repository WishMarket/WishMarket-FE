import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import SignupModal from "./SignupModal";
import EmailCheckModal from "./EmailCheckModal";
import { emailSend, requestSignup } from "../../hooks/axios/Signup";
import { Timer } from "./Timer";

export default function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [showInput, setShowInput] = useState<string>("none");
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<string>("");
  const [blockButton, setBlockButton] = useState<boolean>(true);
  const [emailCheckShow, setEmailCheckShow] = useState<boolean>(false);
  const [checkError, setCheckError] = useState<string>("");
  const [timer, setTimer] = useState<number>(5);
  const [timeover, setTimeover] = useState<boolean>(false);

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const onEmailSendHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const send = await emailSend(email);
    if (send.status == 400) {
      setBlockButton(true);
      setCheckError(send.data.message);
    } else if (send.status == 200) {
      setBlockButton(false);
      setShowInput("block");
      setCheckError(send.data.message);
    }
    setEmailCheckShow(true);
  };

  const onCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCode(e.currentTarget.value);
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

  const onSignupSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (retypePassword ==password) {
          let result = await requestSignup(email, password, name, nickname, code);
        
          if (result.data.name != undefined) {
              alert("회원가입 성공");
              navigate("/");
          } else {
              setErrorCode(result.data.message);
              setErrorShow(true);
          }
    } else {
        setErrorCode("비밀번호와 비밀번호확인이 일치하지 않습니다.")
        setErrorShow(true);
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
                  onClick={onEmailSendHandler}
                  disabled={!blockButton}
                >
                  이메일 인증
                </button>
              </div>
              <div
                className="sign-up-form-container"
                style={{ display: `${showInput}` }}
              >
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
              <div
                className="signup-timer-wrapper "
                style={{
                  display: `${showInput}`,
                }}
              >
                <Timer
                  timer={timer}
                  error={errorCode}
                  setTimeover={setTimeover}
                  setError={setErrorCode}
                  email={email}
                />
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
