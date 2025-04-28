import React from 'react'
import Navbar from './Navbar';
import Student2 from './Student2';
import Join from './Join';
import Footer from './Footer';

const Student = () => {
  return (
    <>
      <Navbar />
      <div className="w-full relative max-h-125">
        <div className="absolute inset-0 bg-[url('/service4.jpeg')] bg-no-repeat bg-cover bg-center filter  "></div>
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="absolute inset-0 bg-white/0"></div>
        <div className="md:w-6xl md:mx-auto relative ">
          {/* title */}
          <div className="pt-50 px-15  py-5 text-white  font-semibold text-5xl md:text-6xl  ">
            <div>Internee.pk</div>
            <div>Student Ambassadors</div>
          </div>

          {/* bg-white or other section */}

          <div className="bg-white hidden md:block p-7 pb-20 rounded-2xl shadow-xl  ">
            <div className="font-semibold text-xl">
              Become a Student Ambassador
            </div>

            <div className="flex items-center text-base py-5">
              <div className="w-full">
                Join our global community of students who are passionate about
                building AI-driven solutions with Microsoft technology.
                Accelerate innovation and grow the skills you need to have
                greater impact in the projects and communities that matter to
                you.
              </div>
              <div className="flex justify-center items-center w-[400px]">
                <div className="flex ">
                  <div className="bg-primary rounded-xl flex px-5 py-3   justify-center  hover:bg-secondry cursor-pointer items-center text-white text-xl">
                    <div>Get Started</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-arrow-right text-white w-5 h-5"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:pt-30 md:px-40   relative ">
              <img className="h-140 rounded-2xl" src="/service5.jpeg" alt="" />
              <div className="absolute md:top-65 md:left-90 rounded-2xl shadow-lg  bg-white md:w-160 md:p-10 ">
                <div className="font-bold text-6xl ">
                  <div>Unlock Your</div>
                  <div className="pt-1">Potential</div>
                </div>

                {/* paragrag lines */}
                <div className="text-gray-700 font-urbanist font-semibold pt-5 text-lg ">
                  <div>Gain real-world experience with hands-on projects.</div>
                  <div>Connect with a network of like-minded individuals.</div>
                  <div>Discover new opportunities and enhance your skills.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Student2/>
      <Join/>
      <Footer/>
    </>
  );
}

export default Student