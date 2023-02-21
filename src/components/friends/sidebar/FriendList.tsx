import React,{useState} from "react";
import { MdCancel } from "react-icons/md"
import { Modal } from "react-bootstrap";
import { FriendsError } from "../../../hooks/Errors";
interface Props {
  name: string;
  nickname: string;
  image: string;
}
export default function FriendList(props: Props) {
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(1);

    const DelateFriendHandler = (
      e: React.MouseEvent<HTMLButtonElement>
    ) => {
      setErrorShow(true);
      setErrorCode(1);
      console.log(props.name)
    };
  
   const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
     setErrorShow(false);
   };
  return (
    <>
      <li className="FriendList">
        <div className="Friend">
          <img src={props.image} />
          <div className="Friend_DESC">
            <span>{props.name}</span>
            <span>{props.nickname}</span>
          </div>
        </div>
        <button
          type="button"
          className="Friend_Button"
          onClick={DelateFriendHandler}
        >
          <MdCancel className="Button_Inner" />
        </button>
      </li>

      <Modal show={errorShow} onHide={handleClose}>
        <Modal.Body>{FriendsError(errorCode,props.name)}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
