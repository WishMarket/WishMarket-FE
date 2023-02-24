import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { EmailSet } from "../../hooks/recoil/atoms";
import { AiOutlineMail } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import FindPasswdModal from "./FindPasswdModal";
import CodeForm from "./CodeForm";
import { codeCheck, emailSend } from "../../hooks/axios/FindPasswd";
export default function FindPasswdForm() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useRecoilState<string>(EmailSet);
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [showCodeInput, setShowCodeInput] = useState<boolean>(false);
  const [submitCode, setSubmitCode] = useState<boolean>(true);
  const [inputBlock, setInputBlock] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(5);

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

  const onCodeSendHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name == "" || email == "") {
      setError("빈 항목이 있습니다.");
    } else {
      const send = await emailSend(email, "passwordChange");
      console.log(send);
      console.log(send.status);
      if (send.status == 400) {
        setError(send.data.message);
      } else if(send.status){
        setInputBlock(true);
        setShowCodeInput(true);
        setSubmitCode(false);
        setError(send.data.message);
        console.log(name);
        console.log(email);
        setTimer(timer);
      }
    }
      setErrorShow(true);
    };

  const onSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const check = await codeCheck(name, email, code);
    if (check.status == 400) {
      setError(check.data.message);
      setErrorShow(true);
    } else {
      console.log(email);
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
