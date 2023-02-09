import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { SignUpError } from "../../hooks/SignUpError";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

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

  const onNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  const onNicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.currentTarget.value);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };

  const onLoginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== retypePassword) {
      setErrorCode(1);
      setErrorShow(true);
    } else if (password.length < 8) {
      setErrorCode(2);
      setErrorShow(true);
    } else {
      e.preventDefault();
      console.log(email);
      console.log(password);
      console.log(retypePassword);
      console.log(name);
      console.log(nickname);
      
      navigate('/');
    }
  };

  return (
    <div className="signup_Wrapper">
      <div className="signup">
        <div>
          <h2>Sign Up</h2>
          <h3>서비스를 이용하시려면 SignUp 해주세요.</h3>
        </div>
        <div className="signup_content">
          <form onSubmit={onLoginSubmitHandler} target="blankifr">
            <div className="signup_Form">
              <div>
                <label htmlFor="email">이메일:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="이메일"
                  className="signup_Input_Box"
                  onChange={onEmailChangeHandler}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">비밀번호:</label>
                <input
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  className="signup_Input_Box"
                  onChange={onPasswordChangeHandler}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="re-password">비밀번호확인:</label>
                <input
                  id="re-password"
                  type="password"
                  placeholder="비밀번호 확인"
                  className="signup_Input_Box"
                  onChange={onRetypePasswordChangeHandler}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">이름:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="이름"
                  className="signup_Input_Box"
                  onChange={onNameChangeHandler}
                  required
                />
              </div>
              <div>
                <label htmlFor="nickname">별명:</label>
                <input
                  id="nickname"
                  type="text"
                  placeholder="별명"
                  className="signup_Input_Box"
                  onChange={onNicknameChangeHandler}
                  required
                />
              </div>
            </div>
            <div className="signup_Button">
              <div>
                <button className="btn btn-primary" type="submit">
                  회원가입
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
        <Modal.Body>{SignUpError(errorCode)}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
