import React from 'react'

const Unlock = () => {
  return (
    <div className=" px-4 md:py-20 py-10 md:w-full ">
      <div className="md:w-7xl md:mx-auto text-center bg-[#0b0a33] py-10 md:py-30 rounded-2xl ">
        <div className="flex flex-col  md:flex-row  justify-center items-center pb-10  ">
          <span className="flex p-1 bg-white rounded-2xl gap-2   md:gap-5  justify-center items-center ">
            <div className="bg-black text-white md:font-bold rounded-2xl md:px-3  px-2  py-1 ">
              Trending
            </div>
            <div className="md:font-bold md:pr-2">
              {" "}
              Explore intership opportunities{" "}
            </div>
          </span>
        </div>

        <div className="font-urbanist text-white font-semibold text-2xl  md:text-5xl/15">
          <div>Unlock New Opportunities</div>
          <div>With Top-tier internships</div>
        </div>
        <div className="pt-10 pb-5 text-[#93A3AF] md:px-[200px] text-[18px]">
          Take the first step toward a successful career with Internee.pk.
          Explore top internships, gain hands-on experience, and earn a valuable
          certificate.
        </div>

        <div className="flex flex-col  md:flex-row justify-center items-center gap-5">
          <div className=" px-8 py-3 rounded-xl text-white bg-primary cursor-pointer hover:bg-secondry ">
            Get Started Now
          </div>
          <div className="flex justify-center items-center bg-transparent px-8 py-3 rounded-xl text-white font-urbanist font-semibold gap-3 hover:bg-white hover:text-[#0b0a33] border-[2px]  cursor-pointer border-white  group">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="w-5 h-5 group-hover:text-[#0b0a33] text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div>
            <div>Explore Interships</div>
          </div>
        </div>
      </div>
      <div className="w-full md:mx-auto pt-10">
        <div className=" flex justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="flex flex-col">
              <div className="font-bold text-5xl font-urbanist">20+</div>
              <div className=" font-urbanist text-gray-800">
                Expert-led internships
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-5xl font-urbanist">1,500+</div>
              <div className=" font-urbanist text-gray-800">
                Success Graduates
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-5xl font-urbanist">50,000+</div>
              <div className=" font-urbanist text-gray-800">
                LinkedIn Followers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unlock