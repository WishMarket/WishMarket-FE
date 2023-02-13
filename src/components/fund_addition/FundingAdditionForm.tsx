import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { commaNums } from "../../hooks/CommaNums";
import { Modal } from "react-bootstrap";
import { FundingStartError } from "../../hooks/SignUpError";
import defaultImg from "../../assets/default-profile-img.png";

interface ProductObj {
  productId: number;
  name: string;
  image: string;
  price: number;
  //밑 날짜2개는 Date형식으로 올가능성이 높음
  startdate: string;
  enddate: string;
  funded_price: number;
  my_fund: number;
  url: string;
  to: string;
  to_picture: string;
  from: string[];
}

export default function FundingAdditionForm() {
  const navigate = useNavigate();
  const [items, setItems] = useState<ProductObj | null>(null);
  const [fundingAmout, setFundingAmout] = useState<number>(0);
  const [errorShow, setErrorShow] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);

  let remaining_Amount: number | undefined;
  let remaining_Percent;
  if (items) {
    remaining_Amount = items.price - items.funded_price;
    remaining_Percent = ((items.funded_price / items.price) * 100).toFixed(2);
  }

  // fundingid 로 변경필요
  let { id } = useParams() as { id: string };

  const url = "/data/FundingData.json";

  // axios
  const getItems = async () => {
    await axios
      .get(url)
      .then((res) => {
        let response = res.data.fundData;
        setItems(response[0]); // 연동 시 교체 필요
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFundingAmout(parseInt(e.currentTarget.value));
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fundingAmout < 1000) {
      setErrorCode(3);
      setErrorShow(true);
    } else {
      setErrorCode(0);
      setErrorShow(true);
      console.log("product: " + id);
      console.log(fundingAmout);
      navigate("/");
    }
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement> | void) => {
    setErrorShow(false);
  };
  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {}, [fundingAmout]);

  return (
    <>
      <div className="FundingAddition_Container">
        <div className="FundingAddition_Wrapper">
          {items != null ? (
            <>
              <form onSubmit={onSubmitHandler} target="blankifr">
                <div className="FundingAddition_Top_Area">
                  <div>
                    <img
                      src={items.image}
                      alt={items.name}
                      className="FundingAddition_Img"
                    />
                  </div>
                  <div className="FundingAddition_Desc">
                    <div className="FundingAddition_Title">{items.name}</div>
                    <div className="FundingAddition_Price">
                      <h2>목표 금액</h2>
                      <span>{commaNums(items.price)} 원</span>
                    </div>
                    <div className="FundingGraph_Desc">
                      <h2>펀딩 상세</h2>
                      <div
                        className="funding_Progress progress"
                        role="progressbar"
                        style={{
                          height: "25px",
                        }}
                      >
                        <div
                          className="progress-bar"
                          style={{
                            width: `${remaining_Percent}%`,
                          }}
                        >
                          {remaining_Percent}%
                        </div>
                      </div>

                      <div className="Funding_Amount_Desc">
                        <div>
                          <h3>모인 금액</h3>
                          <span> {commaNums(items.funded_price)}</span>
                        </div>
                        <div>
                          <h3>남은 금액</h3>
                          <span>
                            {remaining_Amount
                              ? commaNums(remaining_Amount)
                              : null}
                          </span>
                        </div>
                        <div className="my-Funded">
                          <h3>내 펀딩 금액</h3>
                          <span> {commaNums(items.my_fund)}</span>
                        </div>
                      </div>
                    </div>
                      <hr />
                      <div className="FundingAddition_Date">
                        <h2>펀딩 기간</h2>
                        <div>
                          {items ? items.startdate : null} ~{" "}
                          {items ? items.enddate : null}
                        </div>
                      </div>
                    <hr />

                    <div>
                      <div className="FundingAddition_To">
                        <span>
                          <h2>받는 친구</h2>
                        </span>
                        <div className="To_desc">
                          <img
                            src={items ? items.to_picture : defaultImg}
                            className="To_image"
                          ></img>
                          <span>{items ? items.to : null}</span>
                        </div>
                      </div>
                      <div>
                        <span className="FundingAddition_From">
                          <h2>
                            참여한 친구
                            <div className="From_count">
                              {items ? items.from.length + "명 참여" : ""}
                            </div>
                          </h2>
                          <div className="From_desc">
                            <span>
                              {items
                                ? items.from + " "
                                : "참여한 친구가 없습니다."}
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>

                    <hr />
                    <div className="FundingAddition_Desc_Bottom">
                      <label htmlFor="Funding_Amount">추가할 펀딩 금액:</label>
                      <input
                        id="Funding_Amount"
                        type="number"
                        onChange={onChangeAmount}
                      />

                      <button type="submit" className="btn btn-warning">
                        펀딩 참여
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : null}
        </div>
      </div>
      <iframe
        name="blankifr"
        style={{
          display: "none",
        }}
      ></iframe>
      <Modal show={errorShow} onHide={handleClose}>
        <Modal.Body>{FundingStartError(errorCode)}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
