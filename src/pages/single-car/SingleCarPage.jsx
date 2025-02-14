import { useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import { MdCalendarToday } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import { MdOutlineSpeed } from "react-icons/md";
import { LiaUserSlashSolid } from "react-icons/lia";
import { VscSymbolColor } from "react-icons/vsc";
import { PiEngine } from "react-icons/pi";
import { PiPianoKeys } from "react-icons/pi";
import { TbCar4Wd } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";

const SingleCarPage = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  const car = location.state?.car;



  // if (!car)
  //   return <p className="text-white text-center">Mashina ma'lumoti topilmadi!</p>;

  // const images = car.car_images.map((img) =>
  //   `https://realauto.limsa.uz/api/uploads/images/${img.image.src}`
  // );


  if (!car)
    return (
      <p className="text-white text-center">Mashina ma'lumoti topilmadi!</p>
    );

  // API dan kelgan barcha rasmlarni arrayga yig‘amiz
  const images = car.car_images.map(
    (img) => `https://realauto.limsa.uz/api/uploads/images/${img.image.src}`
  );

  return (
    <section>
      <div className="container w-[1200px] min-h-[650px] mx-auto p-5 text-white my-[50px]">
        <div className="w-full h-auto flex justify-between">
          {/* Chap tomon - Slayder */}
          <div className="w-[550px]">
            <h1 className="text-[45px] font-bold uppercase my-[10px]">
              {car.brand.title} {car.model.name} ({car.color})
            </h1>

            <Splide
              ref={mainSliderRef}
              options={{
                type: "fade",
                heightRatio: 0.5,
                pagination: false,
                arrows: true, // Chapga-o‘ngga o'tish tugmalari bor
                cover: true,
                isNavigation: false,
              }}
              onMove={(splide) => {
                if (thumbSliderRef.current) {
                  thumbSliderRef.current.go(splide.index);
                }
              }}
            >
              {images.map((img, index) => (
                <SplideSlide key={index}>
                  <img
                    src={img}
                    alt={`Car ${index}`}
                    className="w-full max-h-[500px] object-cover rounded-lg drop-shadow-2xl mt-4"
                  />
                </SplideSlide>
              ))}
            </Splide>

            {/* Thumbnail Slayder */}
            <Splide
              ref={thumbSliderRef}
              options={{
                fixedWidth: 150,
                fixedHeight: 100,
                gap: 10,
                focus: "center",
                isNavigation: true,
                pagination: false,
                cover: true,
                type: "loop",
              }}
              onMove={(splide) => {
                if (mainSliderRef.current) {
                  mainSliderRef.current.go(splide.index);
                }
              }}
              className="mt-4"
            >
              {images.map((img, index) => (
                <SplideSlide key={index}>
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover cursor-pointer rounded-md border-2 border-gray-500 hover:border-white transition "
                  />
                </SplideSlide>
              ))}
            </Splide>


            <h2 className="text-[32px] mt-4 font-[700]">Good to know about  {car.model.name} ({car.color}) </h2>
            <p className="text-gray-400 mt-2">
            Kilometrage limit per day
            </p>
            <p className="text-lg "> {car.max_speed} KM (Every extra km will be charged {car.price_in_aed} AED/km)</p>

            <div className="mt-[25px]">
            <p className="text-gray-400 mt-2">
            Car rental deposit amount
            </p>
            <p className="text-lg "> The deposit is refunded within {car.deposit} days</p>

            </div>
          </div>

          <div className="w-[580px] p-5 rounded-lg my-[50px] ">
            
            <div className="w-full flex flex-wrap justify-between items-center  ">
              <h2 className="w-[240px] text-[22px] font-[600]">AED {car.price_in_aed_sale} <span>/ {car.price_in_usd_sale}</span> <span className="text-[15px] text-gray-600">per day</span> <span className="text-[15px] text-gray-600">Deposit</span> <br />  </h2>

              <h2 className="w-[240px] text-[22px] font-[600]">AED {car.deposit} <br /> <span className="text-[15px] text-gray-600">AED 5000 for credit cards payment</span> </h2>

              <h2 className="w-[280px] text-[22px] font-[600]">  <span className="text-[22px] font-[600] line-through">AED {car.premium_protection} / {car.price_in_usd}</span> <span className="text-[15px] text-gray-600">Premium protection</span> </h2>
               
               <h2 className="w-[220px] text-[22px] font-[600]"> AED {car.premium_protection} <br /> <span className="text-[15px] text-gray-600">AED 5000 for price for 1 day</span> </h2>

            </div>

            <hr className="text-[#fff] my-[30px]" />
          
           <div className="w-full flex flex-wrap gap-y-[25px]">

             <div className="w-[100px] flex flex-col justify-center items-center">
                <MdCalendarToday className="text-[25px] gap-[10px]"/>
                {car.year}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
                <TfiTimer className="text-[25px] gap-[10px]"/>
                {car.seconds}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
              <MdOutlineSpeed className="text-[25px] gap-[10px]"/>
              {car.max_speed}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
              <LiaUserSlashSolid className="text-[25px] gap-[10px]"/>
              {car.max_people}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
              <VscSymbolColor className="text-[25px] gap-[10px]"/>
              {car.color}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
              <PiEngine className="text-[25px] gap-[10px]"/>
              {car.motor}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
              <PiPianoKeys className="text-[25px] gap-[10px]"/>
              {car.transmission}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
              <TbCar4Wd className="text-[25px] gap-[10px]"/>
              {car.drive_side}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
              <LuFuel className="text-[25px] gap-[10px]"/>
              {car.petrol}
             </div>
             <div className="w-[100px] flex flex-col justify-center items-center">
              <IoCarSportOutline className="text-[25px] gap-[10px]"/>
              {car?.city?.name} Cars

             </div>




            
           </div>

           <hr className="text-[#fff] my-[30px]" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCarPage;
