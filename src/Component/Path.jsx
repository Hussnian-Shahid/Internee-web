import React from 'react'

const Path = () => {
  return (
    <>
      <div className="md:w-full overflow-x-hidden font-urbanist relative py-20 ">
        <div className="absolute inset-0 bg-[url('/service3.jpeg')] bg-no-repeat bg-cover bg-center filter"></div>

        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative ">
          <div className="md:max-w-6xl mx-auto px-4">
            <div className="flex md:w-3xl md:justify-start flex-col ">
              <div className="flex md:justify-start  justify-center ">
                <div className="flex justify-center items-center bg-bg-primary  rounded-full p-4">
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
                    class="lucide text-primary lucide-brain w-5 h-5 mr-2"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                  </svg>
                  <div className="text-primary">Your AI Career Journey </div>
                </div>
              </div>

              <div className= ' py-8 font-extrabold text-3xl/10 text-center md:text-start md:text-6xl/15' >
                AI Career Coach: Your Ultimate Guide to Building a Successful AI
                Career
              </div>

              <div className='text-xl text-shadow-gray-900' >
                Looking to kickstart your career in the AI industry? Our AI
                Career Coach platform offers expert guidance in resume building,
                cover letter creation, interview preparation, quizzes, and
                industry insights—all designed to help you land your dream job
                in Artificial Intelligence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Path