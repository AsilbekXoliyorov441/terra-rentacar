import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Homecars = () => {
    const [cars, setCars] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [filteredCars, setFilteredCars] = useState([]);
    const navigate = useNavigate();
  
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
    }, []);
  
    // if (loading) return <p className="text-white text-center">Loading...</p>;
    // if (error) return <p className="text-red-500 text-center">{error}</p>;
  return (
    <div className='conatiner'>
     <div className="w-[1200px] min-h-[550px] m-auto flex-wrap flex justify-around gap-[25px]">
      {cars.length > 0 ? (
        cars.map((item) => (
          <div
            key={item.id}
            className="w-[310px] h-[400px] px-2 rounded-[10px] hover:bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] border-[#e5e7eb]"
          >
            <img
              src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images?.[0]?.image?.src}`}
              alt="Car"
              className="w-[90%] max-w-[100%] h-[200px] max-h-[200px] object-cover m-auto mt-[25px] rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => navigate(`/cars/${item.id}`, { state: { car: item } })}
            />
            <h3 className="text-white text-start text-[20px] mt-4">
              {item?.brand?.title}{" "}
              <span className="pl-[10px]">{item?.model?.name}</span>
            </h3>
            <hr className="text-[#fff] my-[25px]" />
            <h2 className="text-white text-[20px]">
              AED {item.price_in_aed} /{" "}
              <span className="text-gray-500 text-[17px]">{item.price_in_aed_sale}</span>
            </h2>
            <span className="text-gray-500 pl-[10px]">per day</span>
          </div>
        ))
      ) : (
        <p className="text-white text-center">No cars available.</p>
      )}
    </div>
    </div>
  )
}

export default Homecars