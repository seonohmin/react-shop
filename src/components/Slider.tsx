import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as React from 'react';
import "../index.css";
import { BsArrowRightShort } from "react-icons/bs"
import fashionImage from "../assets/images/fashion.jpeg";
import digitalImage from "../assets/images/digital.jpeg";
import groceryImage from "../assets/images/grocery.jpeg";
import { Link } from "react-router-dom";

const sliderData = [
  {
    name: "fashion",
    src: fashionImage,
    text: "물빠진 청바지!",
    small: "이제 막 도착한 패션 청바지를 구경해 보세요.",
  },
  {
    name: "digital",
    src: digitalImage,
    text: "신속한 업무처리!",
    small: "다양한 디지털 상품을 둘러보세요.",
  },
  {
    name: "accessory",
    src: groceryImage,
    text: "신선한 식품!",
    small: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
  },
];

interface sliderItem {
  readonly name: string;
  readonly src: string;
  readonly text: string;
  readonly small: string;
}

const renderSlides = sliderData.map((slide: sliderItem) => (
  <section key={slide.name} className="carousel-slide">
    <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-white">
        {slide.text}
      </h2>
      <p className="my-2 text-white">{slide.small}</p>
      <Link to={`/${slide.name}`} className="btn btn-sm lg:btn-md mt-3">
        바로가기 <BsArrowRightShort />
      </Link>
    </div>
    <img src={slide.src} alt={slide.name} />
  </section>
));

export default function Slider() {
  return (
    <Carousel
    autoPlay={true}
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      className="carousel-container"
    >
      {renderSlides}
    </Carousel>
  );
}

