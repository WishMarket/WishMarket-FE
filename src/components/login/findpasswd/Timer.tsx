import React, { useState, useEffect } from "react";
import { IoReloadSharp } from "react-icons/io5";
import { Modal } from "react-bootstrap";
import { FindPasswdError } from "../../../hooks/SignUpError";

interface Props {
    time: number;
    error: number;
}
export function Timer(props: Props) {
    const [minutes, setMinutes] = useState<number>(props.time);
    const [seconds, setSeconds] = useState<number>(0);
    const [errorShow, setErrorShow] = useState(false);

    const onClickRetryHandler = (time: number) => {
        setErrorShow(true);
        setMinutes(time);
    };
    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
        setErrorShow(false);
    };
    useEffect(() => {
        const countdown = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    if (minutes == 0 && seconds == 0) {
        return (
            <div className="count">
                <button
                    className="reload_Button btn btn-warning"
                    type="button"
                    onClick={() => {
                        onClickRetryHandler(props.time);
                    }}
                >
                    <IoReloadSharp />
                </button>
                <h2 className="counter_end">인증 시간이 초과되었습니다.</h2>
            </div>
        );
    } else {
        return (
            <div>
                <div className="count">
                    <h2 className="counter">
                        인증 코드 만료: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </h2>
                </div>
                <Modal show={errorShow} onHide={handleClose}>
                    <Modal.Body>{FindPasswdError(props.error)}</Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={handleClose}>
                            닫기
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
