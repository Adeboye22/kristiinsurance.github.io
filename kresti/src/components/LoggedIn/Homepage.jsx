import React from 'react';
import NavLoggedIn from './NavLoggedIn';
import Tabler from '../../assets/tabler_badge-filled.png'
import Car from '../../assets/material-symbols_directions-car-sharp.png'
import Star from '../../assets/ic_sharp-star-rate.png'
import Thumbs from '../../assets/mdi_thumbs-up.png'


function Homepage() {
  return (
    <div className='flex flex-col gap-y-28'>
      <NavLoggedIn />
      <div className='hero bg-zinc-300 p-32 '>
        <h1 className='text-lg text-black text-center'>THE POTENCY OF INSURANCE INTEGRATION</h1>
      </div>
      <div className='regCompliance bg-zinc-300 p-7  flex flex-row justify-around'>
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
      <div className='whoWeAre bg-zinc-300 p-12 flex flex-col gap-4'>
        <h2 className='font-bold uppercase text-center'>Who We Are</h2>
        <p className='text-center'>Welcome to the modern insurance era. It won't be difficult, time-consuming, or interpersonal any more. To better protect you, your family, and your business, we are overhauling our customer service culture, how claims are handled, and the products we offer. We are doing this because our brand is well-known throughout the world.
        </p>
      </div>
      <div className='insure bg-zinc-300 p-12'>
        <img src="" alt="" /><img src="" alt="" />
      </div>
    </div>
  )
}

export default Homepage;