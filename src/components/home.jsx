import React from 'react'
import Layout from './layout'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Cards from './cards/page'



export default function Home() {
    return (
        <>
        <div className='bg-sky-600 h-auto w-full   overflow-x-hidden'>
            <Layout />
            <main className=' my-10'>
                <section className='mx-2 my-20 '>
                    <article className='grid grid-cols-1 md:grid-cols-2 lg:gap-0  gap-10 justify-center   items-center text-center  '>
                        <div className='  lg:w-4/5 p-5 capitalize text-white text-center'>

                            <h1 className='text-2xl  font-bold'>welcome to lugx</h1>
                            <h1 className='font-bold text-5xl py-5'>best gaming site <span>ever!</span></h1>
                            <p >LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
                            <div className='my-6 flex rounded-2xl    '>
                                <input className='px-4 py-3 sm:border-2 border-black  lg:px-20 md:px-10  border-none ' list="items" placeholder='type somthing' />
                                <button className='bg-red-600 py-0 px-6 lg:px-10 sm:rounded-e-3xl font-bold   '>search now</button>
                            </div>
                        </div>
                        <div className=' relative'>
                            <img className='  w-11/12 h-auto xl:h-1/2 xl:w-1/2    rounded-lg mx-auto  object-contain   '
                            src="https://i.pinimg.com/564x/11/b0/03/11b0031de0bb0d5e9174fc0e02a42110.jpg" alt="" />
                            <div className='flex justify-between hidden'>
                                <h5 className=' absolute top-10 left-10 ring-2 rounded-full px-5  font-bold text-2xl  '>-40%</h5>
                                <h5 className='absolute bottom-10 right-10 ring-2 rounded-full  px-8 text-white font-bold text-2xl'>$ 22</h5>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
        <section className='my-10 '>
<Cards/>
</section>
        </>
    )
}
