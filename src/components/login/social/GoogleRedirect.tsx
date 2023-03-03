import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetsocialLogin } from "../../../hooks/axios/Login";

export default function GoogleRedirect() {
  const navigate = useNavigate();
  let code = document.location.search;
  let google_code = 'google' + code;

  useEffect(() => {
    getSocialLogin();
  }, []);
  const getSocialLogin = async () => {
    try {
      const socialLogin = await GetsocialLogin(google_code);
      console.log(socialLogin);
      window.localStorage.setItem(
        "accessToken",
        socialLogin.config.data.accessToken
      );
      window.localStorage.setItem(
        "refreshToken",
        socialLogin.config.data.accessToken
      );
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <div>구글 소셜로그인 진행중 ...</div>;
}
