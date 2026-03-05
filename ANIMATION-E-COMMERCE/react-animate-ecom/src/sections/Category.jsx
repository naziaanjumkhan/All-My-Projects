import React, { useEffect } from "react";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

const Category = () => {
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
      id="category"
      className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="w-full lg:w-[15%] flex flex-col justify-center lg:items-start items-center gap-[20px]">      
        <h1 className="text-purple-800 text-xl font-bold text-center">Favorites Item</h1>
        <h1 className="text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center">
        Popular Category
        </h1>
        <button className="bg-purple-800 hover:bg-yellow-500 text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px] transition-all duration-400">
          VIEW ALL
        </button>
      </div>
      
      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10">
        <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center gap-6">
      <img src={cat1} alt="" className="rounded-full cursor-pointer"/>
      <h1 className="text-black font-semibold cursor-pointer hover:text-purple-500 text-xl">Portable Speakers</h1>
        </div> 

         <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-6">
      <img src={cat2} alt="" className="rounded-full cursor-pointer"/>
     
      <h1 className="text-black text-xl font-semibold hover:text-purple-500 cursor-pointer">Wireless Speakers</h1>
        </div> 

         <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col justify-center items-center gap-6">
      <img src={cat3} alt="" className="rounded-full cursor-pointer"/>
     
      <h1 className="text-black text-xl font-semibold hover:text-purple-500 cursor-pointer">Wire Speakers</h1>
        </div> 

         <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col justify-center items-center gap-6">
      <img src={cat4} alt="" className="rounded-full cursor-pointer"/>
     
      <h1 className="text-black text-xl font-semibold hover:text-purple-500 cursor-pointer">HP CD</h1>
        </div> 

         <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col justify-center items-center gap-6">
      <img src={cat5} alt="" className="rounded-full cursor-pointer"/>
      <h1 className="text-black text-xl font-semibold hover:text-purple-500 cursor-pointer">Camera</h1>
        </div> 
      </div>
    </div>
  );
};

export default Category;
