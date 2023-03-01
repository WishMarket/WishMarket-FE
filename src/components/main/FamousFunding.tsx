import React, { useState, useEffect } from "react";
import axios from "axios";

import FamousFundingCard from "./FamousFundingCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FamousFundingItemType} from "./Main.interface";
import { GetFamousFunding } from "../../hooks/axios/FamousFunding";

export default function FamousFunding() {
  
    const [famousfunding, setFamousFunding] = useState<FamousFundingItemType[]>([]);
    const ITEM_WIDTH = 872;
    const LENGTH = 11 - 1;
    const MAX_WIDTH = LENGTH * ITEM_WIDTH;
    const INIT_SLIDE_PX = (LENGTH / 2) * ITEM_WIDTH;
    const [slidePx, setSlidePx] = useState<number>(-INIT_SLIDE_PX);

    const toPrev = () => {
        if (slidePx < 0) setSlidePx(slidePx + ITEM_WIDTH);
    };

    const toNext = () => {
        if (slidePx > -MAX_WIDTH) setSlidePx(slidePx - ITEM_WIDTH);
    };

    // funding data axios
    const getFundingData = async () => {
        const fundingdata = await GetFamousFunding();
        // setFamousFunding(fundingdata);
        console.log(fundingdata);
    };

    useEffect(() => {
        getFundingData();
    }, []);

    return (
      <div>
        <div className="Famous_Funding_Title">주목! 요즘 뜨는 펀딩</div>
        <div className="Famous_Funding_Desc">
          현재 인기 유저가 진행 중인 펀딩 목록이에요.
        </div>
        <div className="Product_Scroll_Wrapper">
          <button
            name="left"
            className="Carousel_Button_Left"
            onClick={toPrev}
            disabled={slidePx === 0 ? true : false}
          >
            <AiOutlineLeft />
          </button>
          <div className="Famous_Funding_Wrapper">
            <div
              className="product_Scroll"
              style={{
                left: `${INIT_SLIDE_PX}px`,
                transform: `translateX(${slidePx}px)`,
                transition: "ease-in 0.5s all",
              }}
            >
              {famousfunding.slice(0, 11).map((gift) => {
                return <FamousFundingCard gift={gift} key={gift.fundingId} />;
              })}
            </div>
          </div>
          <button
            name="right"
            className="Carousel_Button_Right"
            onClick={toNext}
            disabled={slidePx === -MAX_WIDTH ? true : false}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    );
}
