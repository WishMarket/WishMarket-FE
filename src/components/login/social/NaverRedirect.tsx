import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetsocialLogin } from "../../../hooks/axios/Login";

export default function NaverRedirect() {
  const navigate = useNavigate();

  let code = document.location.search;
  let naver_code ='naver'+code;

  useEffect(() => {
    getSocialLogin();
  }, []);

  const getSocialLogin = async () => {
    try {
      const socialLogin = await GetsocialLogin(naver_code);
      console.log(socialLogin);
      if (socialLogin.status == 200) {
        window.localStorage.setItem('accessToken',socialLogin.data.accessToken);
        window.localStorage.setItem(
          "accessTokenExpiredAt",
          socialLogin.data.accessTokenExpiredAt
        );
        window.localStorage.setItem('refreshToken',socialLogin.data.refreshToken);
        window.localStorage.setItem(
          "refreshTokenExpiredAt",
          socialLogin.data.refreshTokenExpiredAt
        );
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <div>네이버 소셜로그인 진행중 ...</div>;
}
