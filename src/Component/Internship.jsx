import React from 'react'
import Navbar from './Navbar'
import Explore from './Explore';

const Internship = () => {
  return (
    <div>
      <Navbar />
      <div className="md:px-16 md:py-20 px-4 py-10 ">
        {/* section no 1 */}
        <div className="md:flex justify-between items-center">
          {/* side 1 */}
          <div className="w-full">
            <div className="text-primary font-urbanist font-bold text-5xl md:py-7 pb-4 ">
              Unlock Your Future
            </div>
            <div className="md:text-[22px] font-urbanist text-[18px] font-medium ">
              Discover world-class internships and gain hands-on experience with
              top industry leaders.
            </div>
            <div className="flex md:py-7 py-4 pb-7 justify-start">
              <div className="bg-primary rounded-xl text-[18px] font-semibold  text-white px-5 py-3 ">
                Get Started
              </div>
            </div>
          </div>
          {/* side 2 */}
          <div className="flex w-full justify-center items-center">
            <div className="text-center flex justify-center items-center px-12 bg-primary font-bold text-2xl rounded-2xl text-white md:px-8   py-8">
              Find Your Dream Internships Today!
            </div>
          </div>
        </div>
      </div>

      <Explore/>
    </div>
  );
}

export default Internship