import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import LinkPass from "../../components/link-pass/LinkPass";
import BrandsPage from "../brands/BrandsPage"
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ To‘g‘ri import
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  const Forimage = "https://realauto.limsa.uz/api/uploads/images";
  const [follows, setFollows] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get("https://realauto.limsa.uz/api/cars")
      .then((response) => {
        setFollows(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
    }, []);
    
  return (
    <main className="bg-gray-800">
      <section id="hero"></section>
      <section id="brands">
        <BrandsPage />
      </section>
      <section id="cars">Alyorbek</section>
      <section id="service"></section>
      <section id="about"></section>
      <section id="rental" className="relative pt-[60px] pb-[60px]">
        <img
          className="image-container h-[700px] top-0 absolute left-0"
          src="/home/rental-left.png"
          alt="rental-left"
        />
        <img
          className="image-container h-[700px] top-0 absolute right-0"
          src="/home/rental-right.png"
          alt="rental-left"
        />
        <div className="container relative  z-10 mx-auto px-[20px]">
          <h1 className="text-[28px]  md:text-[42px] text-white font-[500] mb-[5px]">
            LUXURY CAR RENTAL IN EMIRATES
          </h1>
          <p className="text-white text-[14px] md:text-[16px] leading-[35px]">
            Are you ready to feel the adrenaline rush and unleash your inner
            speed demon? Look no further than Terra luxury car rental Dubai, the
            city where dreams become reality. In this ultimate guide to sports
            car rental Dubai, we will take you on a thrilling journey through
            the world of luxury and supercar rental Dubai. Imagine cruising down
            the iconic Sheikh Zayed Road in a sleek and powerful sports car
            rental Dubai style, turning heads and leaving everyone in awe of
            your style. Whether you are a car enthusiast or simply looking to
          </p>
          <h2 className="mt-[30px] text-[28px] md:text-[42px] text-white font-[500]">
            What are the requirements to rent a luxury car in Dubai?
          </h2>
          <p className="text-white text-[14px] md:text-[16px] leading-[35px] mt-[5px]">
            To rent a car Dubai, it's enough to have a valid driving license and
            enough funds. & you'll need to show your foreign passport and prove
            that you have come of age and have driving experience.The age limit
            and the requirements for the license depend on where you're from.
            Visitors from Europe, the UK, the US and the Middle East can drive
            with their national licenses. People from other parts of the world
            need an international license. The age limit for the driver might
            vary from 21 to 25 years. Please get in touch with us before placing
            an order to discuss your individual situation.Cars in the UAE have
            steering wheels on the left side. Drivers stick to the right side of
            the road.If needed, you can add a second driver to your rental
            contract. The requirements for this person will be the same as for
            the first driver. If you let someone who isn't mentioned in your
            rental contract take a place behind the wheel, you can get a
            fine.The duration of a premium car rental in Dubai can vary from one
            day to several weeks. Discounts are common for luxury car rental
            Dubai monthly car rental plan. Use this chance to have fun, increase
            your high social status and please your dearest and nearest!Please
            avoid smoking inside the rented vehicle.
          </p>
        </div>
      </section>
      <section
        id="sports-car"
        className="bg-gray-950 relative pt-[60px] pb-[60px] xl:pb-[250px]"
      >
        <img
          className="hidden md:block absolute top-0  right-0"
          width={400}
          src="/home/sport-car-left.png"
          alt="sport-car-left"
        />
        <iframe
          className="hidden h-[400px] xl:h-[500px] top-[60px]  md:mb-0 md:w-[55%] md:hidden lg:block lg:absolute left-0 "
          src="https://www.youtube.com/embed/rsHmvxJ86PA?si=IV1NlzM7QxBEHYow"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="container px-[20px]  gap-[20px]  flex flex-col md:flex-row md:justify-end mx-auto relative z-10">
          <iframe
            className=" w-full lg:hidden"
            height="350"
            src="https://www.youtube.com/embed/rsHmvxJ86PA?si=IV1NlzM7QxBEHYow"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className=" lg:w-[40%]  mx-auto text-center md:mx-0 md:text-left self-right">
            <h1 className="text-white text-[28px] md:text-[42px] leading-[40px] mb-[20px]">
              SPORTS CAR RENTAL DUBAI
            </h1>
            <p className="text-white text-[14px] md:text-[18px] leading-[30px]">
              Terra L L C a Car is a Top Luxury Car Rental Dubai based company,
              We offer sports car rental, and supercar rental in Dubai. The best
              luxury car rental process provided by our fleet . We own a diverse
              range of luxury supercar rental and sports car rental Dubai style
              , including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes
              Benz, Porsche, and Range Rover, to name a few. Rent a car with the
              best car rental company in Dubai.
            </p>
            <LinkPass title={"ALL CARS"}/>
          </div>
        </div>
      </section>
      <section id="super-car" className="flex flex-col md:flex-row">
        <div className="h-[300px] md:w-[50%] w-full">
          <img
            className="h-[100%] w-full object-cover"
            src="/home/super-car.webp"
            alt="super-car"
          />
        </div>
        <div className="pt-[40px] pb-[30px] md:pb-[0] pl-[30px]">
          <h1 className="text-white text-[28px] sm:text-[32px] font-[500] mb-[5px] md:text-[32px] lg:text-[38px] xl:text-[42px]">SUPERCAR RENTAL DUBAI</h1>
          <h2 className="text-white text-[18px]">Hire the latest supercar</h2>
          <LinkPass title={"SEE ALL"} />
        </div>
      </section>
      <section id="faq"></section>
        <section id="follow" className="py-8 bg-[#1E1F27]">
           <div>
      <h1 className="text-white text-3xl font-semibold mb-10">FOLLOW US ON INSTAGRAM</h1>
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
        {follows?.map((follow) => (
          <SwiperSlide key={follow?.id}>
            <div className="block">
              <div
                className="mb-8 flex border items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage(`${Forimage}/${follow?.car_images[0]?.image?.src}`)}
              >
                <img className="h-46" src={`${Forimage}/${follow?.car_images[0]?.image?.src}`} alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal - Rasm kattalashtirish */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img className="max-w-[90vw] max-h-[80vh] md:max-w-[70vw] md:max-h-[75vh] lg:max-w-[60vw] lg:max-h-[70vh] xl:max-w-[50vw] xl:max-h-[65vh] rounded-lg object-contain" src={selectedImage} alt="Large preview" />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-opacity-50 rounded-full px-2"
              onClick={() => setSelectedImage(null)}
              >
          ✕  
            </button>
          </div>
        </div>
      )}
    </div>
        </section>
      <section id="locations"></section>
    </main>
  );
};

export default HomePage;
