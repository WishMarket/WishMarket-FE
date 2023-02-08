import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DaumPostCode from "react-daum-postcode";
import { FaSearchLocation } from "react-icons/fa";

interface AddressData {
  address: string;
}
export default function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [detailaddr, setDetailaddr] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [mapShow, setMapShow] = useState<boolean>(false);
  //   const [errorShow, setErrorShow] = useState<boolean>(false);

    const onUploadImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }
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

  const onAddressChangeHandler = (data: AddressData) => {
    setAddress(data.address);
    setMapShow(false);
  };
  const onMapClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMapShow(true);
  };

  const onDetailaddressChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setDetailaddr(address + " " + e.currentTarget.value);
  };

  const onPhonenumChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPhonenumber(e.currentTarget.value);
  };

  const onLoginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== retypePassword) {
      //   setErrorShow(true);
      alert("비밀번호 재입력이 일치하지 않습니다.");
    } else if (password.length < 8) {
      alert("비밀번호는 8글자 이상이어야 합니다.");
    } else if (
      email == "" ||
      password == "" ||
      retypePassword == "" ||
      name == "" ||
      nickname == "" ||
      detailaddr == "" ||
      phonenumber == ""
    ) {
      alert("작성하지 않은 항목이 있습니다.");
    } else {
      e.preventDefault();
      console.log(email);
      console.log(password);
      console.log(retypePassword);
      console.log(name);
      console.log(nickname);
      console.log(detailaddr);
      console.log(phonenumber);
    }
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setMapShow(false);
  };
  return (
    <div className="signup_Wrapper">
      <div className="signup">
        <div>
          <h2>Sign Up</h2>
          <h3>서비스를 이용하시려면 SignUp 해주세요.</h3>
        </div>
        <div className="signup_content">
          <form onSubmit={onLoginSubmitHandler}>
            <div className="signup_Form">
              <div>
                <label htmlFor="picture">프로필사진:</label>
                <input
                  id="picture"
                  type="file"
                  className="signup_Input_Box"
                  onChange={onUploadImageHandler}
                />
              </div>
              <div>
                <label htmlFor="email">이메일:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="이메일"
                  className="signup_Input_Box"
                  onChange={onEmailChangeHandler}
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
                />
              </div>
              <div>
                <div>
                  <label htmlFor="address">주소:</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="주소"
                    className="signup_Input_Box"
                    value={address}
                    readOnly
                  />
                  <button className="btn btn-light" onClick={onMapClickHandler}>
                    <FaSearchLocation />
                  </button>
                </div>
                <input
                  id="Detailaddress"
                  type="text"
                  placeholder="상세 주소 입력"
                  className="signup_Input_Box"
                  onChange={onDetailaddressChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="phone">연락처:</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="전화번호"
                  className="signup_Input_Box"
                  onChange={onPhonenumChangeHandler}
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
      {/* 모달로 에러 띄우기  
      <Modal show={errorShow} onHide={handleClose}>
        <Modal.Body>
          두비밀번호가 일치하지 않습니다.
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
          </Modal> */}

      <Modal show={mapShow} onHide={handleClose}>
        <Modal.Body>
          <DaumPostCode autoClose={false} onComplete={onAddressChangeHandler} />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
