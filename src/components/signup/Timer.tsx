import React, { useState, useEffect } from "react";
import { IoReloadSharp } from "react-icons/io5";

import { emailSend } from "../../hooks/axios/Signup";
import { TimerProps } from "./Signup.interface";
import TimerModal from "./modal/TimerModal";

export function Timer({ timer, error, setError, email }: TimerProps) {
  const [minutes, setMinutes] = useState<number>(timer);
  const [seconds, setSeconds] = useState<number>(0);
  const [errorShow, setErrorShow] = useState(false);

  const onClickRetryHandler = async (time: number) => {
    let send = await emailSend(email, "signUp");
    if (send.status == 200) {
      setError("인증코드가 재발송 되었습니다.");
      setErrorShow(true);
      setMinutes(time);
    }
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
        <TimerModal errorShow={errorShow} setErrorShow={setErrorShow} error={error} />
      </div>
    );
  }
}
