import React from 'react'
import maped from '../../assets/uslug-1-Dm8nxdJt.jpg';
import rasm from '../../assets/uslug-2-LkBjqsZl.jpg';

const ServicePage = () => {
  return (

      <section className='bg-[#1e1f27] h-full w-full pt-[90px] pb-[90px]'>
        <div className='container mx-auto px-5'>
          <a href="/" className='text-[14px] text-[#fff9]'>
            <p className='text-center sm:text-left'>Luxury Cars for Rent in Dubai / Serveces</p>
          </a>
          <h3 data-v-0347924f="" class="text-white text-[22px] text-center sm:text-left sm:text-[36px] py-[40px] font-semibold">SERVICES</h3>
          <div className='flex flex-wrap gap-6'>
            <div className='p-2 md:w-[360px]'>
              <img src={maped} alt="" className='mx-auto md:mx-0' />
              <h4 className='text-white text-[24px] my-[25px] font-semibold leading-[100%]'>Ride a buggy in Dubai and have fun</h4>
              <p className='text-white text-[18px] leading-[100%] mb-[40px]'>Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up &amp; drop-off service. Book now</p>
              <a href="/services" className=' flex items-center justify-evenly w-[200px] hover:ml-4 transition-all duration-700'>
                <p className='text-white font-bold'>LEARN MORE</p>
                <img data-v-0347924f="" src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2010L21%2016.5L13%2023L17.5714%2016.5L13%2010Z'%20fill='white'%3e%3c/path%3e%3ccircle%20cx='16'%20cy='16'%20r='15.5'%20stroke='white'%3e%3c/circle%3e%3c/svg%3e" alt="" />
              </a>
            </div>
            <div className='p-2 md:w-[360px]'>
              <img src={rasm} alt="" className='mx-auto md:mx-0' />
              <h4 className='text-white text-[24px] my-[25px] font-semibold leading-[100%]'>Photoshoot with luxury car rental Dubai</h4>
              <p className='text-white text-[18px] leading-[100%] mb-[40px]'>
                Professional car photoshoot as an additional type of service at Terra Car Rental
              </p>
              <a href="" className='flex items-center justify-evenly w-[200px] hover:ml-4 transition-all duration-700'>
                <p className='text-white font-bold'>LEARN MORE</p>
                <img src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2010L21%2016.5L13%2023L17.5714%2016.5L13%2010Z'%20fill='white'%3e%3c/path%3e%3ccircle%20cx='16'%20cy='16'%20r='15.5'%20stroke='white'%3e%3c/circle%3e%3c/svg%3e" alt="" />
              </a>
            </div>
          </div>
        </div>

      </section>
  )
}

export default ServicePage