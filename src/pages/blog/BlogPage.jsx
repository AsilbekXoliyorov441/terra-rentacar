import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const BlogPage = () => {
  return (
    <section className="container mx-auto px-[20px] pt-[30px] pb-[60px]">
      <div>
        <Link to="/" className="text-[#A5A5A9]">
          <p className="pl-6 pt-7 text-[#A5A5A9]">
            Luxury Cars for Rent in Dubai / Blog
          </p>
        </Link>
        <h1 className="text-[#FFF] text-3xl pt-10 pl-6 font-sans">Blog</h1>
        <div>
          <div className="container">
            <a className="  mt-8 flex flex-col md:gap-[20px]  shadow-sm md:flex-row p-[20px] items-center bg-[#272933]">
              <img
                className="w-full md:max-w-[300px]"
                loading="lazy"
                src="https://terra-rentacar.netlify.app/assets/blog-1-CqRaJa1U.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between mt-[20px] md:mt-0  leading-normal">
                <h5 className=" text-[24px]   lg:text-[36px] font-medium tracking-tight text-white">
                  Top 3 Destinations to Visit in Dubai in a Rental Car
                </h5>
                <p className="mb-3 text-[16px] mt-[10px] md:mt-0 lg:text-[20px] font-normal text-white max-w-6xl">
                  One of the main reasons to hire a car in Dubai is the quality
                  of the UAE roads. According to the World Economic Forum, the
                  Emirates belong to the top seven countries with the most
                  exemplary road infrastructure.
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-white pt-7">25 Seb 2022</p>
                  <NavLink to="/blog/singleblog">
                    <i
                      style={{ color: "white", fontSize: "30px" }}
                      className="fa-solid fa-circle-chevron-right"
                    ></i>
                  </NavLink>
                </div>
              </div>
            </a>
            <a className="  mt-8 flex flex-col md:gap-[20px]  shadow-sm md:flex-row p-[20px] items-center bg-[#272933]">
              <img
                className="w-full md:max-w-[300px]"
                loading="lazy"
                src="https://terra-rentacar.netlify.app/assets/blog-2-BV6fNMEe.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between mt-[20px] md:mt-0  leading-normal">
                <h5 className="text-[24px]   lg:text-[36px] font-medium tracking-tight text-white">
                  Top 5 wonderful spots for a car photo session in Dubai
                </h5>
                <p className="mb-3 text-[16px] mt-[10px] md:mt-0 lg:text-[20px] font-normal text-white max-w-6xl">
                  There are so many wonderful things to do in Dubai, but when
                  you rent a car your opportunities are nearly doubled. The
                  number of places you will die to go to and make memorable
                  pictures is such that it makes you impossible to resist to
                  hire a mode of transportation, if not for a day or two, then
                  at least for a couple of hours. And, while doing so, who could
                  prove against the weakness of taking a photo of themselves
                  inside or near the car they’ve rented?
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-white pt-7">11 Feb 2022</p>
                  <NavLink to="/blog/singleblog2">
                    <i
                      style={{ color: "white", fontSize: "30px" }}
                      className="fa-solid fa-circle-chevron-right"
                    ></i>
                  </NavLink>
                </div>
              </div>
            </a>
            <a className="   mt-8 flex flex-col md:gap-[20px]  shadow-sm md:flex-row p-[20px] items-center bg-[#272933]">
              <img
                className="w-full md:max-w-[300px]"
                loading="lazy"
                src="https://terra-rentacar.netlify.app/assets/blog-3-BRfPXlF4.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between mt-[20px] md:mt-0  leading-normal">
                <h5 className="text-[24px]   lg:text-[36px] font-medium tracking-tight text-white">
                  Top 5 wonderful spots for a car photo session in Dubai
                </h5>
                <p className="mb-3 text-[16px] lg:text-[20px] font-normal text-white max-w-6xl mt-[10px] md:mt-0">
                  There are so many wonderful things to do in Dubai, but when
                  you rent a car your opportunities are nearly doubled. The
                  number of places you will die to go to and make memorable
                  pictures is such that it makes you impossible to resist to
                  hire a mode of transportation, if not for a day or two, then
                  at least for a couple of hours. And, while doing so, who could
                  prove against the weakness of taking a photo of themselves
                  inside or near the car they’ve rented?
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-white pt-7">11 Feb 2022</p>
                  <NavLink to="/blog/singleblog3">
                    <i
                      style={{ color: "white", fontSize: "30px" }}
                      className="fa-solid fa-circle-chevron-right"
                    ></i>
                  </NavLink>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BlogPage);
