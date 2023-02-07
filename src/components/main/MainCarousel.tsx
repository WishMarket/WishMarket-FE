import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function MainCarousel() {
    const [index, setIndex] = useState<number>(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="carousel" src="https://via.placeholder.com/1500x500.jpg" alt="First slide" />
                <Carousel.Caption className="carouselCaption">
                    <Link to={"./"}>
                        <h3>BEST</h3>
                        <p>최고의 펀딩 선물들을 살펴보세요!</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel" src="https://via.placeholder.com/1500x500.jpg" alt="Second slide" />​
                <Carousel.Caption className="carouselCaption">
                    <Link to={"./"}>
                        <h3>Category</h3>
                        <p>원하시는 선물을 종류별로 찾아보세요!</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel" src="https://via.placeholder.com/1500x500.jpg" alt="Third slide" />​
                <Carousel.Caption className="carouselCaption">
                    <Link to={"./"}>
                        <h3>Find Friends</h3>
                        <p>친구들을 찾고 선물을 진행해요!</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
