import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  const Google_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const google_URL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Google_KEY}&response_type=token&redirect_uri=http://localhost:5173/login/google/redirect&scope=https://www.googleapis.com/auth/userinfo.email`;

  return (
    <div>
      <a href={google_URL} className="Link_Wrapper">
        <button
          className="login_Button_Google"
          type="button"
        >
          <div>
            <FcGoogle className="Social_img_Google" />
            <span className="Social_Google">Sign with Google</span>
          </div>
        </button>
      </a>
    </div>
  );
}
