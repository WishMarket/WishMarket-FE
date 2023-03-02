import React from "react";
import { SiNaver } from "react-icons/si";

export default function NaverLogin() {
  const Naver_URL: string = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=Ct6edWRNKoFfVMxlk6h6&redirect_uri=http://localhost:5173/login/oauth2/code/naver`;

  return (
    <div>
      <a href={Naver_URL} className="Link_Wrapper">
        <button className="Login_Button_Naver" type="button">
          <SiNaver className="Social_img_Naver" />
          <span>네이버 계정으로 로그인</span>
        </button>
      </a>
    </div>
  );
}
