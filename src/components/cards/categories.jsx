import React from 'react'
import BannerCard from './Banner'
import { Adventure,Action,Casual,Puzzle,Simlator,Control } from '../matreials'

export default function Categories() {
  return (
    <section className='my-10 mx-5'>
      <h4 className='text-red-500 font-bold text-center text-2xl'>Categories</h4>
      <h2 className='text-4xl capitalize font-bold text-center py-5'>top categories</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className=' rounded-2xl'>
          <h3 className='bg-blue-700 hover:bg-red-400 py-5 text-center text-2xl capitalize'>action</h3>
          <div>

            <BannerCard img={Action} />
          </div>

        </div>
        <div className=' rounded-2xl'>
          <h3 className='bg-blue-700 hover:bg-red-400 py-5 text-center text-2xl capitalize'>adventue</h3>
          <div>

            <BannerCard img={Adventure} />
          </div>

        </div>
        <div className=' rounded-2xl'>
          <h3 className='bg-blue-700 hover:bg-red-400 py-5 text-center text-2xl capitalize'>mutiple battle area</h3>
          <div>

            <BannerCard img={Control} />
          </div>

        </div>
        <div className=' rounded-2xl'>
          <h3 className='bg-blue-700 hover:bg-red-400 py-5 text-center text-2xl capitalize'>casual</h3>
          <div>

            <BannerCard img={Casual} />
          </div>

        </div>
        <div className=' rounded-2xl'>
          <h3 className='bg-blue-700 hover:bg-red-400 py-5 text-center text-2xl capitalize'>simlator</h3>
          <div>

            <BannerCard img={Simlator} />
          </div>

        </div>
        <div className=' rounded-2xl'>
          <h3 className='bg-blue-700 hover:bg-red-400 py-5 text-center text-2xl capitalize'>puzzle</h3>
          <div>

            <BannerCard img={Puzzle} />
          </div>

        </div>
        
        
      
        
      </div>

    </section>
  )
}
