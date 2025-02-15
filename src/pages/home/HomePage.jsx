import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinkPass from "../../components/link-pass/LinkPass";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const data = [
  {
    id: 1,
    question: "What is the minimum age requirement to rent a car in Dubai?",
    answer:
      "Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.",
  },
  {
    id: 2,
    question: "What do you need for a luxury car rental in Dubai ?",
    answer:
      "Drivers shall be required to have a valid driver's license and Passport copy.",
  },
  {
    id: 3,
    question: "How much is the Insurance limit on luxury car rental Dubai?",
    answer:
      "Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.",
  },
  {
    id: 4,
    question: "Can anyone else drive the car i rent?",
    answer:
      "The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport.",
  },
];


const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
      <section id="hero" className="pt-[90px] pb-[90px]">
        <div className="container px-[20px] mb-[40px] mx-auto">
          <h1 className="text-center font-[500] text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-serif">
            TOP LUXURY CAR RENTAL EMIRATES
          </h1>
          <h1 className="text-center font-[500] text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-serif">
            №1
          </h1>
          <p className="text-white text-center text-[16px] lg:text-[18px] mt-[15px]">
            Best sports car & supercar rental Emirates, Exclusive offers on
            luxury car rental Emirates Cheap price
          </p>
          <Link
            className={`group w-full mx-auto md:mx-0 text-[14px] sm:text-[16px] md:text-[18px]  hover:text-red-600 transition-colors duration-300 flex items-center justify-center gap-[10px] font-[500] mt-[30px] text-white`}
            to="/cars"
          >
            <span className="group-hover:-translate-x-[20px] transition-transform duration-300">
              RENT A CAR EMIRATES CATALOG
            </span>
            <svg
              data-v-727266f5
              className="border-white  border rounded-full group-hover:translate-x-[20px] transition-transform duration-300 transition-colors group-hover:border-red-600"
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-727266f5
                className="path group-hover:fill-red-600 transition-colors duration-300"
                fill="white"
                d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
              ></path>
              <circle
                data-v-727266f5
                class="circle"
                cx="16"
                cy="16"
                r="15.5"
              ></circle>
            </svg>
          </Link>
        </div>
        <Swiper
          spaceBetween={30}
          navigation={true}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 }, // sm: 1 ta slayd
            1024: { slidesPerView: 3 }, // lg: 2 ta slayd
            1280: { slidesPerView: 3 }, // xl: 3 ta slayd
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex - 1)}
        >
          {[1, 2, 3, 4].map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex pt-[90px] relative pb-[90px] md:ml-[20px] lg:ml-0 justify-center pl-[50px] lg:pl-0 lg:pr-0 pr-[50px]"
            >
              <Link to={"/cars"}>
                <img
                  className={`transition-all max-w-[600px] lg:max-w-[700px] w-full duration-300 rounded-lg ${
                    index === (activeIndex + 1) % 4 ? "filter-image" : "image"
                  }`}
                  src={`/home/hero-swiper-${item}.png`}
                  alt={`Slide ${item}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section id="brands"></section>
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
          <h1 className="text-[24px] sm:text-[28px]  md:text-[36px] lg:text-[42px] text-white font-[500] mb-[5px]">
            LUXURY CAR RENTAL IN EMIRATES
          </h1>
          <p className="text-white text-[14px] md:text-[16px] leading-[30px] md:leading-[35px]">
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
          <p className="text-white text-[14px] md:text-[16px] leading-[30px] md:leading-[35px] mt-[5px]">
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
            <LinkPass title={"ALL CARS"} />
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
          <h1 className="text-white text-[28px] sm:text-[32px] font-[500] mb-[5px] md:text-[32px] lg:text-[38px] xl:text-[42px]">
            SUPERCAR RENTAL DUBAI
          </h1>
          <h2 className="text-white text-[18px]">Hire the latest supercar</h2>
          <LinkPass title={"SEE ALL"} />
        </div>
      </section>
      <section id="faq" className="pt-[90px] pb-[90px] relative  faq bg-cover bg-center">
        <div className="absolute top-0 bg-gray-950 opacity-[0.7] w-full h-full"></div>
        <div className="container relative mx-auto px-[20px]">
          <h1 className="text-center text-white text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-[500]">
            FAQ
          </h1>
          <div>
            {data?.map((item, index) => (
              <div
                key={item.id || index}
                className="h-[90px] max-w-[900px] w-full mx-auto"
              >
                {/* Header */}
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex gap-[5px] pb-[20px] pt-[20px] items-center mx-auto justify-center cursor-pointer"
                >
                  {/* Left Icon */}
                  <span
                    className={`${
                      openIndex === index ? "animate-bounce" : "bounce-x-left"
                    } mr-[20px]`}
                  >
                    <svg
                      width="22px"
                      className={`${
                        openIndex === index ? "rotate-270" : "rotate-180"
                      } transition-transform duration-300 fill-white`}
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Layer_67" data-name="Layer 67">
                        <path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                        <path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                      </g>
                    </svg>
                  </span>

                  {/* Question Text */}
                  <button className="text-white text-center text-[16px] sm:text-[18px] cursor-pointer lg:text-[24px]">
                    {item.question}
                  </button>

                  {/* Right Icon */}
                  <span
                    className={`${
                      openIndex === index ? "animate-bounce" : "bounce-x-right"
                    } ml-[20px]`}
                  >
                    <svg
                      width="22px"
                      className={`${
                        openIndex === index ? "-rotate-90" : "rotate-0"
                      } transition-transform duration-300 fill-white`}
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Layer_67" data-name="Layer 67">
                        <path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                        <path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                      </g>
                    </svg>
                  </span>
                </div>

                {/* Animated Gradient Border */}
                <span
                  className={`animated-gradient block h-[2px] bg-gray-500 transition-all duration-500 mx-auto ${
                    openIndex === index ? "w-0" : "w-full"
                  }`}
                ></span>

                {/* Answer (Content) */}
                <div
                  className={`faq-item rounded-[8px] transform transition-all relative z-20 duration-300 bg-gray-700 text-white text-[18px] p-[10px] ${
                    openIndex === index
                      ? "opacity-100 translate-y-[10px] h-auto"
                      : "opacity-0 translate-y-[-20px] h-0 overflow-hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="follow"></section>
      <section id="locations"></section>
    </>
  );
};

export default HomePage;
