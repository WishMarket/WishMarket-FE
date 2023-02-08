import React, { useState } from "react";
import { Link } from "react-router-dom";
import Naver_Btn from "../../assets/Naver_Btn.png";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };

  const onLoginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div className="login_Wrapper">
      <div className="login">
        <div>
          <h2>Login</h2>
          <h3>서비스를 이용하시려면 Login 해주세요.</h3>
        </div>
        <div className="login_content">
          <form onSubmit={onLoginSubmitHandler}>
            <div className="login_Form">
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="이메일"
                  className="login_Input_Box"
                  onChange={onEmailChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  className="login_Input_Box"
                  onChange={onPasswordChangeHandler}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="login_Button">
              <div>
                <button className="btn btn-primary" type="submit">
                  로그인 하기
                </button>
              </div>

              <div>
                <button
                  className="btn btn-success login_Button_Social"
                  type="button"
                >
                  <div>
                    <img src={Naver_Btn} className="Social_img_Naver" />
                    <span> 네이버 로그인</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className="btn btn-light login_Button_Social"
                  type="button"
                >
                  <div>
                    <span>
                      <FcGoogle className="Social_img_Google" />
                    </span>
                    <span className="Social_Google"> Sign with Google</span>
                  </div>
                </button>
              </div>
            </div>
          </form>
          <div className="login_Link">
            <Link to={"/signup"}>
              <span>회원가입</span>
            </Link>
            <Link to={"/"}>
              <span className="link_findPassword">비밀번호 찾기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
