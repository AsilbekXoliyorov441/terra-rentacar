import { useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";

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
          <div className="w-[600px]">
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

          <div className="w-[500px] bg-amber-300 p-5 rounded-lg">
            <h3 className="text-2xl font-semibold">Qo‘shimcha ma'lumotlar</h3>
            <p className="mt-0 text-gray-900">
              <span></span> <br />
            350 KM (Every extra km will be charged  AED/km)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCarPage;
