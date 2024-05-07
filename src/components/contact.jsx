import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <section className='my-10 mx-5 text-center '>
        <div className='text-center capitalize my-5 py-2 '>
            <h5 className='font-bold text-2xl ' >our shop</h5>
            <h1 className='font-bold text-xl text-wrap py-3'>go pre-order buy & Get Get prices for you!</h1>
            <p className='mb-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repudiandae nobis et, eum possimus vitae!</p>
            <Link to={'/'} className='bg-red-500 text-center py-2 px-5 rounded-xl text-white font-bold'>shop now</Link>
        </div>
        <div className='my-5 sm:text-center'>
            <h6 className='font-bold text-2xl capitalize'>newsletter</h6>
            <h2 className='text-2xl capitalize font-semibold '>get up to <strong>$100</strong> jsut buy <strong>subscribe</strong> newsletter!</h2>
            <form action="" className='my-5 flex justify-center'>

            <input type="text" placeholder='your email....' className=' w-1/2 py-2 border-2 border-black ' />
            <input type="submit" value="subscibe now"  className='bg-red-500 py-2 border-2 border-red-500 text-white font-bold  '/>
            </form>
        </div>
      </section>
    </div>
  )
}
