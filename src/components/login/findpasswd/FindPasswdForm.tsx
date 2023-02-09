import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FindPasswdError } from "../../../hooks/SignUpError";
import { Timer } from "./Timer";

export default function FindPasswdForm() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<number>(0);
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [showCodeInput, setShowCodeInput] = useState<boolean>(false);
  const [submitCode, setSubmitCode] = useState<boolean>(true);
  const [inputBlock, setInputBlock] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(3);


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
  const onCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCode(e.currentTarget.value);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(name);
    console.log(email);
    console.log(code);
    navigate("/");

  };

  return (
    <div className="findpasswd_Wrapper">
      <div className="findpasswd">
        <div>
          <h2>비밀번호 찾기</h2>
          <h3>이름과 이메일을 입력해주세요. 이메일로 인증코드가 전송됩니다.</h3>
        </div>
        <div className="findpasswd_content">
          <form target="blankifr" onSubmit={onSubmitHandler}>
            <div className="findpasswd_Form">
              <div>
                <label htmlFor="name">이름:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="이름"
                  className="findpasswd_Input_Box"
                  onChange={onNameChangeHandler}

                  readOnly={inputBlock}
                  required
                />
              </div>

              <div className="validate">
                <div>
                  <label htmlFor="email">이메일:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="이메일"
                    className="findpasswd_Input_Box"
                    onChange={onEmailChangeHandler}
                    readOnly={inputBlock}
                    required
                  />
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={onCodeSendHandler}
                  disabled={inputBlock}
                >
                  인증코드받기
                </button>
              </div>
              {showCodeInput && (
                <div className="code-input">
                  <div>
                    <label htmlFor="validationCode">인증코드 입력:</label>
                    <input
                      id="validationCode"
                      type="text"
                      placeholder="인증코드"
                      className="findpasswd_Input_Box"
                      onChange={onCodeChangeHandler}
                      required
                    />
                  </div>
                  <Timer time={timer} error={error} />
                </div>
              )}
            </div>
            <div className="findpasswd_Button">
              <div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={submitCode}
                >
                  인증코드확인
                </button>
              </div>
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
      <Modal show={errorShow} onHide={handleClose}>
        <Modal.Body>{FindPasswdError(error)}</Modal.Body>

        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
