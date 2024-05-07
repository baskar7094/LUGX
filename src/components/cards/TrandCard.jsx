import React from 'react'
import BannerCard from './Banner'

import { PUBG,Mincratf,CALLOFDUTY,GTA5,CLASHQUAED,LING } from '../matreials'


export default function TrandCard() {
  return (
    <div>
      <section className='mx-5 my-10 '>
        <div className='py-5'>
            <h4 className='text-red-500 font-bold capitalize text-xl text-center'>trending</h4>
            <h2 className='text-4xl font-bold capitalize text-center py-5'>trending games</h2>
           <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 '>

            <div className='' >
                <div className='w-full h-fit'>

                <BannerCard
                img={PUBG} alt={'pubg img'} />
                </div>
            
                <div className='flex justify-between items-center mx-5 py-5'>
                    <div className=' capitalize'>
                          <p>action</p>  
                          <h4 className='font-bold text-xl'>assasin creed</h4>
                    </div>
                    <span><i className='bi bi-bag text-3xl'></i></span>
                </div>
            </div>
            <div >
                <BannerCard
                img={CALLOFDUTY} alt={'call of dtty img'}/>
                <div className='flex justify-between items-center mx-5 py-5'>
                    <div className=' capitalize'>
                          <p>action</p>  
                          <h4 className='font-bold text-xl'>assasin creed</h4>
                    </div>
                    <span><i className='bi bi-bag text-3xl'></i></span>
                </div>
            </div>
            <div >
                <BannerCard
                img={CLASHQUAED} alt={'clashquad img'} />
                <div className='flex justify-between items-center mx-5 py-5'>
                    <div className=' capitalize'>
                          <p>action</p>  
                          <h4 className='font-bold text-xl'>assasin creed</h4>
                    </div>
                    <span><i className='bi bi-bag text-3xl'></i></span>
                </div>
            </div>
            <div >
                <BannerCard
                img={GTA5} alt={'gta-5 img'}/>
                <div className='flex justify-between items-center mx-5 py-5'>
                    <div className=' capitalize'>
                          <p>action</p>  
                          <h4 className='font-bold text-xl'>assasin creed</h4>
                    </div>
                    <span><i className='bi bi-bag text-3xl'></i></span>
                </div>
            </div>
            <div  className='  ' >
                <BannerCard
                img={Mincratf} alt={'Minicraft img'} />
                <div className='flex justify-between items-center mx-5 py-5'>
                    <div className=' capitalize'>
                          <p>action</p>  
                          <h4 className='font-bold text-xl'>assasin creed</h4>
                    </div>
                    <span><i className='bi bi-bag text-3xl'></i></span>
                </div>
            </div>
            <div  className='  ' >
                <BannerCard
                img={LING} alt={'ling game img'} />
                <div className='flex justify-between items-center mx-5 py-5'>
                    <div className=' capitalize'>
                          <p>action</p>  
                          <h4 className='font-bold text-xl'>assasin creed</h4>
                    </div>
                    <span><i className='bi bi-bag text-3xl'></i></span>
                </div>
            </div>
                 </div>
        </div>
      </section>
    </div>
  )
}
