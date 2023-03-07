import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetsocialLogin } from "../../../hooks/axios/Login";
import { SetAccessToken, SetRefreshToken } from "../../../hooks/Tokens";

export default function GitRedirect() {
  const navigate = useNavigate();
  let code = document.location.search;
  let git_code = "github" + code;

  useEffect(() => {
    getSocialLogin();
  }, []);

  const getSocialLogin = async () => {
    try {
      const socialLogin = await GetsocialLogin(git_code);
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
    }
  };
  return <div>Github 소셜로그인 진행중 ...</div>;
}
