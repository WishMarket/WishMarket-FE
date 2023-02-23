import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { requestLogin } from "../../hooks/axios/Login";
import LoginModal from "./LoginModal";

export default function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorShow, setErrorShow] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<number>(0);

    const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.currentTarget.value);
    };

    const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.currentTarget.value);
    };

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
                    <div className="login-desc">서비스를 이용하시려면 로그인 해 주세요.</div>
                </div>
                <div className="login_content">
                    <form onSubmit={onLoginSubmitHandler} className="login-form-container">
                        <div className="login_Form">
                            <div className="Login_Input_Container">
                                <input id="email" type="email" placeholder="이메일" className="login_Input_Box" onChange={onEmailChangeHandler} />
                                <AiOutlineMail className="Login_Icon" />
                            </div>
                            <div className="PW_Input_Container">
                                <input id="password" type="password" placeholder="비밀번호" className="PW_Input_Box" onChange={onPasswordChangeHandler} autoComplete="off" />
                                <RiLockPasswordLine className="PW_Icon" />
                            </div>
                        </div>
                        <div className="login_Button">
                            <div>
                                <button className="btn btn-warning" type="submit">
                                    이메일로 로그인
                                </button>
                            </div>
                            <div>
                                <button className="Login_Button_Naver" type="button">
                                    <SiNaver className="Social_img_Naver" />
                                    <span>네이버 계정으로 로그인</span>
                                </button>
                            </div>
                            <div>
                                <button className="login_Button_Google" type="button">
                                    <div>
                                        <FcGoogle className="Social_img_Google" />
                                        <span className="Social_Google">Sign with Google</span>
                                    </div>
                                </button>
                            </div>
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
            <LoginModal setErrorShow={setErrorShow} errorShow={errorShow} errorCode={errorCode} />
        </div>
    );
}
