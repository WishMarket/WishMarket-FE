import React from "react";
import { GrGithub } from "react-icons/gr";

export default function GitLogin() {
  const git_URL: string = `https://github.com/login/oauth/authorize?client_id=04191b4833803f506ce4&scope=id,name,email,avatar_url`;

  return (
    <div>
      <a href={git_URL} className="Link_Wrapper">
        <button className="login_Button_Git" type="button">
          <div>
            <GrGithub className="Social_img_Git" />
            <span className="Social_Git">Sign with Github</span>
          </div>
        </button>
      </a>
    </div>
  );
}
