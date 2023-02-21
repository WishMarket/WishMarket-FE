import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { EmailSet } from "../../hooks/recoil/atoms";
import { AiOutlineMail } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import FindPasswdModal from "./FindPasswdModal";
import CodeForm from "./CodeForm";

export default function FindPasswdForm() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useRecoilState<string>(EmailSet);
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<number>(0);
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [showCodeInput, setShowCodeInput] = useState<boolean>(false);
  const [submitCode, setSubmitCode] = useState<boolean>(true);
  const [inputBlock, setInputBlock] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(3);
  const [timeover, setTimeover] = useState<boolean>(false);

  useEffect(() => {
    if (code.length == 6) {
      setSubmitCode(false);
    } else {
      setSubmitCode(true);
    }
  }, [code]);

  const onNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };
  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const onCodeSendHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name == "" || email == "") {
      setError(1);
    } else {
      setInputBlock(true);
      setError(0);
      setShowCodeInput(true);
      console.log(name);
      console.log(email);
      setTimer(timer);
    }
    setErrorShow(true);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (timeover == true) {
      setError(3);
      setErrorShow(true);
    } else {
      console.log(name);
      console.log(code);
      navigate("./changepasswd");
    }
  };

  return (
    <div className="findpasswd_Wrapper main">
      <div className="findpasswd">
        <div>
          <h2>비밀번호 찾기</h2>
          <h3>이름과 이메일을 입력해주세요. 이메일로 인증코드가 전송됩니다.</h3>
        </div>
        <div className="findpasswd_content">
          <form
            target="blankifr"
            onSubmit={onSubmitHandler}
            className="find-pw-form-container"
          >
            <div className="findpasswd_Form">
              <div>
                <div className="name-form-container">
                  <input
                    id="name"
                    type="text"
                    placeholder="이름"
                    className="findpasswd_Input_Box"
                    onChange={onNameChangeHandler}
                    readOnly={inputBlock}
                    required
                  />
                  <SlPeople className="findpasswd-name-icon" />
                </div>
              </div>
              <div className="validate">
                <div className="email-form-container">
                  <input
                    id="email"
                    type="email"
                    placeholder="이메일"
                    className="findpasswd_Input_Box"
                    onChange={onEmailChangeHandler}
                    readOnly={inputBlock}
                    required
                  />
                  <AiOutlineMail className="findpasswd-email-icon" />
                  <button
                    className="findpasswd-validate-btn"
                    type="button"
                    onClick={onCodeSendHandler}
                    disabled={inputBlock}
                  >
                    인증 코드 발송
                  </button>
                </div>
              </div>
              {showCodeInput && (
                <CodeForm
                  setCode={setCode}
                  timer={timer}
                  error={error}
                  setTimeover={setTimeover}
                  setError={setError}
                />
              )}
            </div>
            <div className="findpasswd_Button">
              <button
                className="btn btn-warning"
                type="submit"
                disabled={submitCode}
              >
                인증 코드 확인
              </button>
            </div>
          </form>
        </div>
      </div>
      <iframe
        name="blankifr"
        style={{
          display: "none",
        }}
      ></iframe>
      <FindPasswdModal
        errorShow={errorShow}
        error={error}
        setErrorShow={setErrorShow}
      />
    </div>
  );
}
