import React from "react";
import { Link } from 'react-router-dom';
import LinkPass from "../../components/link-pass/LinkPass";

const HomePage = () => {
  return (
    <main className="bg-gray-800">
      <section id="hero"></section>
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
      <section id="follow"></section>
      <section id="locations"></section>
    </main>
  );
};

export default HomePage;
