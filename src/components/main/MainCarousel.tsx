import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import gift from "../../assets/carousel/gift.jpg";
import category from "../../assets/carousel/category.jpg";
import friend from "../../assets/carousel/friend.jpg";

export default function MainCarousel() {
    const [index, setIndex] = useState<number>(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="carousel" src={gift} alt="카테고리 페이지로 이동" />
                <Carousel.Caption className="carouselCaption">
                    <Link to={"./"}>
                        <h3>선물 펀딩은 위시마켓</h3>
                        <p>부담되는 선물도 이젠 고민하지 마세요.</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel" src={category} alt="전자제품 카테고리로 이동" />
                <Carousel.Caption className="carouselCaption">
                    <Link to={"./"}>
                        <h3 className="slide-title">특별한 생일 선물을 원하신다면,</h3>
                        <p className="slide-desc">최대 90% OFF, 오직 위시마켓에서만</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel" src={friend} alt="친구찾기 페이지로 이동" />
                <Carousel.Caption className="carouselCaption">
                    <Link to={"./"}>
                        <h3>위시마켓 친구 찾기</h3>
                        <p>친구의 위시리스트와 펀딩 진행 목록을 확인해 보세요.</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
