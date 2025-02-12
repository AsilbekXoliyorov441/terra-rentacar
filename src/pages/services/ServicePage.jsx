import React from 'react'
import maped from '../../assets/uslug-1-Dm8nxdJt.jpg';

const ServicePage = () => {
  return (
    <div className='bg-[#1e1f27] h-full w-full'>
      <div>
        <a href="/" className='text-[14px] text-[#fff9]'>
          <p className='text-center sm:text-left'>Luxury Cars for Rent in Dubai / Serveces</p>
        </a>
        <h3 data-v-0347924f="" class="text-white text-[22px] text-center sm:text-left sm:text-[36px] py-[40px] font-semibold">SERVICES</h3>
        <div className='flex flex-wrap gap-6'>
          <div>
            <img src={maped} alt="" className='mx-auto'/>
          </div>
          <div></div>
        </div>
      </div>

    </div>
  )
}

export default ServicePage