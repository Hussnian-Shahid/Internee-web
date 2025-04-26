import React from 'react'

const Partner = () => {
  return (
    <div className='md:px-16.5 px-4 py-15 md:py-17 ' >
      <div className='text-center  md:text-[20px] text-gray-900 font-urbanist' >Collaborated with Trusted Worldwide Partners</div>
      <div className='grid grid-cols-2 md:grid-cols-6 md:gap-10 gap-5  pt-10 md:pb-13  ' >
        <div className='flex justify-center items-center' >
          <img className='md:w-30  w-25' src="/partner1.png" alt="" />
        </div>
        <div className='flex justify-center items-center' >
          <img className='md:w-30  w-25' src="/partner2.png" alt="" />
        </div>
        <div className='flex justify-center items-center' >
          <img className='md:w-30  w-25' src="/partner3.png" alt="" />
        </div>
        <div className='flex justify-center items-center' >
          <img className='md:w-30  w-25' src="/partner4.png" alt="" />
        </div>
        <div className='flex justify-center items-center' >
          <img className='md:w-30  w-25' src="/partner5.png" alt="" />
        </div>
        <div className='flex justify-center items-center' >
          <img className='md:w-30  w-25' src="/partner6.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Partner