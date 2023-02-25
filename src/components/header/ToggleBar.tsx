import { useEffect, useRef } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FaGithub, FaSchool } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

import ToggleContent from "./ToggleContent";
import ToggleContentNull from "./ToggleContentNull";
import { ToggleStateType } from "./Header.interface";

export default function ToggleBar({ tabState, setTabState, token }: ToggleStateType) {
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
                        {token ? <ToggleContent handleToggleMenu={handleToggleMenu} toggleClose={toggleClose} /> : <ToggleContentNull handleToggleMenu={handleToggleMenu} />}
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
