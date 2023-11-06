"use client";

import Link from 'next/link'
// import styles from '@/app/styles/navbar.module.css'
import React, { useState } from 'react'
import {CgMenu , CgCloseR} from 'react-icons/cg'

const Nav = () => {

  const [openMenu,setOpenMenu] = useState(false);

  console.log("value " + openMenu)

  return (
    <nav className="relative flex justify-center items-center p-3">
      <div className="w-full">
        <ul className="md:flex hidden items-center content-center gap-16">
            <li className='grid place-items-center h-[100%]'>
                <Link className="font-sans text-white font-bold text-md xl:text-xl" href="/" onClick={() => setOpenMenu(false)}>Home</Link>
            </li>
        

        
            <li className="grid place-items-center h-[100%]">
                <Link className="font-sans text-white font-bold text-md xl:text-xl" href="/about" onClick={() => setOpenMenu(false)}>About</Link>
            </li>
        

        
            <li className="grid place-items-center h-[100%]">
                <Link className="font-sans text-white font-bold text-md xl:text-xl" href="/catering" onClick={() => setOpenMenu(false)}>Catering-Service</Link>
            </li>
       

        
            <li className="grid place-items-center h-[100%]">
                <Link className="font-sans text-white font-bold text-md xl:text-xl" href="/contact" onClick={() => setOpenMenu(false)}>Contact Us</Link>
            </li>
        </ul>


            {/*Mobile Responsive */}
        <ul className={`md:hidden absolute top-8 z-50 bg-black w-32  border items-center content-center gap-16 ${openMenu ? 'right-0' : 'hidden'}`}>
            <li className='grid place-items-center h-[100%] m-2'>
                <Link className="font-sans text-orange-900 font-bold text-xl" href="/" onClick={() => setOpenMenu(false)}>Home</Link>
            </li>
        

        
            <li className="grid place-items-center h-[100%] m-2 z-10">
                <Link className="font-sans text-orange-900 font-bold text-xl" href="/about" onClick={() => setOpenMenu(false)}>About</Link>
            </li>
        

        
            <li className="grid place-items-center h-[100%] m-2">
                <Link className="font-sans text-orange-900 font-bold text-xl" href="/catering" onClick={() => setOpenMenu(false)}>Catering</Link>
            </li>
       

        
            <li className="grid place-items-center h-[100%] m-2">
                <Link className="font-sans text-orange-900 font-bold text-xl" href="/contact" onClick={() => setOpenMenu(false)}>Contact Us</Link>
            </li>
        </ul>
        <div className="md:hidden">
            {openMenu ?
              <CgCloseR name='close-outline' className="text-white h-8 w-8"onClick={() => setOpenMenu(false)}/> 
              :   
              <CgMenu name='menu-outline' className="text-white h-8 w-8"   onClick={() => setOpenMenu(true)}/>}
          
           
        </div>
      </div>
    </nav>
  )
}

export default Nav
