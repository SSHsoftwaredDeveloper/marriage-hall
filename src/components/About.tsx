import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='xl:w-[1024px] w-full flex flex-col m-6'>
            <div className='m-4 flex flex-col justify-center items-center'>
                <h1 className='md:text-8xl text-3xl text-neutral-700'>About Us</h1>
                <p className='text-neutral-500 text-center mt-8'>
                    Venue Bazaar is a platform where you can advertise your Venue details in reasonable price, you can also show your Venues images, Location, facilities and booking dates.
                </p>
                <p className='text-neutral-500 text-center'>
                    Here you can also find Venues with ease, either it is for hangout or any family event
                </p>
            </div>

            <div className='m-4 flex flex-col justify-center items-center'>
                <h1 className='md:text-8xl text-3xl text-neutral-700'>Our Approach</h1>
                <p className='text-neutral-500 text-center mt-8'>We desire to make a platform where we can help people to find Venues in their budget and for owners who want to advertise their Venues with ease.</p>
            </div>

            <div className='m-4 flex flex-col justify-center items-center'>
                <h1 className='md:text-8xl text-3xl text-neutral-700 text-center'>Want to Join Our Team</h1>
                <p className='text-neutral-500 text-center mt-8'>If you have any idea related to Venue Bazaar which can help us to improve Venue Bazaar then what are you waiting for just email us we will contact you as soon as possible</p>
            </div>

         <div className='w-full flex justify-center items-center'>
         <Link href="/contact"><button className='hover:bg-orange-500 bg-orange-400 border border-b-4 border-black flex justify-center items-center p-4 rounded-lg font-bold text-white'> Send Message</button></Link>
         </div>

        </div>
    )
}

export default About
