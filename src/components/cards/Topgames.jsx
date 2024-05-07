import React from 'react'
import BannerCard from './Banner'
import { Link } from 'react-router-dom'
import { FREEFIRE,PUBG,CLASHQUAED,CALLOFDUTY } from '../matreials'
export default function Topgames() {
  return (
    <section className='my-20 mx-5'>
        <h4 className='text-2xl font-bold text-center capitalize'>top games</h4>
        <h2 className='text-4xl font-bold capitalize text-center py-3'>most played</h2>
<div className='my-10 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4'>
    <div>
<div className=' rounded-2 shadow-2xl'>

      <BannerCard img={FREEFIRE}
      alt="img"
      />
      </div>
      <div className='text-center my-3 py-2'>
        <p className='text-xl font-bold py-2'>adventure</p>
        <h4 className='text-3xl capitalize mb-3 font-bold text-blue-800'>assasin creed</h4>
        <Link className='bg-blue-800 hover:bg-red-500 transition-shadow capitalize px-8 py-2 text-white font-bold text-xl rounded-xl '>explore</Link>
      </div>
    </div>
    <div>
<div className=' rounded-2 shadow-2xl'>

      <BannerCard img={PUBG}
      alt="img"
      />
      </div>
      <div className='text-center my-3 py-2'>
        <p className='text-xl font-bold py-2'>adventure</p>
        <h4 className='text-3xl capitalize mb-3 font-bold text-blue-800'>assasin creed</h4>
        <Link className='bg-blue-800 hover:bg-red-500 transition-shadow capitalize px-8 py-2 text-white font-bold text-xl rounded-xl '>explore</Link>
      </div>
    </div>
    <div>
<div className=' rounded-2 shadow-2xl'>

      <BannerCard img={CLASHQUAED}
      alt="img"
      />
      </div>
      <div className='text-center my-3 py-2'>
        <p className='text-xl font-bold py-2'>adventure</p>
        <h4 className='text-3xl capitalize mb-3 font-bold text-blue-800'>assasin creed</h4>
        <Link className='bg-blue-800 hover:bg-red-500 transition-shadow capitalize px-8 py-2 text-white font-bold text-xl rounded-xl '>explore</Link>
      </div>
    </div>
    <div>
<div className=' rounded-2 shadow-2xl'>

      <BannerCard img={CALLOFDUTY}
      alt="img"
      />
      </div>
      <div className='text-center my-3 py-2'>
        <p className='text-xl font-bold py-2'>adventure</p>
        <h4 className='text-3xl capitalize mb-3 font-bold text-blue-800'>assasin creed</h4>
        <Link className='bg-blue-800 hover:bg-red-500 transition-shadow capitalize px-8 py-2 text-white font-bold text-xl rounded-xl '>explore</Link>
      </div>
    </div>
</div>
    </section>
  )
}
