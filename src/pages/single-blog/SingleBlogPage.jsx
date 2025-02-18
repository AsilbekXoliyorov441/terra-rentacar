import React from "react";
import { Link, NavLink } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <div>
      <section className="bg-[#1E1F27] mx-auto">
        <div className="text-white min-h-screen p-6">
          <div className="mb-20">
            <div className="container mx-auto px-[20px]">
              <NavLink to="/" className="text-[#8FA5A9]">
                Luxory Cars for Dubai
              </NavLink>
              <Link to="/blog">/ Blog</Link>
              <Link to="/blog/singleblog">
                {" "}
                / Top 5 Reasons to Rent a Car Dubai
              </Link>
            </div>
          </div>
          <div className="container mx-auto px-[20px]">
            <h1 className="text-2xl md:text-5xl font-bold mb-12">
              TOP 3 DESTINATIONS TO VISIT FROM DUBAI IN A RENTAL CAR
            </h1>
            <p className="mx-auto mb-6 text-gray-300">
              One of the main reasons to hire a car in Dubai is the quality of
              the UAE roads. According to the World Economic Forum, the Emirates
              belong to the top seven countries with the most exemplary road
              infrastructure. All the roads and carriageways are constantly
              maintained and looked after, and their excellent condition is the
              result of a special government program.This is why driving from
              Dubai to far away destinations seems so exciting and thrilling!
              And if you are fond of new experiences and adventure, your Dubai
              holiday will not be complete without visiting a few fascinating
              UAU districts.
            </p>
            <p className="pb-5">Abu-Dhabi</p>
            <img
              src="https://terra-rentacar.netlify.app/assets/blog-1-CqRaJa1U.jpg"
              alt="Image of Abu Dhabi"
              loading="lazy"
              className="w-full mb-5 md:w-full object-cover object-bottom h-[500px]"
            />
            <p className="text-gray-300 mt-2">
              If the combination of adventure and history is one of your
              personal weaknesses, then Hatta should never be off your list of
              primary destinations. A journey that takes only a couple of hours
              will bring you to a noticeably cooler mountainous climate. Thanks
              to its high-altitude location among the beautiful Hajar Mountains,
              the sense of space and release you will feel here after the
              suffocating heat of Dubai is what you really need for a change and
              fresh impressions.This trip will broaden your Emirates experience
              as it lets you to explore an absolutely different area with
              remarkable features that include, but not limit to the greenness
              of the vast Wadi Hatta Park, the enormity of the world's largest
              inclined mural, the birdlife diversity of the Swan Lake, and a
              grand spaciousness of Hatta Dam offering everyone to take an
              active part in various watersport experiences. It would be a
              gorgeous bonus if you try to extend your visit with an overnight
              stay in one of the Hatta hotels, motels, and resorts. This will
              save you from a sense of missed opportunities and allow you to
              enjoy the lavish local hospitality and its distinctive cuisine.
              Treat yourself with memorable outdoor activities such as a
              mountainous hiking and biking, a thrilling paragliding flight over
              endemic peaks, valleys and plateaus, or take an insightful tour to
              the marvelous Honeybee Garden and Discovery Center.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
