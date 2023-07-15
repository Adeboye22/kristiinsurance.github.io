import React from 'react';
import NavLoggedIn from './NavLoggedIn';
import Tabler from '../../assets/tabler_badge-filled.png'
import Car from '../../assets/material-symbols_directions-car-sharp.png'
import Star from '../../assets/ic_sharp-star-rate.png'
import Thumbs from '../../assets/mdi_thumbs-up.png'
import CarImg from '../../assets/Cars_lnd-scp_1.jpg'
import HouseImg from '../../assets/House_lnd-scp_1.jpg'


function Homepage() {
  return (
    <div className='flex flex-col gap-y-28'>
      <NavLoggedIn />
    {/* hero section */}
      <div className='hero bg-zinc-300 p-32 '>
        <h1 className='text-lg text-black text-center'>THE POTENCY OF INSURANCE INTEGRATION</h1>
      </div>
      {/* regulatory compliance section */}
      <div className=' bg-zinc-300 p-7  flex flex-row justify-around'>
        <div className=''>
          <div className='bg-white p2 w-7 h-7 rounded flex mx-14'><img src={Tabler} alt="" className='justify-self-center' /></div>
          <span className='block mt-7'>Regulatory Compliance</span>
        </div> 
        <div>
          <div className='bg-white p2 w-7 h-7 rounded flex mx-14'><img src={Car} alt="" className='justify-self-center' /></div>
          <span className='block mt-7'>Integrated Company</span>
        </div>
        <div>
          <div className='bg-white p2 w-7 h-7 rounded flex mx-14'><img src={Star} alt="" className='justify-self-center' /></div>
          <span className='block mt-7'>Exceptional User Experience</span>
        </div>
        <div>
          <div className='bg-white p2 w-7 h-7 rounded flex mx-14'><img src={Thumbs} alt="" className='justify-self-center' /></div>
          <span className='block mt-7'>Affordable Insurance </span>
        </div>
      </div>
      {/* who we are section */}
      <div className='bg-zinc-300 p-12 flex flex-col gap-4'>
        <h2 className='font-bold uppercase text-center'>Who We Are</h2>
        <p className='text-center'>Welcome to the modern insurance era. It won't be difficult, time-consuming, or interpersonal any more. To better protect you, your family, and your business, we are overhauling our customer service culture, how claims are handled, and the products we offer. We are doing this because our brand is well-known throughout the world.
        </p>
      </div>
      {/* what would you like to insure section */}
      <div className='bg-zinc-300 p-12'>
        <h2 className='font-bold uppercase text-center'>What would you like to insure?</h2>
        <div className='flex justify-between px-4 my-6'>
          <div className='text-center'>
            <div className='rounded-full bg-white w-56 h-56 overflow-hidden my-6'><img src={CarImg} alt='' className='w-full h-full object-cover' /></div>
            <span className='text-lg font-bold'>Automobile</span>
          </div>
          <div className='text-center'>
            <div className='rounded-full bg-white w-56 h-56 overflow-hidden my-6'><img src={HouseImg} alt="" className='w-full h-full object-cover' /></div>
            <span className='text-lg font-bold'>House</span>
          </div>
        </div>
      </div>
      {/* testimonial cards section */}
      <div className='bg-zinc-300 p-12'>
        <div className='bg-white '>
          <div><img src="" alt="" /></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Homepage;