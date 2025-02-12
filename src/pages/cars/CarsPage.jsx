import React from "react";
import { Link } from "react-router-dom";

const CarsPage = () => {
  return (
    <div className="container w-full  min-h-[680px] border-red m-auto flex pl-[5px] ">
      {/* <Link className='text-blue-700' to={`/cars/1`}>CarLink</Link> */}

      <div className="w-[350px] h-[640px] bg-[#272933] relative top-[30px] pt-[35px] pl-[30px] pr-[30px] ">

          <div className="w-[200px] h-[50px]">
            <img src="public/cars/TerraAvto-CveSQ9CU.png" alt="" className="w-full" />
          </div>

            <h2 className="text-[#fff] text-[25px] font-[700] ">
            Filter By <br />
            <span className="font-[350]">Offers</span>
            </h2>

            <hr className="text-[#d6d1d1] mt-[25px]" />

            <form action="">
              <p className="text-[#fff] mt-[20px] mb-[20px]">Car type</p>

              <div className="flex items-center text-[#fff] gap-[15px]">
                <input type="checkbox" />
                <p className="uppercase">ererebekaaa</p>
              </div>

            </form>

            <hr className="text-[#d6d1d1] mt-[25px]" />

            <form action="">
              <p className="text-[#fff] mt-[20px] mb-[20px]">Brand</p>

              <div className="flex items-center text-[#fff] gap-[15px]">
                <input type="checkbox" />
                <p className="uppercase">BMW-X5</p>
              </div>

            </form>
             
            <div className="w-full">
            
            <p className="text-[#fff] mt-[20px] mb-[20px]">Car type</p>

            <select name="" id="" className="w-[100%] h-[45px] bg-amber-50 outline rounded-[5px]">
              <option value="">
                Select at model
              </option>
             </select>

            <div className="w-full mt-[25px] flex gap-[25px] justify-between">
             
              <button className="pt-[10px] pb-[10px] pl-[25px] pr-[25px] text-[#fff] border-2 border-white rounded-[4px] cursor-pointer">Reset</button>
              
              <button className="pt-[10px] pb-[10px] pl-[35px] pr-[25px] bg-[#009A00] rounded-[4px] text-[#fff] cursor-pointer">Apply filter</button>

            </div>

            </div>

      </div>
    </div>
  );
};

export default CarsPage;
