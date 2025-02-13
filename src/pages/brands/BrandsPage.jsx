import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ To‘g‘ri import
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const BrandsPage = () => {
  const Forimage = "https://realauto.limsa.uz/api/uploads/images";
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("https://realauto.limsa.uz/api/brands")
      .then((response) => {
        setBrands(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  return (
    <section className="bg-[#111219] min-h-screen py-10">
    <div className="max-w-[1200px] mx-auto px-5">
      <h1 className="font-serif uppercase text-4xl text-white mb-10">
        Brands
      </h1>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // Telefon
          480: { slidesPerView: 3, spaceBetween: 15 }, // Kichik telefon
          768: { slidesPerView: 4, spaceBetween: 20 }, // Planshet
          1024: { slidesPerView: 5, spaceBetween: 20 }, // Noutbuk
          1280: { slidesPerView: 6, spaceBetween: 25 }, // Katta ekran
        }}
        autoplay={{ delay: 900, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {brands?.map((item) => (
          <SwiperSlide key={item?.id}>
            <Link to="/cars" className="block">
              <div className="mb-8 border border-[#393A40] flex flex-col items-center justify-center w-full h-50 bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] hover:bg-gradient-to-tl transition-all duration-500 p-5 animate-pulse">
                <img
                  src={`${Forimage}/${item?.image_src}`}
                  width={60}
                  alt={item?.title}
                  className="mb-2"
                />
                <p className="text-gray-400 text-center">{item?.title}</p>
              </div>
              <div className="border border-[#393A40] flex flex-col items-center justify-center w-full h-50 bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] hover:bg-gradient-to-tl transition-all duration-500 p-5 animate-pulse">
                <img
                  src={`${Forimage}/${item?.image_src}`}
                  width={60}
                  alt={item?.title}
                  className="mb-2"
                />
                <p className="text-gray-400 text-center">{item?.title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  );
};

export default BrandsPage;