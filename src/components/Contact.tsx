import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { BiLogoGmail } from 'react-icons/bi'
import { BsTelephoneFill } from 'react-icons/bs'
import ContactForm from './ContactForm'
import BookingForm from './BookingForm'

const Contact = () => {
  return (
    <div className='w-full xl:w-[1024px] flex flex-col bg-zinc-900 text-white'>
      <div className='md:flex m-6 gap-16'>
        <div className='flex flex-col justify-center m-6 '>
          <h1 className='xl:text-6xl text-4xl'>
            Contact our team
          </h1>
          <p className='my-6'>If you have any queries about our Banqueting Suites or would like to book an appointment to discuss your requirements and take a tour of our premises, please don’t hesitate to get in touch.</p>
          <div className='flex gap-12 md:text-xl'>
            <SlLocationPin size="30px" className="font-bold" />
            Bhara kau Phulgran Islamabad
          </div>

          <div className='flex gap-12 md:text-xl mt-4'>
            <BiLogoGmail size="30px" className="font-bold" />
           info@marriage-hall.com
          </div>

          <div className='flex gap-12 md:text-xl mt-4'>
            <BsTelephoneFill size="30px" className="font-bold" />
           0322-5025501
          </div>

        </div>


        <div>
          <ContactForm/>
        </div>
      </div>
        <div>
          <BookingForm/>
        </div>
    </div>
  )
}

export default Contact
