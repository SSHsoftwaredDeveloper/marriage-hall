import React from 'react'
// import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import logoMH from '../public/logoMH.png'

const Header = () => {
  return (
    <header className="w-full bg-black flex justify-center items-center">
     
      <div className="border m-4 mx-12 xl:mx-32 w-full flex justify-between ">
        <div className='p-3'>
        <Link href="/">
          <Image src={logoMH} width={180} height={180} alt='logo'className='md:w-24 w-16 h-8 md:h-12' />
        </Link>
        </div>
         <Nav/>
      </div>
     
    </header>
  )
}

export default Header
