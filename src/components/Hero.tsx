import Image from 'next/image'
import React from 'react'
import bg from '../public/bg2.jpeg'
import lg from '../public/large-capacity.png'
import exp from '../public/experience.png'
import park from '../public/parking.png'
import next from '../public/next-event.png'

const Hero = () => {
  return (
    <div className='w-full z-0'>
      <div className='absolute md:top-[20%] top-[5%] w-full flex flex-col justify-center items-center '>
        <div className='border-y p-4 text-white font-bold md:text-6xl text-3xl xl:text-8xl'>MARRIAGE HALL</div>
        <h1 className='md:text-4xl text-xl text-white'>ALL CITIES OF PAKISTAN</h1>

      </div>
      <Image src={bg} width={1240} height={1240} alt='logo' className='w-full md:h-[670px] h-auto' />
      <div className='xl:flex justify-center items-center bg-black gap-6'>
        <div className='flex flex-col mx-4 justify-center items-center py-4 text-white'>
          <h1 className='text-neutral-500 my-2'>OVER 20 YEARS HOSTING EVENTS</h1>
          <h2 className='md:text-6xl text-3xl my-2'>Why choose us?</h2>
          <p className='text-lg  md:w-[370px] w-auto my-2'>La Royale Banqueting Suites have been established for over 20 years, hosting thousands of weddings, birthday celebrations, christenings, charity fundraisers, gala balls, Christmas parties and a variety of corporate events. </p>
        </div>
        <div>
      <div className='md:flex gap-6 justify-center items-center bg-black'>
        <div className='flex flex-col mx-6 justify-center items-center'>
          <Image src={next} width={130} height={130} alt='next' className='m-6'></Image>
          <h1 className='text-white text-3xl cursor-pointer'>Your next event</h1>
          <p className='text-lg text-neutral-500 text-center xl:w-[350px] md:w-[300px]'>Got something to celebrate? Then it’s time you celebrated the benefits of our Banqueting Suites as the perfect venue for your next event.</p>
        </div>

        <div className='flex flex-col mx-6 justify-center items-center'>
          <Image src={lg} width={130} height={130} alt='large' className='m-6'></Image>
          <h1 className='text-white text-3xl cursor-pointer'>Large capacity</h1>
          <p className='text-lg text-neutral-500 text-center xl:w-[350px] md:w-[300px]'>Hold between 500-600 people and offer state-of-the-art technology to support a seamless event.</p>
        </div>
      </div>

      <div className='md:flex gap-6 justify-center items-center bg-black'>
        <div className='flex flex-col mx-6 justify-center items-center'>
          <Image src={exp} width={130} height={130} alt='experiance' className='m-6'></Image>
          <h1 className='text-white text-3xl cursor-pointer'>Experience the finest</h1>
          <p className='text-lg text-neutral-500 text-center xl:w-[350px] md:w-[300px]'>Cutting edge AV equipment and RGB LED mood lighting can be adapted to suit your theme, along with large LED screens and a dedicated dancefloor.</p>
        </div>

        <div className='flex flex-col mx-8 justify-center items-center'>
          <Image src={park} width={130} height={130} alt='parking' className='m-6'></Image>
          <h1 className='text-white text-3xl cursor-pointer'>Easily accessible</h1>
          <p className='text-lg text-neutral-500 mb-6 text-center xl:w-[350px] md:w-[300px]'>Located in North London, just 20 minutes away from Liverpool Street, with excellent transport links to Central London and 200 designated car parking spaces on site.</p>
        </div>
      </div>
      </div>
      </div>


    </div>
  )
}

export default Hero
