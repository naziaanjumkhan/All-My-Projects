import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";
import { reviewdata } from "../export";

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);

  return (
    <div
      id=" textimonials"
      className="w-full lg:px-20 px5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-purple-600 text-xl font-semibold capitalize"
      >
        1300+ Customer reviews
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[42px] leading-[50px] text-center capitalize"
      >
        Our Customer Love
      </h1>
      <div data-aos="zoom-in" data-aos-delay="300" className="w-full mt-10">
        <Slider className="w-full" {...settings}>
          {reviewdata.map((item, index) => (
            <div className="">
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center gap-4 lg:p-4"
              >
                <img src={item.img} className="rounded-full w-[100px] m-auto" />
                <div className="flex justify-center items-center gap-1">
                  <FaStar className="text-purple-600" />
                  <FaStar className="text-purple-600" />
                  <FaStar className="text-purple-600" />
                  <FaStar className="text-purple-600" />
                  <FaStar className="text-purple-600" />
                </div>
                <p className="text-center text-gray-500 text-lg">{item.para}</p>
                <div className="flex justify-center items-center gap-5">
                  <FaQuoteLeft className="fill-purple-800 size-16" />
                  <div className="w-full flex flex-col justify-center items-start">
                  <h1 className="text-black text-xl font-semibold capitalize">{item.name}</h1>
                  <h1 className="text-gray-500 capitalize">{item.post}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
