import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requestLogin } from "../../hooks/axios/Login";
import LoginModal from "./LoginModal";
import GoogleLogin from "./social/GoogleLogin";
import NaverLogin from "./social/NaverLogin";
import LoginEmail from "./form/LoginEmail";
import LoginPasswd from "./form/LoginPasswd";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);
  
  const onLoginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let result = await requestLogin(email, password);
      window.localStorage.setItem("accessToken", result.accessToken);
      window.localStorage.setItem("refreshToken", result.refreshToken);
      console.log(result);
      navigate("/");
    } catch (e) {
      if (e == 400) {
        setErrorCode(400);
      }
      setErrorShow(true);
    }
  };

  return (
    <div className="login_Wrapper main">
      <div className="login">
        <div>
          <h2>Login</h2>
          <div className="login-desc">
            서비스를 이용하시려면 로그인 해 주세요.
          </div>
        </div>
        <div className="login_content">
          <form
            onSubmit={onLoginSubmitHandler}
            className="login-form-container"
          >
            <div className="login_Form">
              <LoginEmail setEmail={setEmail} />
              <LoginPasswd setPassword={setPassword} />
            </div>
            <div className="login_Button">
              <div>
                <button className="btn btn-warning" type="submit">
                  이메일로 로그인
                </button>
              </div>
              <NaverLogin />
              <GoogleLogin />
            </div>
          </form>
          <div className="login_Link">
            <div className="go-to-sign-up">
              <div className="sign-desc">아직 계정이 없으신가요?</div>
              <Link to={"/signup"}>
                <span>회원가입</span>
              </Link>
            </div>
            <div className="go-to-find-pw">
              <div className="find-pw-desc">비밀번호를 분실하셨나요?</div>
              <Link to={"/login/findpasswd"}>
                <span className="link_findPassword">비밀번호 찾기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LoginModal
        setErrorShow={setErrorShow}
        errorShow={errorShow}
        errorCode={errorCode}
      />
    </div>
  );
}
