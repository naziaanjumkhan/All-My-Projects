import React, { useEffect } from "react";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";

import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";

import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

const Footer = () => {
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
      id="contact"
      className="w-full flex flex-col justify-center items-center"
    >
      {/*1st box start here*/}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-purple-600 lg:px-20 px-10 py-8 grid lg:grid-cols-6 justify-center items-center gap-10"
      >
        <img
          src={client1}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client2}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client3}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client4}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client5}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client6}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
      </div>
      {/*1st box end here*/}

      {/*2st box start here*/}
      <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-5 grid-cols-1 gap-10">
        {/* Left side (Electro Shop + App Download) */}
        <div className="flex flex-col justify-start items-start gap-6">
          <h1 className="text-4xl font-bold text-purple-600 underline">
            Electro Shop
          </h1>
          <p className="text-gray-500 text-justify">
            Electro Store is one stop solution for robotics and electronics, we
            provide all types of electronic and robotics components, 3D Printing
            Services.
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="text-black text-xl font-semibold capitalize">
              Download Our App
            </h1>
            <div className="flex gap-4">
              <img src={google} alt="Google Play" className="w-[120px]" />
              <img src={apple} alt="App Store" className="w-[120px]" />
            </div>
          </div>
        </div>

        {/* Right side (4 columns of Useful Links) */}
        <div>
          <h1 className="text-black text-xl font-semibold capitalize">
            Useful Links
          </h1>
          <ul className="mt-8 flex flex-col gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              About
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Services
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Contact
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Blog
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-black text-xl font-semibold capitalize">
            Useful Links
          </h1>
          <ul className="mt-8 flex flex-col gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Shop
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Cart
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Wishlist
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              FAQ
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Support
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-black text-xl font-semibold capitalize">
            Useful Links
          </h1>
          <ul className="mt-8 flex flex-col gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Privacy
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Terms
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Help
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Returns
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Orders
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-black text-xl font-semibold capitalize">
            Useful Links
          </h1>
          <ul className="mt-8 flex flex-col gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Careers
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              News
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Events
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Partners
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Community
            </li>
          </ul>
        </div>
      </div>
      {/*2st box end here*/}

      {/*3st box start here*/}
      <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-100">
        <hr className="border-t border-gray-300 py-3" />
        <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10">
          <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
            <img src={pay1} alt="" className="w-[50px] rounded-lg" />
            <img src={pay2} alt="" className="w-[50px] rounded-lg" />
            <img src={pay3} alt="" className="w-[50px] rounded-lg" />
            <img src={pay4} alt="" className="w-[50px] rounded-lg" />
          </div>
          <div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow">
          <h1 className="text-black font-semibold text-2xl">Subscribe Newsletter</h1>
          <div>
          <input type="email" placeholder="Enter Valid Email" className="lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg bg-white"/>
          <button className="bg-purple-500 lg:w-auto w-full text-white hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-r-lg font-semibold ">SUBMIT</button>
          </div>
          </div>

          <div className="lg:w-[20%] w-full"> <p className="text-gray-500 lg:text-end text-center">2025 Powered by Masira Khan</p></div>
        </div>
      </div>
      {/*3st box end here*/}

      {/*scroll to button*/}
      <div id="icon-box" className="bg-purple-500 text-white p-3 rounded-full hover:bg-yellow-500 hover:text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
      <Link to="hero" spy={true} offset={-100} smooth={true} >
      <FaArrowUp className="w-[35px] h-[35px]"/>
      </Link>
      </div>
      {/*4st box end here*/}
    </div>
  );
};

export default Footer;
