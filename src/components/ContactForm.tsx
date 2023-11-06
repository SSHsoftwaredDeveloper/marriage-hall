"use client";

import React, { useState } from 'react'
// import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

const ContactForm = () => {
    const[user , setUser] = useState({
        username:"",
        email:"",
        phone:"",
        message:"",
    })
    const [status , setStatus] = useState("");

    function handleChange(e : any){
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({...prevUser, [name] : value}));
    }

  const handleSubmit = async(e : any) => {
    e.preventDefault();
        try {
            const response = await fetch('/api/contact',{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({
                    username : user.username,
                    email : user.email,
                    phone : user.phone,
                    message : user.message
                })
            })

            if(response.status === 200) {
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    message:""
                })
                setStatus('success');
            }else {
                setStatus('error');
            }

        } catch (error) {
            console.log(e)

        }
        
    }
  return (
    <form className="flex flex-col m-4 bg-gray-500 p-6 rounded-md" onSubmit={handleSubmit}>
      <div className='mb-4 w-full'>
        <label htmlFor='username' className='flex flex-col capitalize w-full md:w-[280px] xl:w-[360px]'>
            Name
            <input type='text' name='username' id='username' placeholder='Enter Your name' autoComplete='off' required className='text-lg p-2 rounded-md text-zinc-800' value={user.username} onChange={handleChange}/>
        </label>
      </div>

      <div className='mb-4'>
        <label htmlFor='email' className='flex flex-col capitalize  md:w-[280px]  xl:w-[360px]'>
            Email
            <input type='text' name='email' id='email' placeholder='Enter Your email' autoComplete='off' required className='text-lg p-2 rounded-md text-zinc-800' value={user.email} onChange={handleChange}/>
        </label>
      </div>

      <div className='mb-4'>
        <label htmlFor='phone' className='flex flex-col capitalize  md:w-[280px]  xl:w-[360px]'>
            Phone Number
            <input type='number' name='phone' id='phone' placeholder='Enter Your number' autoComplete='off' required className='text-lg p-2 rounded-md text-zinc-800' value={user.phone} onChange={handleChange}/>
        </label>
      </div>

      <div className='mb-4'>
        <label htmlFor='message' className='flex flex-col capitalize  md:w-[280px]  xl:w-[360px]'>
            Message
            <textarea name='message' id='message' placeholder='Enter Your message' autoComplete='off' required className='text-lg p-2 rounded-md md:w-full text-zinc-800' value={user.message} onChange={handleChange}/>
        </label>
      </div>
        {status === 'success' && <p className='my-4 text-green-500 font-semibold '>Thank You For Your Message</p>}
        {status === 'error' && <p className='my-4 text-red-700 font-semibold'>There was an error submitting your message</p>}
         <div className='flex justify-center items-center'>
            <button type='submit' className='w-full border hover:bg-orange-700 hover:text-white bg-orange-400 text-black md:h-12 h-16 font-semibold rounded-md '>Submit</button>
            </div>

    </form>
  )
}

export default ContactForm

