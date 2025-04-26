import React from 'react'

const Mock = () => {
  return (
    <div className="md:w-full overflow-x-hidden font-urbanist relative">
      <div className="absolute inset-0 bg-[url('/service2.jpeg')] bg-no-repeat bg-cover bg-center filter blur-sm"></div>

      <div className="absolute inset-0  bg-white/55 "></div>

      <div className="relative md:px-20 px-4">
        <div className="md:w-6xl mx-auto py-10 ">
          {/* part 1 */}
          <div className="md:flex justify-center items-center pb-10 gap-10">
            {/* section1 */}
            <div className="w-full">
              <div className="flex md:justify-start  justify-center ">
                <div className="flex justify-center items-center bg-bg-primary  rounded-full p-4 mb-5">
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
                  <div className="text-primary">AI Mock Interviews</div>
                </div>
              </div>

              <div className="md:text-5xl !text-2xl text-center md:text-start  font-bold">
                AI Mock Interview Platform for Virtual Internships in Pakistan
              </div>

              <div className="text-xl py-10 ">
                Prepare for <strong>techinal</strong>,
                <strong>
                  marketing <strong>technical</strong>{" "}
                </strong>{" "}
                or <strong>business inerviews</strong>
                with our AI-powered mock interview system. Join
                <strong>Internee.pk’s virtual internship program</strong> to get
                unlimited access, real-time feedback, and role-specific
                practice.
              </div>

              {/* button  */}
              <div className="flex pb-10  items-center">
                <div className="flex justify-center items-center px-10 py-3 hover:bg-secondry cursor-pointer bg-primary text-white font-bold rounded-2xl md:text-xl">
                  Apply Now for Virtual intership
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right ml-2 mt-1 h-5 w-5"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* section 2 */}
            <div className="w-full grid grid-cols-1 gap-5">
              {/* box1 */}
              <div className="p-10 bg-white flex  gap-5 rounded-2xl">
                <div className="flex  flex-col  gap-3">
                  <div className="inline-block">
                    <div className="bg-bg-primary px-3 rounded-xl py-3">
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
                        class="lucide lucide-message-square text-primary w-6 h-6"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2 gap-3">
                  <div className="font-semibold  md:text-xl">
                    Realistic AI Interview Simulations{" "}
                  </div>
                  <div className="">
                    Simulate real interview environments powered by AI. Perfect
                    for students seeking
                    <strong> online internship interview practice</strong> or
                    job readiness.
                  </div>
                </div>
              </div>

              {/* box2 */}
              <div className="p-10 bg-white flex  gap-5 rounded-2xl">
                <div className="flex  flex-col  gap-3">
                  <div className="inline-block">
                    <div className="bg-bg-primary px-3 rounded-xl py-3">
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
                        class="lucide lucide-brain text-primary w-6 h-6"
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
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2 gap-3">
                  <div className="font-semibold  md:text-xl">
                    Smart Feedback with AI{" "}
                  </div>
                  <div className="">
                    Instantly analyze your answers, tone, and relevance. Improve
                    every time with feedback tailored for
                    <strong>virtual internship candidates</strong>.
                  </div>
                </div>
              </div>

              {/* box3 */}
            
              <div className="p-10 bg-white flex  gap-5 rounded-2xl">
                <div className="flex  flex-col  gap-3">
                  <div className="inline-block">
                    <div className="bg-bg-primary px-3 rounded-xl py-3">
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
                        class="lucide lucide-target text-primary w-6 h-6"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2 gap-3">
                  <div className="font-semibold  md:text-xl">
                    Pracitice Interviews for{" "}
                  </div>
                  <div className="">
                    Pracitice Interviews for{" "}
                    <strong>software engineering </strong> ,{" "}
                    <strong>Product Management</strong>,{" "}
                    <strong>business</strong> , and{" "}
                    <strong>digital marketing</strong> roles in our{" "}
                    <strong>internee.pk platform</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* part 2 */}
          <div className="grid  md:grid-cols-3 grid-cols-1   gap-10   ">
            {/* box 1 */}
            <div className=" p-7 rounded-2xl bg-white shadow-lg">
              <div className="flex">
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
                    class="lucide lucide-award text-primary w-8 h-8 "
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                </div>
              </div>
              <div className="md:text-xl font-semibold py-5">
                Build Real Interview Confidence
              </div>
              <div>
                Reduce anxiety and increase success rate through repeated
                AI-based mock interview sessions.
              </div>
            </div>
            {/* box 2 */}
            <div className=" p-10 rounded-2xl bg-white shadow-lg">
              <div className="flex">
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
                    class="lucide lucide-chart-no-axes-column-increasing text-primary w-8 h-8 "
                  >
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                  </svg>
                </div>
              </div>
              <div className="md:text-xl font-semibold py-5">
                Become Job-Ready Fast{" "}
              </div>
              <div>
                Structured interview training that prepares you for real-world
                scenarios. Perfect for{" "}
                <strong>students applying for internships</strong>.
              </div>
            </div>
            {/* box 3 */}
            <div className=" p-10 rounded-2xl bg-white shadow-lg">
              <div className="flex">
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
                    class="lucide lucide-file-text text-primary w-8 h-8 "
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
              </div>
              <div className="md:text-xl font-semibold py-5">
                Track Progress with Reports{" "}
              </div>
              <div>
                Access detailed performance reports you can share with mentors
                and hiring managers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mock