import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Locations() {
    const Forimage = "https://realauto.limsa.uz/api/uploads/images";
    const [locations, setLocations] = useState([]);
  
    useEffect(() => {
    axios
      .get("https://realauto.limsa.uz/api/locations")
      .then((response) => {
      setLocations(response?.data?.data);
    })
    .catch((error) => {
       console.error("Error fetching brands:", error);
    });
    }, []);
    console.log(locations?.data);
    

  return (
    <div>
        <section id='locations' className='container max-w-screen mx-auto py-8 bg-[#1E1F27]'>
          <div className='max-w-[1200px] mx-auto px-5'>  
          <div className='flex gap-8'> 
          <div className='flex flex-col gap-2'>
          <h1 className='text-white text-3xl pb-4'>LOCATION</h1>
            {
              locations.map((location) => (
                <div key={location?.id}>
                        <p className='text-[#A5A593] flex'>{location?.text}</p>
                        <p className='text-[#A5A593] flex'>{location?.name}</p>
                    </div>
                ))
              }
          </div>
          <div className='flex flex-col gap-2'>
          <h1 className='text-white text-3xl pb-4'>CITY</h1>
            {
                locations.map((location) => (
                    <div key={location?.id}>
                        <p className='text-[#A5A593] flex'>{location?.text}</p>
                        <p className='text-[#A5A593] flex'>{location?.name}</p>
                    </div>
                ))
            }
          </div>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Locations