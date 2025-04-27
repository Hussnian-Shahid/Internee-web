import React from 'react'

const Header = () => {
  return (
    <>
      <div className="flex md:px-16.5 pt-5 px-4  ">
        <div className="flex justify-center  flex-col md:w-full ">
          <div className="font-bold font-urbanist text-center text-4xl md:text-start md:text-5xl">
            <div>Looking for</div>
            <div>dream internship ?</div>
          </div>
          <div className="md:text-[18px] md:text-start  py-5 text-center ">
            Internee.pk kickstart student's tech careers with first
            internships,providing industry exposure, practical skills, and
            networking opprotunities.
          </div>
          <div className="flex md:flex-row flex-col items-center gap-5 ">
            <button className="cursor-pointer bg-primary text-white md:px-7 md:py-2  md:text-[18px] px-8 py-3 font-sans rounded-xl hover:bg-secondry  border-[1px] border-primary transition-all duration-300   ">
              Our Job Portal
            </button>
            <div className="cursor-pointer bg-[#213448] text-white md:px-7 md:py-2  md:text-[18px] px-8 py-3 rounded-xl hover:bg-[#547792] hover:text-white flex justify-center items-center  transition-all duration-300 gap-2 ">
              <button className=" ">Dashboard </button>
              <span>
                <img src="/down-right.png" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:flex justify-center items-center hidden ">
          <img className="  h-[80vh]" src="/updated_banner.webp" alt="banner" />
        </div>
      </div>
    </>
  );
}

export default Header