import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    arrows: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap initialSlide={1}>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>

    </Carousel>
  );
}
const Carousel = styled(Slider)`
  margin-top: 20px;
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button::before {
    color: white;
  }
  button {
    z-index: 1;
  }
  .slick-list {
    overflow: visible;
  }
`;
const Wrap = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 400ms;
    &:hover {
      border-color: white;
      
    }

    }
  }
`;
export default ImgSlider;
