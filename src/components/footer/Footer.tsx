import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export default function Footer() {
    return (
        <footer>
            <div className="Footer_Top_Area">
                <div className="Footer_Left">
                    <div className="Footer_Company_Title">PROJECT INFO</div>
                    <div className="Footer_Company_Desc">GIFT4U</div>
                    <div className="Footer_Company_Desc">@Frontend: 조혜준, 박주경</div>
                    <div className="Footer_Company_Desc">@Backend: 원세영, 김선범, 백동주, 고동우</div>
                </div>
                <div className="Footer_Right">
                    <div className="Footer_Etc">
                        <div className="Footer_Etc_Title">ETC</div>
                        <div className="Footer_Etc_Desc">공지사항</div>
                        <div className="Footer_Etc_Desc">이용약관</div>
                        <div className="Footer_Etc_Desc">개인정보처리방침</div>
                        <div className="Footer_Etc_Desc">FAQ</div>
                        <div className="Footer_Etc_Desc">환불규정</div>
                        <div className="Footer_Etc_Desc">채용</div>
                    </div>
                    <div className="Footer_Contact">
                        <div className="Footer_Contact_Title">CONTACT</div>
                        <div className="Footer_Contact_Desc">고객센터 : 00-000-0000</div>
                        <div className="Footer_Contact_Desc">- 오전 11시 ~ 저녁 6시까지 운영</div>
                        <div className="Footer_Contact_Desc">- 주말 및 공휴일, 점심시간(12:00~13:00) 제외</div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="Footer_Bottom_Area">
                <div className="Footer_Copyright">Copyright © 2023 (주)기프트포유. All rights reserved.</div>
                <div className="Footer_Icons">
                    <a href="https://github.com/WishMarket" target={"_blank"} rel="noopener noreferrer">
                        <FaGithub className="Footer_Github_Icon" />
                    </a>
                    <a href="https://www.notion.so/Gift4U-Gift-for-you-dc8c3ba1c8724c41b2a798699a92ac36" target={"_blank"} rel="noopener noreferrer">
                        <SiNotion className="Footer_Notion_Icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
