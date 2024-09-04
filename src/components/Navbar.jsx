import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = (props) => {
    const [nav, setNav] = useState(false)
  return (
    <div className={props.modal ? 'pt-12 blur-sm overflow-hidden' : 'pt-12 overflow-hidden'}>
        <div className='flex justify-between items-center mx-8'>
            <h1 className='font-semibold text-3xl'>.sdf</h1>
            <div className='hidden md:block'>
                <ul className='flex gap-7 text-sm'>
                    <li className='hover:cursor-pointer hover:text-[#69BD71] duration-200'>About</li>
                    <li className='hover:cursor-pointer hover:text-[#69BD71] duration-200'>Documentation</li>
                    <li className='hover:cursor-pointer hover:text-[#69BD71] duration-200'>How it works</li>
                </ul>
            </div>
            <div className='items-center gap-4 text-2xl hidden md:flex'>
                <IoIosSearch className='hover:cursor-pointer'/>
                <CiGlobe className='hover:cursor-pointer'/>
            </div>
            <div onClick={() => setNav(!nav)} className='hover:cursor-pointer md:hidden'>
               {!nav ? <IoClose className='text-2xl'/> : <IoIosMenu className='text-2xl'/>} 
            </div>
        </div>
        {!nav 
            ?
            <div className='overflow-hidden'>
                <div className='h-screen w-[50%] md:hidden bg-white absolute top-0 right-0'>
                    <IoClose className='text-black absolute right-2 top-5 mx-6 mt-8 text-2xl hover:cursor-pointer' onClick={() => setNav(!nav)}/>
                </div>
                
            </div>
            :
            <div className='overflow-hidden'>
                <div className='h-screen w-[50%] md:hidden hidden bg-white absolute top-0 right-0'>
                    <IoClose className='text-black absolute right-2 top-5 mx-6 mt-8 text-2xl hover:cursor-pointer' onClick={() => setNav(!nav)}/>
                </div>
                
            </div>}
    </div>
  )
}

export default Navbar