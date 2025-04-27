import React from 'react'
import Footer from './Footer';

const Explore = () => {
   const Apply2 = [
        {
          id:1,
          Image: "/apply1.webp",
          title: "Graphic Design",
          enter: "Apply Now",
        },
        {
          id:2,
          Image: "/apply2.webp",
          title: "Chatbot Development",
          enter: "Apply Now",
        },
        {
          id:3,
          Image: "/apply3.webp",
          title: "Other Intership",
          enter: "Apply Now",
        },
        {
          id:4,
          Image: "/apply4.webp",
          title: "Frontend Internship",
          enter: "Apply Now",
        },
        {
          id:5,
          Image: "/apply5.webp",
          title: "App Development",
          enter: "Apply Now",
        },
        {
          id:6,
          Image: "/apply6.webp",
          title: "Backend Development",
          enter: "Apply Now",
        },
      ];

      const values = [
        {
            id:1,
            amount:30,
            desc:"Internships Avalible"
        },
        {
            id:2,
            amount:50,
            desc:"Industry Patners"
        },
        {
            id:3,
            amount:95,
            desc:"Success Rate"
        },
      ]
    return (
        <>
      <div className="bg-[#f3f4f6] md:w-[1450px] md:mx-auto  rounded-xl px-4  mx-4   font-urbanist md:px-6 pb-20 ">
        <div className="flex justify-center items-center md:pt-15 pt-10  ">
          <div className="font-urbanist text-center  font-black text-4xl">
            Explore Internship Categories
          </div>
        </div>
        <div className="text-center font-urbanist font-medium md:py-10 py-5 md:text-xl md:px-80  ">
          <div>
            Choose from a wide range of internship opportunities and kickstart
            your professional journey.
          </div>
        </div>
        <div className="md:flex justify-center items-center   ">
          <div className="grid md:grid-cols-3 grid-cols-1 md:w-[1200px] md:gap-10 gap-10 rounded-2xl  ">
            {Apply2.map((apply, index) => {
              return (
                <div
                  className=" shadow-md hover:shadow-lg transition hover:scale-110 cursor-pointer duration-150 rounded-2xl bg-white"
                  key={apply.id}
                >
                  <img
                    className=" md:h-65 rounded-2xl  "
                    src={apply.Image}
                    alt=""
                  />
                  <div className="flex flex-col gap-2  pt-5 ">
                    <div className="font-semibold text-[20px] px-5 ">
                      {apply.title}
                    </div>
                    <div className="flex justify-center bg-bg-primary  cursor-pointer items-center p-5   ">
                      <div className="text-white bg-primary text-center rounded-xl  px-23 md:px-30 py-2  text-[18px] ">
                        {apply.enter}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-3 md:px-20 md:py-20 px-4 py-5 gap-10 ' >

            {values.map((value,index) => { 
                return (
                  <div key={value.id} className="text-center">
                    <div className='text-primary font-semibold text-4xl' >{value.amount}</div>
                    <div className='font-bold text-2xl' >{value.desc}</div>
                  </div>
                );
            })}


        </div>
        <Footer/>
        </>
    );
  }

export default Explore