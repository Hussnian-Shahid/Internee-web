import React from 'react'

const Career = () => {

  const boxs = [
    {
      id:1,
      value:"1000+",
      title:"Active Internship"
    },
    {
      id:2,
      value:"500+",
      title:"Partner Companies"
    },
    {
      id:3,
      value:"10,000+",
      title:"Success Stories"
    },
    {
      id:4,
      value:"50+",
      title:"Industry Sector"
    },
    ]
  return (
    <div className="md:w-full  font-urbanist relative">
      <div className="absolute inset-0 bg-[url('/service.jpeg')] bg-no-repeat bg-cover bg-center filter blur-md"></div>

      <div className="absolute inset-0 bg-white/55"></div>
      <div></div>

      <div className="relative pb-20">
        <div className="md:max-w-6xl mx-auto px-4">
          <div className="flex justify-center pt-25 items-center">
            <div className="flex justify-center items-center gap-3 bg-bg-primary rounded-full p-4 mb-5">
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
                class="lucide text-primary lucide-graduation-cap w-5 h-5 mr-2"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
              <div className="text-primary">Professional Development</div>
            </div>
          </div>
          <div className="text-center font-bold text-3xl md:text-5xl">
            <div>Launch your Career with internee.pk</div>
          </div>
          <div className="text-center md:px-40   py-5 md:pb-10 md:pt-5 text-[20px] md:text-lg">
            Pakistan's innovative platform for career growth and professional
            development. Join our<strong> virtual internships</strong> to gain
            practical experience and kickstart your professional journey.
          </div>

          {/* four box */}
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5 pt-7 text-center ">
            {/* box1 */}
            {boxs.map((box,index) => {
              return (
                <div key={box.id} className="bg-white rounded-2xl px-10 py-5 flex flex-col justify-center items-center ">
                  <div className="font-urbanist text-primary font-semibold text-3xl">
                    {box.value}
                  </div>
                  <div>{box.title}</div>
                </div>
              );
            }) }
            
          </div>

          {/* three box */}
          <div className="grid md:grid-cols-3 grid-cols-1 pb-10  pt-15 gap-10">
            {/* box1 */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex justify-start ">
                <div className="bg-bg-primary rounded-xl p-3">
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
                    class="lucide lucide-target text-primary w-7 h-7"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
              </div>

              <div className="font-semibold text-2xl py-5">Target Learning</div>
              <div className="pb-5">
                Industry-specific <strong>virtual internships </strong>
                designed to build practical skills and experience."
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center  ">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Web Development</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Digital Marketing</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">UI/UX Design</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Content Writing</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Data Analytics</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Business development</div>
                </div>
              </div>
            </div>
            {/* box2 */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex justify-start ">
                <div className="bg-bg-primary rounded-xl p-3">
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
                    class="lucide lucide-users text-primary w-7 h-7"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>

              <div className="font-semibold text-2xl py-5">
                Mentorship Program
              </div>
              <div className="pb-5">
                Learn directly from industry experts at{" "}
                <strong>Internee.pk</strong>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center  ">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">One-on-One Guidance</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Weekly Sessions</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Projects Revviews</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Career Planning</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Industry Content</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Network Events</div>
                </div>
              </div>
            </div>
            {/* box3 */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex justify-start ">
                <div className="bg-bg-primary rounded-xl p-3">
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
                    class="lucide lucide-award text-primary w-7 h-7"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                </div>
              </div>

              <div className="font-semibold text-2xl py-5">
                Certification Track
              </div>
              <div className="pb-5">
                Earn recognized certifications through{" "}
                <strong>virtual internships</strong>{" "}
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center  ">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Skill Verification</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Project Portofolio</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Performace Badge</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Industry Recognition</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">Digital Certificate</div>
                </div>
                <div className="flex items-center">
                  <div>
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
                      className="lucide lucide-circle-check w-5 h-5 text-primary mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-base">LinkedIn Integration</div>
                </div>
              </div>
            </div>
          </div>

          {/* two boxs */}
          <div className="grid md:grid-cols-2 grid-cols-1 pt-10  gap-10">
            {/* box 1 */}
            <div className="rounded-2xl bg-[#f6f3f3] p-10">
              <div className="font-semibold text-2xl pb-7 ">
                {" "}
                Your Learning Journey
              </div>

              <div className="flex flex-col justify-center  gap-5">
                <div className="flex flex-col justify-center w-full bg-white p-5 gap-2">
                  <div className="text-xl font-semibold">
                    Phase 1:Foundation
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#E5E7EB] relative">
                    <div className="absolute rounded-full h-2 bg-primary w-[70%]"></div>
                  </div>
                </div>

                <div className="flex flex-col justify-center w-full bg-white p-5 gap-2">
                  <div className="text-xl font-semibold">
                    Phase 1:Foundation
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#E5E7EB] relative">
                    <div className="absolute rounded-full h-2 bg-primary w-[50%]"></div>
                  </div>
                </div>

                <div className="flex flex-col justify-center w-full bg-white p-5 gap-2">
                  <div className="text-xl font-semibold">
                    Phase 1:Foundation
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#E5E7EB] relative">
                    <div className="absolute rounded-full h-2 bg-primary w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/*box 2  */}
            <div className="p-5 py-10 md:p-10 rounded-2xl bg-[#f6f3f3] ">
              <div className="font-semibold text-xl pb-5">Career Resources</div>

              <div className="grid grid-cols-2  gap-5 bg-[#f6f3f3] ">
                {/* box1 */}
                <div className="flex px-4 items-center bg-white  py-5 gap-3 ">
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
                      class="lucide lucide-file-text text-primary w-5 h-5"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </div>
                  <div className="font-urbanist">Resume Templates</div>
                </div>
                {/* box2 */}
                <div className="flex px-4 items-center bg-white  py-5 gap-3 ">
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
                      class="lucide lucide-message-square text-primary w-5 h-5"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="font-urbanist">Mock Interview</div>
                </div>
                {/* box3 */}
                <div className="flex px-4 items-center bg-white  py-5 gap-3 ">
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
                      class="lucide lucide-chart-no-axes-column-increasing text-primary w-5 h-5"
                    >
                      <line x1="12" x2="12" y1="20" y2="10"></line>
                      <line x1="18" x2="18" y1="20" y2="4"></line>
                      <line x1="6" x2="6" y1="20" y2="16"></line>
                    </svg>
                  </div>
                  <div className="font-urbanist">Skill Analysis</div>
                </div>
                {/* box4 */}
                <div className="flex px-4 items-center bg-white  py-5 gap-3 ">
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
                      class="lucide lucide-book-open text-primary w-5 h-5"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <div className="font-urbanist">Learning Path</div>
                </div>
              </div>
            </div>
          </div>

          {/* last box */}
          <div className="mt-20  rounded-2xl md:text-center bg-white pb-10 p-5">
            <div className="md:text-3xl text-xl font-bold py-8">
              Begin Your Professional Journey with Internee.pk
            </div>
            <div className="md:px-60 text-sm md:text-[20px] pb-8">
              Join our
              <strong> virtual internships</strong>
              program and transform your career prospects with hands-on
              experience and expert guidance.
            </div>

            <div className="flex flex-col md:flex-row  justify-center items-center gap-5">
            {/* button 1 */}
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center px-10 py-3 hover:bg-secondry cursor-pointer bg-primary text-white font-bold rounded-2xl md:text-lg">
                  Explore Opportunities
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

              {/* button 2 */}

              <div className="flex justify-center items-center shadow-md rounded-2xl ">
                <div className="flex justify-center items-center px-10 py-3  cursor-pointer hover:bg-[#d7d7d9] bg-white text-primary  md:text-lg font-bold rounded-2xl">
                  View Programs
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career

