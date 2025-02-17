import React, { useEffect, useState } from "react";
import { Link, data, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri";

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://realauto.limsa.uz/api/cars")
      .then((response) => {
        setCars(response?.data?.data);
        setFilteredCars(response?.data?.data);
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
        console.error("Brandlarni olishda xatolik:", error);
      });

    axios
      .get("https://realauto.limsa.uz/api/categories")
      .then((response) => {
        setCategories(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Kategoriyalarni olishda xatolik:", error);
      });
  }, []);

  const handleBrandChange = (brandId) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const applyFilter = () => {
    let filtered = cars;
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((car) =>
        selectedBrands.includes(car.brand.id)
      );
    }
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((car) =>
        selectedCategories.includes(car.category.id)
      );
    }

    setFilteredCars(filtered);
  };

  const handleReset = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setFilteredCars(cars);
  };

  return (
    <div className="container w-full h-auto border-red m-auto flex pl-[5px] my-[50px]">
      <div className="absolute translate-x-[-150%] lg:translate-x-0 translate-transform duration-500 lg:relative lg:block w-[350px] h-auto bg-[#272933] top-[30px] pt-[35px] pl-[30px] pr-[30px] py-[15px]">
        <h2 className="text-[#fff] text-[25px] font-[700]">
          Filter By <br />
          <span className="font-[350]">Offers</span>
        </h2>
        <hr className="text-[#d6d1d1] mt-[25px]" />

        <form>
          <p className="text-[#fff] mt-[20px] mb-[20px]">Car type</p>
          <div className="flex flex-col gap-[10px]">
            {categories.map((item) => (
              <div
                key={item.id}
                className="flex items-center text-[#fff] gap-[15px]"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(item.id)}
                  onChange={() => handleCategoryChange(item.id)}
                />
                <p className="uppercase">{item.name_en}</p>
              </div>
            ))}
          </div>
        </form>

        <hr className="text-[#d6d1d1] mt-[25px]" />

        <form>
          <p className="text-[#fff] mt-[20px] mb-[20px]">Brand</p>
          {brands.map((item) => (
            <div
              key={item.id}
              className="flex items-center text-[#fff] gap-[15px]"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(item.id)}
                onChange={() => handleBrandChange(item.id)}
              />
              <p className="uppercase">{item.title}</p>
            </div>
          ))}
        </form>
        <p className="text-[#fff] mt-[20px] mb-[20px]">Model</p>
        <select
          name=""
          id=""
          className="w-[100%] h-[45px] bg-amber-50 outline rounded-[5px]"
        >
          {cars.map((item) => (
            <option value="">{item?.model?.name}</option>
          ))}
        </select>

        <div className="w-full mt-[25px] flex gap-[25px] justify-between">
          <button
            className="pt-[10px] pb-[10px] pl-[25px] pr-[25px] text-[#fff] border-2 border-white rounded-[4px] cursor-pointer"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="pt-[10px] pb-[10px] pl-[35px] pr-[25px] bg-[#009A00] rounded-[4px] text-[#fff] cursor-pointer"
            onClick={applyFilter}
          >
            Apply filter
          </button>
        </div>
      </div>

      <div className="w-[1150px] min-h-[680px] flex flex-wrap sm:justify-center justify-between pl-[15px] pt-[25px] gap-[15px] pb-[25px]">
        {loading ? (
          <p className="text-white">Yuklanmoqda...</p>
        ) : filteredCars.length === 0 ? (
          <p className="text-white text-center w-full text-lg">
            Mos keladigan mashina topilmadi
          </p>
        ) : (
          filteredCars.map((item) => (
            <div
              key={item.id}
              className="w-[310px] h-[430px] bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] border-[#e5e7eb] px-2 rounded-[10px] hover:bg-gradient-to-tl transition-all duration-1000"
            >
              <img
                src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images[0]?.image?.src}`}
                alt="Car"
                className="w-[90%] max-w-[100%] h-[200px] max-h-[200px] object-cover m-auto mt-[25px] rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                onClick={() =>
                  navigate(`/cars/${item.id}`, { state: { car: item } })
                }
              />
              <h3 className="text-white text-start text-[20px] mt-4">
                {item?.brand?.title}{" "}
                <span className="pl-[10px]">{item?.model?.name}</span>
              </h3>
              <h2 className="text-white text-[20px]">
                AED {item.price_in_aed} /{" "}
                <span className="text-gray-500 text-[17px]">
                  {item.price_in_aed_sale}
                </span>
              </h2>
              <span className="text-gray-500 pl-[10px]">per day</span>
              <div className="w-full flex justify-center gap-[25px] items-center mt-[5px]">
                <button className="bg-[#00C600] px-[20px] flex gap-1.5 items-center py-[10px] text-white rounded-[5px]">
                  <FaWhatsapp /> Whatsapp
                </button>
                <button className="bg-[#2727E0] px-[20px] py-[10px] flex gap-1.5 items-center text-white rounded-[5px]">
                  <RiTelegramFill /> Telegram
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CarsPage;
