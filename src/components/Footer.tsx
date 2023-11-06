import React from 'react'
import footer from '../public/ff.jpg'
import Image from 'next/image'
import { BsShieldFillExclamation } from 'react-icons/bs'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoLinkedin, BiLogoFacebookCircle } from 'react-icons/bi'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-black text-white w-full md:flex flex-col justify-center items-center'>

            <Image src={footer} width={260} height={260} alt='footer' className='w-full md:h-[280px] h-[420px]'></Image>

             <div className='absolute bottom-12 xl:bottom-16 m-4 w-full p-2 gap-64 xl:flex xl:w-[880px] xl:border-y'>

                <div className='md:flex gap-12 md:mx:auto md:text-xl items-center justify-center'>
                    <div className='flex flex-col justify-between my-3'>
                        <h1 className='font-bold'>Products</h1>
                        <p className='text-gray-400 text-sm pt-2'>SMART IO SERVICE</p>
                    </div>
                    <div className='flex flex-col justify-between my-3'>
                        <h1 className='font-bold'>Terms & Conditions</h1>
                        <p className='text-gray-400 md:w-44 w-[60%] text-sm pt-2'>Customization & Services Refund & Cancelation Policy</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1 className='font-bold'>Contact</h1>
                        <p className='text-gray-400 text-sm pt-2'>+92-3225025501</p>
                        <p className='text-blue-600 text-sm'>info@EzuSoft.com</p>
                    </div>
                </div>

                <div className='md:flex xl:mx-0 md:mx-36 xl:w-[740px] py-8'>
                    <div className='flex gap-2 text-white'>
                        <Link href="https://web.facebook.com/?_rdc=1&_rdr"> <BiLogoFacebookCircle size="25px" className=" hover:text-orange-600" /></Link>
                        <BiLogoLinkedin size="25px" className=" hover:text-orange-600" />
                        <Link href="https://twitter.com/home">
                            <AiOutlineTwitter size="25px" className=" hover:text-orange-600" />
                        </Link>
                        <AiOutlineInstagram size="25px" className=" hover:text-orange-600" />
                    </div>

                    {/* <div className='my-4'>
                            <Link href="/policies"><BsShieldFillExclamation size="25px" className="text-white hover:text-orange-500" /></Link>
                        </div> */}


                </div>


            </div>

            
                <h1 className='absolute m-6 md:left-[40%] bottom-4 text-gray-400 text-sm flex items-center justify-center'>&copy;2023 EzuSoft Corporation.All Rights Reserved</h1>
        


        </footer>
    )
}

export default Footer
