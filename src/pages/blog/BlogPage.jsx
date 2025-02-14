import { memo } from 'react'
import { Link } from 'react-router-dom'

const BlogPage = () => {

  return (
    <section className='py-4'>
      <div className='container w-full mx-auto bg-[#1E1F27]'>
       <Link to="/" className='text-[#A5A5A9]'>
         <p className='pl-6 pt-7'>Luxury Cars for Rent in Dubai / Blog</p>
       </Link>
       <h1 className='text-[#FFFF] text-3xl pt-10 pl-6 font-sans'>Blog</h1>
       <div>   
        <div>
       <a className="max-w-[1480px] ml-6 pb-7 mt-8 flex flex-col items-center pl-1.5 shadow-sm md:flex-row bg-[#272933]">
        <img className="min-h-63 w-58 ml-6" loading='lazy' src="https://terra-rentacar.netlify.app/assets/blog-1-CqRaJa1U.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 ml-6 leading-normal">
        <h5 className="mb-20 text-5xl font-medium tracking-tight dark:text-white">Top 3 Destinations to Visit in Dubai in a Rental Car</h5>
        <p className="mb-3 text-[20px] font-normal text-white max-w-6xl">One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.</p>
     <div className='flex items-end justify-between'>
      <p className='text-white pt-7'>25 Seb 2022</p>
      <img className=' ' src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2010L21%2016.5L13%2023L17.5714%2016.5L13%2010Z'%20fill='white'%3e%3c/path%3e%3ccircle%20cx='16'%20cy='16'%20r='15.5'%20stroke='white'%3e%3c/circle%3e%3c/svg%3e" alt="" />
     </div>
     </div>
     </a>
       <a className="max-w-[1480px] ml-6 pb-7 flex flex-col items-cente pl-1.5 shadow-sm md:flex-row bg-[#272933]">
        <img className="min-h-63 w-58 ml-6" loading='lazy' src="https://terra-rentacar.netlify.app/assets/blog-2-BV6fNMEe.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 ml-6 leading-normal">
        <h5 className="mb-9 text-5xl font-medium tracking-tight text-white">Top 5 wonderful spots for a car photo session in Dubai</h5>
        <p className="mb- text-[20px] font-normal text-white max-w-6xl">There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?
</p>
     <div className='flex items-end justify-between'>
      <p className='text-white pt-7'>11 Feb 2022</p>
      <img className=' hover:scale-3d' src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2010L21%2016.5L13%2023L17.5714%2016.5L13%2010Z'%20fill='white'%3e%3c/path%3e%3ccircle%20cx='16'%20cy='16'%20r='15.5'%20stroke='white'%3e%3c/circle%3e%3c/svg%3e" alt="" />
     </div>
     </div>
     </a>
       <a className="max-w-[1480px] ml-6 flex flex-col items-center pl-1.5 shadow-sm md:flex-row bg-[#272933]">
        <img className="min-h-63 w-58 ml-6" loading='lazy' src="https://terra-rentacar.netlify.app/assets/blog-3-BRfPXlF4.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 ml-6 leading-normal">
        <h5 className="mb-9 text-5xl font-medium tracking-tight text-white">Top 5 wonderful spots for a car photo session in Dubai</h5>
        <p className="mb- text-[20px] font-normal text-white max-w-6xl">There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?
</p>
     <div className='flex items-end justify-between'>
      <p className='text-white pt-7'>11 Feb 2022</p>
      <img className='' src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2010L21%2016.5L13%2023L17.5714%2016.5L13%2010Z'%20fill='white'%3e%3c/path%3e%3ccircle%20cx='16'%20cy='16'%20r='15.5'%20stroke='white'%3e%3c/circle%3e%3c/svg%3e" alt="" />
     </div>
     </div>
     </a>
      </div>      
      </div>
     </div>
    </section>
  )
}

export default memo(BlogPage)