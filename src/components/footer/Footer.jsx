import React from "react";
import { useSelector } from "react-redux";
import { translations } from "../../data";

const Footer = () => {
    const language = useSelector((state) => state?.language.language);

  return (
    <footer className="footer relative pt-[60px] pb-[60px] bg-[url('/footer/footer-main.png')] bg-contain bg-bottom  sm:bg-[300px_60px]  xl:bg-[600px_60px] bg-no-repeat">
      <div className="container relative z-10 flex-col md:flex-row mx-auto gap-[60px] px-[20px] flex">
        <div className="w-[260px] mx-auto text-center md:text-left md:mx-0">
          <a className="w-[130px] inline-block mb-[20px]" href="/">
            <img className="w-full" src="/footer/logo.png" alt="logo" />
          </a>
          <h1 className="text-white text-[38px] leading-[40px] mb-[20px] font-bold">
            {translations[language]?.luxuryCarRental ||
              translations?.en?.luxuryCarRental}
          </h1>
          <p className="text-white">
            {translations[language]?.sportdesc ||
              translations?.en?.sportdesc}
          </p>
          <a
            className="border-[2px] transition-colors duration-300 border-solid border-white px-[40px] py-[30px] inline-block mt-[20px] rounded-[12px] text-white hover:bg-red-500 hover:border-red-500 "
            href="tel:+998937550412"
          >
            GET BEST OFFER
          </a>
        </div>
        <div className="flex flex-col w-full md:w-[70%]">
          <div className="flex flex-col sm:flex-row text-center sm:text-left mt-[30px] gap-[20px] justify-between w-full">
            <ul className="flex flex-col gap-[30px]">
              <li>
                <a className="text-white text-[18px]" href="/cars">
                  CARS
                </a>
              </li>
              <li>
                <a className="text-white text-[18px]" href="/blog">
                  BLOG
                </a>
              </li>
              <li>
                <a className="text-white text-[18px]" href="/services">
                  SERVICES
                </a>
              </li>
              <li>
                <a className="text-white text-[18px]" href="/about">
                  ABOUT US
                </a>
              </li>
              <li>
                <a className="text-[18px] text-white" href="/contact">
                  CONTACTS
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-[30px]">
              <li className="text-white">CONTACTS</li>
              <li className="text-gray-300">Elite 3 Sports City,</li>
              <li className="text-gray-300">Dubai 26W8 24J</li>
              <li className="text-gray-300">United Arab Emirates</li>
              <li className="text-gray-300">+998 99 0000441</li>
              <li className="text-gray-300">Working hours: 24/7</li>
            </ul>
            <ul className="flex flex-col gap-[30px]">
              <li className="text-white">
                <a href="/about">ABOUT US</a>
              </li>
              <li className="text-white">
                <a href="/about">OUR TEAM</a>
              </li>
              <li className="text-white">
                <a href="/faq">FAQ</a>
              </li>
              <li className="text-white">FOLLOW US</li>
              <li className="text-white flex justify-between items-center">
                <a href="/">
                  <img src="/footer/media-1.svg" alt="media" />
                </a>
                <a href="/">
                  <img src="/footer/media-2.svg" alt="media" />
                </a>
                <a href="/">
                  <img src="/footer/media-3.svg" alt="media" />
                </a>
              </li>
            </ul>
          </div>
          <span className="h-[1px] w-full bg-red-500 mt-[30px] mb-[5px]"></span>
          <ul className="flex justify-between gap-[20px] items-center">
            <li className="text-white">
              © 2024 Terra Car Rental. United Arab Emirates.
            </li>
            <li className="text-white">Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <div className="absolute overlay w-full h-full top-0 z-0"></div>
    </footer>
  );
};

export default Footer;
