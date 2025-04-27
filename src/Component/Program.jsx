import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Program = () => {

  const explores = [
    {
      id:1,
      image: "/pic1.jpg" ,
      title:"Health Care",
      desc:"Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare."
    },
    {
      id:2,
      image: "/pic2.webp",
      title:"Engineering",
      desc:"Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver’s seat of innovation. Whether it’s civil, electrical, mechanical, or software get ready to design, build, and disrupt."
    },
    {
      id:3,
      image: "/pic3.avif" ,
      title:"Information Technology",
      desc:"Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology."
    }
  ]
  return (
    <>
      <Navbar />
      <div className="md:w-7xl text-center px-4 md:mx-auto  py-20">
        {/* section no 1 */}
        <div>
          <div className="font-bold py-6 md:text-6xl text-4xl">Graduate Program</div>
          <div className="text-gray-700 md:px-50 text-xl ">
            Explore our comprehensive graduate programs designed to advance your
            career and expand your knowledge.
          </div>
        </div>

        <div className="font-semibold md:text-4xl text-3xl   pt-20 md:pt-35 pb-10">Explore Categories</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 ">
          {explores.map((explore, index) => {
            return (
              <div
                key={explore.id}
                className="rounded-2xl shadow-md hover:shadow-lg transition hover:scale-110 cursor-pointer duration-150  "
              >
                <img
                  className="md:h-65 w-full rounded-2xl"
                  src={explore.image}
                  alt=""
                />
                <div className="p-5">
                  <div className="text-center font-bold text-[27px] md:px-3 pb-2 ">
                    {explore.title}
                  </div>
                  <div
                    className="text-gray-700 text-center px-5 text-base
                  /5 "
                  >
                    {explore.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Program