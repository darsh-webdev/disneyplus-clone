import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidestoShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="Wanda Vision Poster"></img>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="Onward Poster"></img>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="Assembled Poster"></img>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="Burrow Poster"></img>
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opcaity 0.3s ease-out 0.2s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: #f9f9f9;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -60px;
  }

  .slick-next {
    right: -60px;
  }
`;

const Wrap = styled.div`
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 100ms;
    }
  }

  @media (max-width: 768px) {
    a {
      height: 150px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default ImgSlider;
