"use client"

import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import list from './list.json'
import Select from 'react-select'
import Image from 'next/image';
import stage from '../public/bg.jpg'
import stage1 from '../public/bg1.jpg'
import Islamabad from '../public/islamabad.webp'
import Chakwal from '../public/chk.webp'
import Lahore from '../public/lahore.webp'


const BookingForm = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const [selectedLunchs, setSelectedLunchs] = useState('');

    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [dishes, setDishes] = useState('');
    const [disabled, setDisabled] = useState(0);

    const [user, setUser] = useState({
        day: "",
        time: "",
        dishes: "",
        message: ""
    });
    const [status, setStatus] = useState("");


    // const handleChange = (selectedLunch) => {
    //     setSelectedLunchs(selectedLunch);
    // };
    const times = [
        { label: "Time", value: "Time" },
        { label: "Lunch", value: "Lunch" },
        { label: "Dinner", value: "Dinner" },
    ]

    const Dishes = [
        { label: "Chicken Tikka - $250", value: "Chicken Tikka $250" },
        { label: "Gola Kabab - $100", value: "Gola Kabab $100" },
        { label: "Kabab - $20 ", value: "Kabab $20 " },
        { label: "Chicken Biryani - $300", value: "Chicken Biryani $300" },
        { label: "Beef Biryani - $350", value: "Beef Biryani $350" },
        { label: " Beef Qurma - $400", value: " Beef Qurma $400" },
        { label: "Roti + Taftan - $2", value: "Roti + Taftan $2" },
        { label: "Brost Fish - $450", value: "Brost Fish $450" },
        { label: "Arabian Puff - $25000", value: "Arabian Puff $25000" },
        { label: "Bombay Biryani - $500", value: "Bombay Biryani $500" },
        { label: " Cheese Cone - $300", value: " Cheese Cone $300" },
        { label: "Matan Qurma - $550", value: "Matan Qurma $550" },
        { label: "Matan Biryani - $600", value: "Matan Biryani $600" },
        { label: "Halwa Suji - $100", value: "Halwa Suji $100" },
        { label: "Raita - $10", value: "Raita $10" },
        { label: "Chatni - $5", value: "Chatni $5" },
        { label: "Salad - $5", value: "Salad $5" },
        { label: "Halwa - $10", value: "Halwa $10" },
        { label: "Puri - $10", value: "Puri $10" },
        { label: "Tea - $5", value: "Tea $5" },
        { label: "Lab-e-Sheere - $10", value: "Lab-e-Sheere $10" },
        { label: "Pista Kheer - $10", value: "Pista Kheer $10" },
        { label: "Qulfa Khee - $10", value: "Qulfa Khee $10" },
        { label: "Gajjar ka Halwa - $10", value: "Gajjar ka Halwa $10" },
        { label: "Pista Kheer - $15", value: "Pista Kheer $15" },
        { label: "Soft Drinks - $10", value: "Soft Drinks $10" },
        { label: "Mineral Water - $8", value: "Mineral Water $8" },
        { label: "Sweet Rice - $50", value: "Sweet Rice $50" },
        { label: "Soap - $10", value: "Soap $10" },
        { label: "Chiken Soap - $30", value: "Chiken Soap $30" },
    ]

    const prices = [
        { label: "$100", value: 1 },
        { label: "$250", value: 2 },
        { label: "$300", value: 3 },
        { label: "$350", value: 4 },
        { label: "$400", value: 5 },
        { label: "$450", value: 6 },
        { label: "$500", value: 7 },
        { label: "$550", value: 8 },
        { label: "$600", value: 9 },
        { label: "$25000", value: 10 },
    ]

    const days = [
        { label: "Day", value: 0 },
        { label: "1 November 2023", value: '1 November 2023' },
        { label: "2 November 2023", value: "2 November 2023" },
        { label: "3 November 2023", value: "3 November 2023" },
        { label: "4 November 2023", value: "4 November 2023" },
        { label: "5 November 2023", value: "5 November 2023" },
        { label: "6 November 2023", value: "6 November 2023" },
        { label: "7 November 2023", value: "7 November 2023" },
        { label: "8 November 2023", value: "8 November 2023" },
        { label: "9 November 2023", value: "9 November 2023" },
        { label: "10 November 2023", value: "10 November 2023" },
        { label: "11 November 2023", value: "11 November 2023" },
        { label: "12 November 2023", value: "12 November 2023" },
        { label: "13 November 2023", value: "13 November 2023" },
        { label: "14 November 2023", value: "14 November 2023" },
        { label: "15 November 2023", value: "15 November 2023" },
        { label: "16 November 2023", value: "16 November 2023" },
        { label: "17 November 2023", value: "17 November 2023" },
        { label: "18 November 2023", value: "18 November 2023" },
        { label: "19 November 2023", value: "19 November 2023" },
        { label: "20 November 2023", value: "20 November 2023" },
        { label: "21 November 2023", value: "21 November 2023" },
        { label: "22 November 2023", value: "22 November 2023" },
        { label: "23 November 2023", value: "23 November 2023" },
        { label: "24 November 2023", value: "24 November 2023" },
        { label: "25 November 2023", value: "25 November 2023" },
        { label: "26 November 2023", value: "26 November 2023" },
        { label: "27 November 2023", value: "76 November 2023" },
        { label: "28 November 2023", value: "28 November 2023" },
        { label: "29 November 2023", value: "29 November 2023" },
        { label: "30 November 2023", value: "30 November 2023" },



    ]

    const handleDay = (e: any) => {
        const getDay = e.target.value;
        setDay(getDay);
    }

    const handleTime = (e: any) => {
        const getTime = e.target.value;
        setTime(getTime);
    }

    // const handleDishes = (selectedLunch) => {
    //     setSelectedLunchs(selectedLunch);
    //     // const getDishes = e.target.value;
    //     const getDishes = selectedLunch.map((dish) => dish.value);
    //     const dishesAsString = JSON.stringify(getDishes);
    //     setDishes(dishesAsString);

    // }
    const handleDishes = (selectedLunch : any) => {
        setSelectedLunchs(selectedLunch);
        const getDishes = selectedLunch.map((dish : any) => dish.label);
        setDishes(getDishes);
    } 

    function handleChange(e: any) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/form', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    day: day,
                    time: time,
                    dishes: dishes,
                    message: user.message,
                }),
            })

            if (response.status === 200) {
                setUser({
                    day: "",
                    time: "",
                    dishes: "",
                    message: ""
                })
                setStatus('success');
                // setDisabled(true);
            } else {
                setStatus('error');
            }

        } catch (error) {
            console.log(e)

        }

    }

    return (
        <div className='w-full flex flex-col m-4'>

            <div className='flex flex-col justify-center items-center m-4'>
                <h1 className='xl:text-6xl md:text-4xl text-3xl underline'>BOOK YOUR APPOINTMENT</h1>
            </div>
            <div className='flex flex-col justify-center items-cente mx-12 xl:w-full rounded-md'>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center bg-gray-500 rounded-md items-center w-full m-3 p-3'>
                    <div className='md:flex w-full justify-center items-center'>
                        <div className='w-full flex flex-col m-3 '>
                            <h1 className='text-lg'>Day</h1>
                            <div className='md:flex'>
                                <div className='w-auto mr-4'>
                                    <select name='day' id='day' required placeholder='Day' onChange={(e) => handleDay(e)} className='bg-orange-100 text-black w-full md:w-[180px] rounded-md  flex flex-col p-3 hover:bg-orange-300 justify-center  items-center'>
                                        {days.map((day , index) => (
                                            <option  key={index} value={day.value}>{day.label}</option>
                                        ))}

                                    </select>
                                </div>


                            </div>
                        </div>

                        <div className='w-full p-3'>
                            <h1 className='text-lg'>Time</h1>
                            <select name='time' id='time' required placeholder='time' onChange={(e) => handleTime(e)} className='bg-orange-100 text-black w-full md:w-[180px] rounded-md  flex flex-col p-3 hover:bg-orange-300 justify-center  items-center'>
                                {times.map((time , index) => (
                                    <option  key={index} value={time.value}>{time.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col bg-gray-500 m-2 rounded-md p-3 w-full md:w-[880px]'>
                            <h1 className='text-lg text-white'>Dishes</h1>
                            <Select
                                name='dishes'
                                id='dishes'
                                options={Dishes}
                                // value={selectedLunchs}
                                onChange={handleDishes}
                                isMulti={true}
                                className='w-full z-50 text-black'
                            />
                        </div>
                    </div>

                    <div className='mb-4 w-full flex flex-col justify-center items-center'>
                        <label htmlFor='message' className='flex flex-col capitalize w-auto md:w-[360px]'>
                            Message
                            <textarea name='message' id='message' placeholder='Enter Your message' autoComplete='off' required className='text-lg p-2 rounded-md md:w-full text-zinc-800' value={user.message} onChange={handleChange} />
                        </label>
                    </div>


                    {status === 'success' && <p className='my-4 text-green-500 font-semibold '>Thank You For Your Message</p>}
                    {status === 'error' && <p className='my-4 text-red-700 font-semibold'>There was an error submitting your message</p>}
                    <div className='flex justify-center items-center'>
                        <button type='submit' className='w-[150px] border hover:bg-orange-700 mb-4 hover:text-white bg-orange-400 text-black md:h-12 h-16 font-semibold rounded-md '>Submit</button>
                    </div>


                </form>
                <div className='text-black md:flex gap-2 w-full p-3 justify-between '>


                    <div className='p-3 m-2 flex bg-gray-500 w-full rounded-md flex-col justify-center items-center '>
                        <h1 className='md:text-3xl text-2xl text-white bg-orange-400 w-full md:w-[380px] flex justify-center items-center rounded-md p-3 m-3'>Decorated Stage</h1>
                        <div className='md:flex md:gap-12 w-full justify-center items-center'>
                            <div className='flex flex-col w-full justify-center items-center'>
                                <Image src={stage} width={380} height={380} alt='Stage' className='' />
                                <button name='stage' id='stage' className='text-3xl text-white w-full bg-orange-400 md:w-[180px] active:bg-orange-900 flex justify-center items-center  rounded-md p-3 m-3'>$300</button>
                            </div>
                            <div className='flex flex-col w-full justify-center items-center'>
                                <Image src={stage1} width={380} height={380} alt='Stage1' />
                                <button name='stage' id='stage' className='text-3xl text-white w-full bg-orange-400 md:w-[180px] active:bg-orange-900 flex justify-center items-center rounded-md p-3 m-3'>$350</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col bg-gray-500 rounded-md w-full'>
                    <h1 className='text-xl text-white bg-orange-400  flex justify-center items-center rounded-md p-3 m-3'>Marriage Halls</h1>
                    <div className='md:flex gap-2 p-3 w-full'>

                        <div className='flex flex-col w-full'>
                            <Image src={Chakwal} width={350} height={350} alt='Chakwal' className='md:w-auto w-full'/>
                            <h1 className='text-xl text-white bg-orange-400  flex justify-center items-center rounded-md p-3 m-3'>100 Halls in Chakwal</h1>
                            <button className='text-xl text-white bg-orange-400  flex justify-center items-center rounded-md p-3 m-3'>$550</button>
                        </div>

                        <div className='flex flex-col w-full'>
                            <Image src={Lahore} width={350} height={350} alt='Lahore'  className='xl:w-auto md:w-auto w-full'/>
                            <h1 className='text-xl text-white bg-orange-400  flex justify-center items-center rounded-md p-3 m-3'>10 Halls in Lahore</h1>
                            <button className='text-xl text-white bg-orange-400  flex justify-center items-center rounded-md p-3 m-3'>$970</button>
                        </div>

                        <div className='flex flex-col w-full'>
                            <Image src={Islamabad} width={350} height={350} alt='ISL'  className='xl:w-auto md:w-auto w-full'/>
                            <h1 className='text-xl text-white bg-orange-400  flex justify-center items-center rounded-md p-3 m-3'>25 Halls in Islamabad</h1>
                            <button className='text-xl text-white bg-orange-400  flex justify-center items-center rounded-md p-3 m-3'>$1000</button>
                        </div>

 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
