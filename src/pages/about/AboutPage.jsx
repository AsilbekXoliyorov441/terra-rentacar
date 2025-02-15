import React from 'react';
import dc from '../../assets/mm34-DCy6GvLS.png';

const AboutPage = () => {
  return (
    <section className=''>
      <div className='relative m-auto'>
        <img src={dc} alt="" className='lg:flex w-full h-full absolute opacity-30 top-0' />
        <div className='container m-auto relative text-white text-center sm:text-left py-[25px] sm:py-[50px] px-2'>
          <a href="/" class="text-[#fff9]">Luxury Cars for Rent in Dubai / aboutUs</a>
          <h3 class="text-[26px] sm:text-[32px] font-semibold my-[15px] sm:my-[50px]">ABOUT US</h3>
          <h4 class="text-[22px] sm:text-[30px]">Welcome to Auto Zoom Car Rental Co LLC – Your Partner in Unforgettable Journeys in Dubai!</h4>
          <p class="text-[#cacaca] text-[19px] sm:mb-[50px] mt-[15px]">In a world where every trip is an adventure, Auto Zoom Car Rental Co LLC offers you a unique car rental experience in the heart of Dubai.</p>
          <h3 class="text-[26px] sm:text-[32px] font-semibold mt-[20px] sm:mt-[50px] mb-[30px]">Why Auto Zoom?</h3>
          <article class="flex flex-col gap-7">
            <div class="txt-con leading-[30px]">
              <h3 class="text-[22px] font-bold inline-block mr-[5px]">Elegant Car Fleet:</h3>
              <p class="inline text-[#d8d8d8] text-[18px] font-normal">We provide you the opportunity to choose from our luxurious car fleet – from sleek sedans to powerful SUVs. We have a vehicle to match your style and meet your needs.
              </p>
            </div>
            <div class="txt-con leading-[30px]">
              <h3 class="text-[22px] font-bold inline-block mr-[5px]">Worry-Free Rental:
              </h3>
              <p class="inline text-[#d8d8d8] text-[18px] font-normal">Our goal is to make your journey as comfortable as possible. Flexible rental terms, the option to hire with a driver, and a wide range of additional services – all for your convenience.
              </p>
            </div>
            <div class="txt-con leading-[30px]">
              <h3 class="text-[22px] font-bold inline-block mr-[5px]">Transparency and Trust:
              </h3>
              <p class="inline text-[#d8d8d8] text-[18px] font-normal">We value every customer, so our prices are honest and transparent. No hidden fees, no unexpected surprises. Trust us, and we will make your rental experience straightforward and clear.
              </p>
            </div>
            <div class="txt-con leading-[30px]">
              <h3 class="text-[22px] font-bold inline-block mr-[5px]">Service at Your Level:
              </h3>
              <p class="inline text-[#d8d8d8] text-[18px] font-normal">Our friendly and professional team is ready to bring your ideas to life. We aim not just to provide a car but to create a genuine automotive experience for you.
              </p>
            </div>
          </article>
          <h5 class="text-[22px] font-bold mt-[30px] sm:mt-[100px]">Our Mission:</h5>
          <p class="mt-2 text-[18px]">Auto Zoom Car Rental Co LLC is created with one goal – to make every journey unforgettable. We strive to offer you not just a car but the key to new experiences and adventures.</p>
          <h5 class="text-[22px] font-bold mt-[15px]">Contact Us:</h5>
          <p class="mt-2 text-[18px]">Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get in touch with us today to start your exciting journey through Dubai in our stylish and reliable cars. Allow yourself to savor every moment of your trip.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage