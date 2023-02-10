import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SignUpError } from "../../../hooks/SignUpError";
import { useRecoilValue } from "recoil";
import { EmailSet } from "../../../hooks/recoil/atoms";

export default function ChangePasswdForm() {
  const email = useRecoilValue(EmailSet);
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [buttonBlock, setButtonBlock] = useState<boolean>(true);
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [error, setError] = useState<number>(1);
  
  useEffect(() => {
    if (password.length > 7 && retypePassword.length > 7) {
      setButtonBlock(false);
    } else {
      setButtonBlock(true);
    }
  }, [password, retypePassword]);

  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };
  const onRetypePasswordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setRetypePassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== retypePassword) {
      setError(1);
      setErrorShow(true);
    } else {
       console.log(password);
       console.log(retypePassword);
       navigate("/");
    }
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };

  return (
    <div className="changepasswd_Wrapper">
      <div className="changepasswd">
        <div>
          <h2>비밀번호 변경</h2>
          <h3>비밀번호는 8글자 이상 숫자와 문자만 가능합니다.</h3>
        </div>
        <div className="changepasswd_content">
          <form target="blankifr" onSubmit={onSubmitHandler}>
            <div className="changepasswd_Form">
              <div className="changeEmail_Form">
                <div>이메일:</div>
                <span>{email}</span>
              </div>
              <div>
                <label htmlFor="password">비밀번호:</label>
                <input
                  id="password"
                  type="password"
                  placeholder="이름"
                  className="changepasswd_Input_Box"
                  onChange={onPasswordChangeHandler}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="validate">
                <div>
                  <label htmlFor="retypePassword">비밀번호확인:</label>
                  <input
                    id="retypePassword"
                    type="password"
                    placeholder="이메일"
                    className="changepasswd_Input_Box"
                    onChange={onRetypePasswordChangeHandler}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="changepasswd_Button">
              <div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={buttonBlock}
                >
                  제출하기
                </button>
              </div>
            </div>
          </form>
        </div>
        <Modal show={errorShow} onHide={handleClose}>
          <Modal.Body>{SignUpError(error)}</Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleClose}>
              닫기
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <iframe
        name="blankifr"
        style={{
          display: "none",
        }}
      ></iframe>
    </div>
  );
}
