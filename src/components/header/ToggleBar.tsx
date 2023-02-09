import { useEffect, useRef } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FaGithub, FaSchool } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import defaultProfileImg from "../../assets/default-profile-img.png";

interface ToggleBtnType {
    tabState: boolean;
    setTabState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToggleBar({ tabState, setTabState }: ToggleBtnType) {
    const toggleRef = useRef<any>();

    useEffect(() => {
        document.addEventListener("mousedown", toggleClose);
        return () => {
            document.removeEventListener("mousedown", toggleClose);
        };
    });

    const toggleClose = (e: any) => {
        const toggleMenu = document.querySelector("#Toggle_Bar") as HTMLElement;
        if (!toggleRef.current.contains(e.target) && toggleMenu.classList.contains("on")) {
            setTabState(!tabState);
            toggleMenu.classList.add("off");
            toggleMenu.classList.remove("on");
            document.body.style.overflow = "unset";
        }
    };

    const handleToggleMenu = () => {
        const toggleMenu = document.querySelector("#Toggle_Bar") as HTMLElement;
        setTabState(!tabState);
        toggleMenu.classList.add("off");
        toggleMenu.classList.remove("on");
        document.body.style.overflow = "unset";
    };

    return (
        <>
            <nav id="Toggle_Bar" ref={toggleRef}>
                <div className="Toggle_Close_Btn" onClick={handleToggleMenu}>
                    ✖
                </div>
                <div className="Toggle_Bar_Container">
                    <div className="Toggle_Bar_Wrapper">
                        {/* 로그인 O */}
                        {/* <div className="Toggle_User_Info">
                            <div className="Toggle_User_Img">
                                <img src={defaultProfileImg} alt="Profile" className="Toggle_User_Profile" />
                            </div>
                            <div className="Toggle_User_Welcome">user.nickname 님, 안녕하세요!</div>

                            <div className="Toggle_User_Point">
                                보유 포인트: <span>user.pointPrice</span>P
                            </div>
                            <div className="Toggle_Btn_Area">
                                <a href="/">
                                    <button type="button" className="btn btn-primary Toggle_User_Modify_Btn">
                                        정보 변경
                                    </button>
                                </a>
                                <a href="/">
                                    <button type="button" className="btn Toggle_Logout_Btn">
                                        로그아웃
                                    </button>
                                </a>
                            </div>
                        </div> */}
                        {/* 로그인 O */}

                        {/* 로그인 X */}
                        <div className="Toggle_Not_Users_Container">
                            <div className="Toggle_Not_Users_Wrapper">
                                <div className="Toggle_Login_Area">
                                    <div className="Toggle_Login_Desc">Wish Market 회원이시라면</div>
                                    <a href="/">
                                        <button type="button" className="btn btn-primary Toggle_Login_Btn">
                                            로그인
                                        </button>
                                    </a>
                                </div>
                                <div className="Toggle_Go_To_Sign_Up">
                                    <div className="Toggle_Sign_Up_Desc">아직 회원이 아니신가요?</div>
                                    <a href="/">
                                        <button type="button" className="btn btn-success Toggle_Sign_Up_Btn">
                                            회원 가입
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* 로그인 X */}

                        <hr className="Toggle_Divide_Bar" />
                        <div className="Project_Info">
                            <div className="Project_Info_Title">Wish Market © GIFT4U</div>
                            <div className="Project_Info_Desc">
                                <a href="https://github.com/WishMarket" target={"_blank"} rel="noopener noreferrer">
                                    <FaGithub className="Github_Icon" />
                                </a>
                                <a href="https://www.notion.so/Gift4U-Gift-for-you-dc8c3ba1c8724c41b2a798699a92ac36" target={"_blank"} rel="noopener noreferrer">
                                    <SiNotion className="Notion_Icon" />
                                </a>
                                <a href="https://zero-base.co.kr/" target={"_blank"} rel="noopener noreferrer">
                                    <FaSchool className="Zb_Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
