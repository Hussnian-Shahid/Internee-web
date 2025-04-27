import React from 'react'

const Step = () => {
  return (
    <div className="bg-[#F3F4F6] px-4 py-20 md:w-full ">
      <div className="md:max-w-6xl md:mx-auto bg-[#F3F4F6]">
        <div className="flex md:flex-row  flex-col justify-center items-center">
          {/* section 1 */}
          <div className="md:w-full flex justify-center  flex-col h-full ">
            <div className="flex md:justify-start  justify-center rounded-2xl ">
              <div className="bg-white rounded-full px-5 py-2">
                How it Works
              </div>
            </div>
            <div className="md:text-5xl/15 text-3xl/14 md:text-start text-center  font-semibold">
              <div>A Simple and Seamless</div>
              <div>Process to Start Your</div>
              <div>Internship Journey</div>
            </div>
          </div>

          {/* section 2 */}
          <div className="md:w-full md:h-full flex flex-col gap-10  justify-center items-center relative">
            <div className="md:w-xl  relative">
              <div className="absolute w-0.5 md:left-16 left-8 top-0 h-full  border-l-2 border-gray-500 border-dashed "></div>

              <div className="flex shadow-md flex-col gap-5 md:gap-5 md:ml-35 ml-20 ">
                {/* step one */}
                <div className="flex gap-10 items-center">
                  {/* button */}
                  <div className="font-semibold rounded-full absolute -left-1 md:left-8   text-white bg-primary px-4 py-3 ">
                    Step 1
                  </div>
                  {/* othersection */}
                  <div className="md:p-10 p-5  rounded-2xl shadow-md">
                    <div className="font-semibold text-xl">
                      Sign Up & Choose a Domain
                    </div>
                    <div className="text-sm text-gray-700 ">
                      Explore a wide range of internships across various
                      industries,Tailored to match you skills
                    </div>
                  </div>
                </div>
                {/* step two */}
                <div className="flex gap-10 items-center">
                  {/* button */}
                  <div className="font-semibold rounded-full absolute -left-1 md:left-8  text-white bg-black px-4 py-3 ">
                    Step 1
                  </div>
                  {/* othersection */}
                  <div className="md:p-10 p-5 rounded-2xl shadow-md">
                    <div className="font-semibold text-xl">
                      Fill out the Desired Form
                    </div>
                    <div className="text-sm text-gray-700 ">
                      Fill out a quick application form to and secure your
                      internship opportunity
                    </div>
                  </div>
                </div>
                {/* step THree */}
                <div className="flex gap-10 items-center">
                  {/* button */}
                  <div className="font-semibold rounded-full absolute -left-1 md:left-8  text-white bg-black px-4 py-3 ">
                    Step 1
                  </div>
                  {/* othersection */}
                  <div className="md:p-10 p-5 rounded-2xl shadow-md">
                    <div className="font-semibold text-xl">
                      Earn Your Certifcate
                    </div>
                    <div className="text-sm text-gray-700 ">
                      Complete your internship, gain valuable hands-on
                      experience, and receive a Certifcate
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start ">
              <div className=" text-xl hover:bg-secondry text-white bg-primary px-6 py-4 rounded-3xl">
                Get Started Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step