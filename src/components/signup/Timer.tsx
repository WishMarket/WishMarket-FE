import React, { useState, useEffect } from "react";
import { IoReloadSharp } from "react-icons/io5";
import { Modal } from "react-bootstrap";
import { EmailCheckError } from "../../hooks/Errors";
import { emailSend } from "../../hooks/axios/Signup";

interface Props {
  timer: number;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}
export function Timer({ timer, error, setError, email }: Props) {
  const [minutes, setMinutes] = useState<number>(timer);
  const [seconds, setSeconds] = useState<number>(0);
  const [errorShow, setErrorShow] = useState(false);

  const onClickRetryHandler = async (time: number) => {
    let send = await emailSend(email);
    console.log(send);
    setError("인증코드가 재발송 되었습니다.");
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
            onClickRetryHandler(timer);
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
          <Modal.Body>{EmailCheckError(error)}</Modal.Body>
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
