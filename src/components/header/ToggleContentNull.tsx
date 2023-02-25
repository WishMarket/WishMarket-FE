import React from "react";
import { Link } from "react-router-dom";
import { HandleToggleType } from "./Header.interface";

export default function ToggleContentNull({ handleToggleMenu, toggleClose }: HandleToggleType) {
    return (
        <div className="Toggle_Not_Users_Container">
            <div className="Toggle_Not_Users_Wrapper">
                <div className="Toggle_Login_Area">
                    <div className="Toggle_Login_Desc">Wish Market 회원이시라면</div>
                    <Link to={"/login"}>
                        <button type="button" className="btn btn-primary Toggle_Login_Btn" onClick={handleToggleMenu}>
                            로그인
                        </button>
                    </Link>
                </div>
                <div className="Toggle_Go_To_Sign_Up">
                    <div className="Toggle_Sign_Up_Desc">아직 회원이 아니신가요?</div>
                    <Link to={"/signup"}>
                        <button type="button" className="btn btn-warning Toggle_Sign_Up_Btn" onClick={handleToggleMenu}>
                            회원 가입
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
