import Image from 'next/image'
import React from 'react'
import catering from '../public/catering.jpg'

const Catering = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Image src={catering} width={280} height={280} alt='catering' className='w-full md:h-[280px] h-[480px]'></Image>
      <div className='absolute top-32 flex flex-col justify-center items-center'>
        <h1 className='md:text-4xl xl:text-6xl flex justify-center items-center text-3xl m-3 text-orange-700 font-bold'>Best Caterers in Islamabad with rates</h1>
        <p className='flex justify-center items-center m-4 text-white md:text-lg text-[100%] bg bg-black text-center xl:w-[1024px] border'>We delivers the Best Catering Services in Karachi, Events like Pakistani SHADI VALIMA, BARAT, MHENDI, MAYUN, Birthday Party, Cooperate Events, picnics and Farmhouse Catering, You can get quotes on your menu as well simply Call on 0322-5025501</p>
      </div>
      <div className='flex flex-col xl:w-[1024px] w-full m-6'>
        <h1 className='mx-6 md:text-5xl text-3xl text-neutral-600 font-bold underline'>
          FARMHOUSE CATERING PACKAGES
        </h1>
        <p className='m-6 text-neutral-500 font-medium'>Farmhouse Catering Packages can be increased or decreased according to your choice you can add more items as well minimum persons for farmhouse catering is 20 if greater than 35 there will be special discount given. We offer picnics catering in different rates all over Karachi.</p>
        <div className='md:flex gap-12'>
          <div className='flex flex-col m-4'>
            <div className='bg-orange-100'>
              <h1 className='text-3xl text-neutral-500'>Farmhouse Package 1100 per Head for Night with out Breakfast</h1>
            </div>
            <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>#</span>
              <h1 className='text-neutral-500 font-semibold'> Item</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>1</span>
              <h1 className='text-neutral-500 font-semibold'>Chicken Tikka</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>2</span>
              <h1 className='text-neutral-500 font-semibold'>Gola Kabab</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>3</span>
              <h1 className='text-neutral-500 font-semibold'>	Parhata</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>4</span>
              <h1 className='text-neutral-500 font-semibold'>	Gulab Jaman</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>5</span>
              <h1 className='text-neutral-500 font-semibold'>Raita + Salad</h1>
            </div>

          </div>

          <div className='flex flex-col m-4'>
            <div className='bg-orange-100'>
              <h1 className='text-3xl text-neutral-500'>Farmhouse Package 1100 per Head for Night with out Breakfast</h1>
            </div>
            <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>#</span>
              <h1 className='text-neutral-500 font-semibold'> Item</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>1</span>
              <h1 className='text-neutral-500 font-semibold'>Gola Kabab</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>2</span>
              <h1 className='text-neutral-500 font-semibold'>Chicken Tikka</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>3</span>
              <h1 className='text-neutral-500 font-semibold'>	Parhata</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>4</span>
              <h1 className='text-neutral-500 font-semibold'>	Gulab Jaman</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>5</span>
              <h1 className='text-neutral-500 font-semibold'>Halwa + Puri + Tea</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>6</span>
              <h1 className='text-neutral-500 font-semibold'>Raita + Salad</h1>
            </div>

          </div>

          <div className='flex flex-col m-4'>
            <div className='bg-orange-100'>
              <h1 className='text-3xl text-neutral-500'>Farmhouse Package 1100 per Head for Night with out Breakfast</h1>
            </div>
            <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>#</span>
              <h1 className='text-neutral-500 font-semibold'> Item</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>1</span>
              <h1 className='text-neutral-500 font-semibold'>Gola Kabab</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>2</span>
              <h1 className='text-neutral-500 font-semibold'>Chicken Tikka</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>3</span>
              <h1 className='text-neutral-500 font-semibold'>	Parhata</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>4</span>
              <h1 className='text-neutral-500 font-semibold'>	Gulab Jaman</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>5</span>
              <h1 className='text-neutral-500 font-semibold'>Halwa + Puri + Tea</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>6</span>
              <h1 className='text-neutral-500 font-semibold'>Chicken Biryani</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>7</span>
              <h1 className='text-neutral-500 font-semibold'>Raita + Salad</h1>
            </div>

          </div>

        </div>
      </div>

      <div className='flex flex-col xl:w-[1024px] w-full m-6'>
        <h1 className='mx-6 md:text-5xl text-3xl text-neutral-600 font-bold underline'>
          MEHNDI AND MAYUN CATERING PACKAGES
        </h1>
        <p className='m-6 text-neutral-500 font-medium'>MEHNDI and MAYUN Catering Package can be changed, if you want to add new item from our new catering item list and the minimum persons for this packages is 100 persons</p>
        <div className='md:flex gap-12'>
          <div className='flex flex-col m-4'>
            <div className='bg-orange-100'>
              <h1 className='text-3xl text-neutral-500'>MEHNDI Package 400 per Head</h1>
            </div>
            <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>#</span>
              <h1 className='text-neutral-500 font-semibold'> Item</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>1</span>
              <h1 className='text-neutral-500 font-semibold'>Gola Kabab</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>2</span>
              <h1 className='text-neutral-500 font-semibold'>Kachori + Tarkari</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>3</span>
              <h1 className='text-neutral-500 font-semibold'>Halwa Suji / Gulab Jaman</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>4</span>
              <h1 className='text-neutral-500 font-semibold'>Paratha</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>5</span>
              <h1 className='text-neutral-500 font-semibold'>Raita + Salad + Chatni</h1>
            </div>

          </div>

          <div className='flex flex-col m-4'>
            <div className='bg-orange-100'>
              <h1 className='text-3xl text-neutral-500'>Special New Catering Item you can add in Menu</h1>
            </div>
            <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>#</span>
              <h1 className='text-neutral-500 font-semibold'> Item</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>1</span>
              <h1 className='text-neutral-500 font-semibold'>Chiken Chicki Mikki</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>2</span>
              <h1 className='text-neutral-500 font-semibold'>Chicken Mint Roll</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>3</span>
              <h1 className='text-neutral-500 font-semibold'>Arabian Puff</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>4</span>
              <h1 className='text-neutral-500 font-semibold'>Chicken Cheese Cone</h1>
            </div>
          </div>
        </div>
      </div>



      <div className='flex flex-col xl:w-[1024px] w-full m-6'>
        <h1 className='mx-6 md:text-5xl text-3xl text-neutral-600 font-bold underline'>
          BARAT AND VALIMA CATERING PACKAGES
        </h1>
        <p className='m-6 text-neutral-500 font-medium'>It is not easy to create BARAT and VALIMA CATERING packages, but we have created it for you so you can have an idea what is the trend nowadays, you can send us your menu to get quotation as well, we never compromised on quality and that is why we are top professional in Caterers in Karachi, our basic packages start from 250 per head.</p>
        <div className='flex flex-col justify-center items-center gap-12'>
          <div className='md:flex'>
            <div className='flex flex-col m-4'>
              <div className='bg-orange-100'>
                <h1 className='text-3xl text-neutral-500'>700 per Head</h1>
              </div>
              <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
                <span className=' text-neutral-500 font-semibold'>#</span>
                <h1 className='text-neutral-500 font-semibold'> Item</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className=' text-neutral-500 font-semibold'>1</span>
                <h1 className='text-neutral-500 font-semibold'>Chicken Biryani / Beef Biryani</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>2</span>
                <h1 className='text-neutral-500 font-semibold'>	Chicken Karahi / Beef Qurma</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>3</span>
                <h1 className='text-neutral-500 font-semibold'>Lab-e-Sheere / Kheer / Pista Kheer / Qulfa Kheer / Gajjar ka Halwa</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>4</span>
                <h1 className='text-neutral-500 font-semibold'>	Roti + Taftan</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>5</span>
                <h1 className='text-neutral-500 font-semibold'>	Salad + Raita</h1>
              </div>

            </div>

            <div className='flex flex-col m-4'>
              <div className='bg-orange-100'>
                <h1 className='text-3xl text-neutral-500'>800 per Head</h1>
              </div>
              <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>#</span>
                <h1 className='text-neutral-500 font-semibold'> Item</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>1</span>
                <h1 className='text-neutral-500 font-semibold'>	Chicken Biryani / Beef Biryani</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className=' text-neutral-500 font-semibold'>2</span>
                <h1 className='text-neutral-500 font-semibold'>	Chicken Karahi / Beef Qurma</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>3</span>
                <h1 className='text-neutral-500 font-semibold'>	Chicken Tikka</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>4</span>
                <h1 className='text-neutral-500 font-semibold'>	Lab-e-Sheere / Kheer / Pista Kheer / Qulfa Kheer / Gajjar ka Halwa</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>5</span>
                <h1 className='text-neutral-500 font-semibold'>	Roti + Taftan</h1>
              </div>

              <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
                <span className='text-neutral-500 font-semibold'>6</span>
                <h1 className='text-neutral-500 font-semibold'>Salad + Raita</h1>
              </div>

            </div>
          </div>

         <div className='md:flex md:w-full'>
         <div className='flex flex-col m-4 md:w-full'>
            <div className='bg-orange-100'>
              <h1 className='text-3xl text-neutral-500'>900 per Head</h1>
            </div>
            <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>#</span>
              <h1 className='text-neutral-500 font-semibold'> Item</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>1</span>
              <h1 className='text-neutral-500 font-semibold'>Chineese Rice or Biryani</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>2</span>
              <h1 className='text-neutral-500 font-semibold'>	Chicken Handi / Beef Qurma</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>3</span>
              <h1 className='text-neutral-500 font-semibold'>	Fish</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>4</span>
              <h1 className='text-neutral-500 font-semibold'>	Chicken Tikka</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>5</span>
              <h1 className='text-neutral-500 font-semibold'>Dodh Dulari / Careem Cocktail</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>6</span>
              <h1 className='text-neutral-500 font-semibold'>	Roti + Taftan</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>7</span>
              <h1 className='text-neutral-500 font-semibold'>Salad + Raita</h1>
            </div>

          </div>

          <div className='flex flex-col m-4 md:w-full'>
            <div className='bg-orange-100'>
              <h1 className='text-3xl text-neutral-500'>1000 Per Head</h1>
            </div>
            <div className='bg-orange-100 mt-4 p-3 border-b border-neutral-400 gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>#</span>
              <h1 className='text-neutral-500 font-semibold'> Item</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>1</span>
              <h1 className='text-neutral-500 font-semibold'>Bombay Biryani / Chineese Rice</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className=' text-neutral-500 font-semibold'>2</span>
              <h1 className='text-neutral-500 font-semibold'>Chicken White Karahi / Beef Qurma</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>3</span>
              <h1 className='text-neutral-500 font-semibold'>	Fish</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>4</span>
              <h1 className='text-neutral-500 font-semibold'>	Chicken Tikka + Boti</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>5</span>
              <h1 className='text-neutral-500 font-semibold'>Dodh Dulari / Careem Cocktail</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>6</span>
              <h1 className='text-neutral-500 font-semibold'>Arabian Puff / Cheese Cone</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>7</span>
              <h1 className='text-neutral-500 font-semibold'>	Roti + Taftan</h1>
            </div>

            <div className='bg-orange-100 p-2 border-neutral-300 border-b gap-12 flex'>
              <span className='text-neutral-500 font-semibold'>8</span>
              <h1 className='text-neutral-500 font-semibold'>Salad + Raita</h1>
            </div>

          </div>
         </div>

        </div>
      </div>


    </div>
  )
}

export default Catering
