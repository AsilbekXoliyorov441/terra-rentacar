import React, { useEffect, useState } from "react";
import { Link, data } from "react-router-dom";
import axios from "axios";

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brands , setBrands] = useState([])
  const [model , setModel] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://realauto.limsa.uz/api/cars")
      .then((response) => {
        setCars(response?.data?.data);
      })
      .catch((error) => {
        console.error("Mashinalarni olishda xatolik:", error);
      });
  
    axios
      .get("https://realauto.limsa.uz/api/brands")
      .then((response) => {
        setBrands(response?.data?.data);
      })
      .catch((error) => {
        console.error("Boshqa API so‘rovda xatolik:", error);
      });

      axios
      .get("https://realauto.limsa.uz/api/brands")
      .then((response) => {
        setModel(response?.data?.data)
      })
      .catch((error) => {
        console.error("Model selctda xatolik" , error);
      })

  }, []);
  
  console.log(cars, "datadan kelayotgan malumot");

  return (
    <div className="container w-full h-auto border-red m-auto flex pl-[5px]  my-[50px]">
      {/* <Link className='text-blue-700' to={`/cars/1`}>CarLink</Link> */}

      <div className="w-[350px] h-auto bg-[#272933] relative top-[30px] pt-[35px] pl-[30px] pr-[30px]  py-[15px] ">
        <div className="w-[200px] h-[50px]">
          <img
            src="public/cars/TerraAvto-CveSQ9CU.png"
            alt=""
            className="w-full"
          />
        </div>

        <h2 className="text-[#fff] text-[25px] font-[700] ">
          Filter By <br />
          <span className="font-[350]">Offers</span>
        </h2>

        <hr className="text-[#d6d1d1] mt-[25px]" />

        <form action="">
          <p className="text-[#fff] mt-[20px] mb-[20px]">Car type</p>
          <div className="flex flex-col gap-[10px]">
      {cars.map((item) => (
        <div key={item.id} className="flex items-center text-[#fff] gap-[15px]">
          <input type="checkbox"  />
          <p className="uppercase">{item.limitperday}</p>
        </div>
      ))}
    </div>
        </form>

        <hr className="text-[#d6d1d1] mt-[25px]" />

        <form action="">
          <p className="text-[#fff] mt-[20px] mb-[20px]">Brand</p>
         {brands.map((item) => (
             <div key={item.id} className="flex items-center text-[#fff] gap-[15px]">
  <input type="checkbox"  />
          <p className="uppercase">{item.title}</p>
             </div>
         ))

         }
        </form>

        <div className="w-full">
          <p className="text-[#fff] mt-[20px] mb-[20px]">Model</p>
          <select
            name=""
            id=""
            className="w-[100%] h-[45px] bg-amber-50 outline rounded-[5px]"
          >
            {model.map((car) => (
              <option value="">{car.title}</option>
            ))}
          </select>

          <div className="w-full mt-[25px] flex gap-[25px] justify-between">
            <button className="pt-[10px] pb-[10px] pl-[25px] pr-[25px] text-[#fff] border-2 border-white rounded-[4px] cursor-pointer">
              Reset
            </button>
            <button className="pt-[10px] pb-[10px] pl-[35px] pr-[25px] bg-[#009A00] rounded-[4px] text-[#fff] cursor-pointer">
              Apply filter
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1150px] min-h-[680px] flex flex-wrap pl-[15px] pt-[25px] gap-[15px] pb-[25px]">
        {loading ? (
          <p className="text-white">Yuklanmoqda...</p>
        ) : (
          cars.map((car) => (
            <div
              key={car.brand_id}
              className="w-[270px] h-[400px] bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] border-[#e5e7eb] rounded-[10px] hover:bg-gradient-to-tl transition-all duration-1000"
            >
              <img
                src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}
                alt="Car"
                className="w-[90%] h-[220px] m-auto mt-[25px]"
              />
              <p className="text-white text-center mt-4">{car.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CarsPage;
