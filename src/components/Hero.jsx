import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center
        text-center'>
        <p className='uppercase text-[#00df9a]
         font-bold p-2'>gorwing with data analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold
        md:py-6'>Grow with data</h1>
        <div className='flex justify-center items-center py-4'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast , Flexible financing for</p>
           <Typed
           className='md:text-5xl sm:text-4xl text-xl font-bold pl-3'
            strings={[
              'BTC','BTB','SASS'
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
           />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
        Monitor your data analytics to increase revenue 
        for BTB,BTC& SASS platforme
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium
          my-6 mx-auto py-3 text-black'>
        Get started
        </button>
      </div>
    </div>
  )
}

export default Hero
