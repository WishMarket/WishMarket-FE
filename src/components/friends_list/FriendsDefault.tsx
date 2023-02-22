import { BsFillCaretLeftFill } from "react-icons/bs";

export default function FriendsDefault() {
    return (
        <>
            <div className="friends-list-right-bottom-area">
                <div className="friends-default-container">
                    <div className="friends-default-container-inner">
                        친구의 <span>위시리스트</span>와
                        <div>
                            진행 중인 <span className="particletext confetti">펀딩 내역</span>을 확인하세요.
                        </div>
                        <div className="friends-default-desc">
                            <BsFillCaretLeftFill className="friends-default-desc-icon" />
                            친구 목록을 클릭하면 리스트가 나옵니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
