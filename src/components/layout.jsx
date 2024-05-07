import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <nav className='flex  justify-between items-center   fixed bg-sky-600   w-full  px-4 py-5 lg:px-10'>

                <Link to={'/'} className=' '>


                    <img className='w-32 sm:w-40 h-auto object-cover'
                        src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/logo.png" alt="" /></Link>

                <button className='mr-6 sm:mr-8 sm:py-1 md:hidden'>
                    <span><i className='   bi bi-list    font-bold text-white hover:shadow-2xl text-4xl sm:text-5xl '></i></span>
                </button>

                <div className='hidden lg:flex lg:justify-end md:static  absolute top-20 left-0 text-center md:bg-sky-600 bg-slate-200 w-screen h-64 md:h-fit shadow-2xl md:shadow-none shadow-black '>

                    <ul className='flex flex-col lg:flex-row lg:justify-end items-center    gap-3 lg:gap-10 text-white py-5 text-2xl lg:text-3xl font-bold capitalize '>

                        <li className='py-1'>
                            <Link className='hover:border-b-2 border-red-500 '>home</Link>
                        </li>

                        <li>
                            <Link className='hover:border-b-2 border-red-500'>our shop</Link>
                        </li>
                        <li>
                            <Link className='hover:border-b-2 border-red-500'>product details</Link>
                        </li>
                        <li>
                            <Link className='hover:border-b-2 border-red-500'>contact us</Link>
                        </li>
                        <li>
                            <Link className='hover:border-b-2 border-red-500'>sign in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
