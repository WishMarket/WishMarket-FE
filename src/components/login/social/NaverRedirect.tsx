import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetsocialLogin } from "../../../hooks/axios/Login";
import { SetAccessToken, SetRefreshToken } from "../../../hooks/Tokens";

export default function NaverRedirect() {
  const navigate = useNavigate();

  let code = document.location.search;
  let naver_code = "naver" + code;

  useEffect(() => {
    getSocialLogin();
  }, []);

  const getSocialLogin = async () => {
    try {
      const socialLogin = await GetsocialLogin(naver_code);
      console.log(socialLogin);
      if (socialLogin.status == 200) {
        SetAccessToken(
          socialLogin.data.accessToken,
          socialLogin.data.accessTokenExpiredAt
        );
        SetRefreshToken(
          socialLogin.data.refreshToken,
          socialLogin.data.refreshTokenExpiredAt
        );
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <div>네이버 소셜로그인 진행중 ...</div>;
}
