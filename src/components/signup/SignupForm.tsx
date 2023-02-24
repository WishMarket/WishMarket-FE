import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupModal from "./modal/SignupModal";
import { requestSignup } from "../../hooks/axios/Signup";
import { Timer } from "./Timer";
import EmailCheckModal from "./modal/EmailCheckModal";
import SignupEmail from "./form/SignupEmail";
import SignupCode from "./form/SignupCode";
import SignupPasswd from "./form/SignupPasswd";
import SignupName from "./form/SignupName";
import SignupNickname from "./form/SignupNickname";

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

  const onSignupSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (retypePassword == password) {
      let result = await requestSignup(email, password, name, nickname, code);

      if (result.data.name != undefined) {
        alert("회원가입 성공");
        navigate("/");
      } else {
        setErrorCode(result.data.message);
        setErrorShow(true);
      }
    } else {
      setErrorCode("비밀번호와 비밀번호확인이 일치하지 않습니다.");
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
              <SignupEmail
                setEmail={setEmail}
                setBlockButton={setBlockButton}
                setCheckError={setCheckError}
                setShowInput={setShowInput}
                setTimer={setTimer}
                setEmailCheckShow={setEmailCheckShow}
                email={email}
                timer={timer}
                blockButton={blockButton}
              />
              <SignupCode setCode={setCode} showInput={showInput} />
              <div
                className="signup-timer-wrapper "
                style={{
                  display: `${showInput}`,
                }}
              >
                <Timer
                  timer={timer}
                  error={errorCode}
                  setError={setErrorCode}
                  email={email}
                />
              </div>
              <SignupPasswd setPassword={setPassword} setRetypePassword={setRetypePassword} />
              <SignupName setName={setName}/>
              <SignupNickname setNickname={setNickname}/>
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
