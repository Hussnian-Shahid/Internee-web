import React from "react";

const Service = () => {
  return (
    <div className="md:w-full overflow-x-hidden font-urbanist relative">
      {/* Blurred background container */}
      <div className="absolute inset-0 bg-[url('/service.jpeg')] bg-no-repeat bg-cover bg-center filter blur-md"></div>

      {/* Semi-transparent overlay to improve content visibility */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Content container - positioned relative to appear above the blurred bg */}
      <div className="relative pb-20">
        <div className="md:w-6xl mx-auto px-4">
          <div className="flex justify-center pt-30 items-center">
            <div className="flex justify-center items-center gap-3 bg-bg-primary rounded-full p-4 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                <rect width="8" height="8" x="13" y="13" rx="2"></rect>
              </svg>
              <div className="text-primary">Task Management Platform</div>
            </div>
          </div>
          <div className="text-center font-bold text-3xl md:text-5xl">
            <div>Master Real-World Skills with Our Tasks Portal at</div>
            <div>internee.pk</div>
          </div>
          <div className="text-center md:px-50 py-5 md:py-10 text-[18px] md:text-xl">
            "Transform theoretical knowledge into practical expertise through
            our comprehensive task portal. Build, learn, and grow with
            industry-standard projects from our "
            <strong>virtual internships</strong> on <strong>internee.pk</strong>
            .
          </div>

          {/* four box */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* box 1 */}
            <div className="p-10 bg-white rounded-2xl">
              <div className="inline-block">
                <div className="bg-bg-primary px-3 rounded-xl py-3">
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
                    className="lucide lucide-briefcase text-primary w-7 h-7"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
              </div>
              <div className="font-bold py-3 md:text-2xl">
                Hands-on Industry Projects with internee.pk
              </div>
              <div className="pb-5">
                Gain practical experience through real-world projects that
                simulate actual industry scenarios. Each task is carefully
                designed to enhance your professional portfolio through our
                <strong> virtual internships.</strong>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <div className="flex">
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
                  <div>Project-based learning</div>
                </div>
                <div className="flex">
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
                  <div>Industry-standard Practices</div>
                </div>
                <div className="flex">
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
                  <div>Portfolio building</div>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className="p-10 bg-white rounded-2xl">
              <div className="inline-block">
                <div className="bg-bg-primary px-3 rounded-xl py-3">
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
                    className="lucide lucide-badge-check text-primary w-7 h-7"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="font-bold py-3 md:text-2xl">
                Skill Verification System by internee.pk
              </div>
              <div className="pb-5">
                Each completed task adds to your verified skills portfolio.
                Showcase your capabilities with confidence through our{" "}
                <strong> virtual internships</strong>
                and comprehensive tracking system.
              </div>

              <div className="flex flex-col justify-center gap-4">
                <div className="flex">
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
                  <div>Skill verification</div>
                </div>
                <div className="flex">
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
                  <div>Progress tracking</div>
                </div>
                <div className="flex">
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
                  <div>Achievement badges</div>
                </div>
              </div>
            </div>

            {/* box 3 */}
            <div className="p-10 bg-white rounded-2xl">
              <div className="flex justify-center items-center gap-3">
                <div className="inline-block">
                  <div className="bg-bg-primary px-3 rounded-xl py-3">
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
                      className="lucide lucide-workflow w-6 h-6 text-primary"
                    >
                      <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                      <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                      <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                    </svg>
                  </div>
                </div>
                <div className="font-bold py-3 md:text-2xl">
                  SDLC Implementation via internee.pk
                </div>
              </div>
              <div className="pl-15">
                Experience the complete Software Development Life Cycle through
                structured tasks and milestones, part of our
                <strong> virtual internship</strong> offerings.
              </div>
            </div>

            {/* box 4 */}
            <div className="p-10 bg-white rounded-2xl">
              <div className="flex justify-center items-center gap-3">
                <div className="inline-block">
                  <div className="bg-bg-primary px-3 rounded-xl py-3">
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
                      className="lucide lucide-book-open w-6 h-6 text-primary"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                </div>
                <div className="font-bold py-3 md:text-2xl">
                  Guided Learning path at internee.pk
                </div>
              </div>
              <div className="pl-15">
                Follow a structured learning path designed for both beginners
                and advanced learners as part of our
                <strong> virtual internship</strong> curriculum.
              </div>
            </div>
          </div>

          {/* last box */}
          <div className="mt-10 pb-8 rounded-2xl text-center bg-white">
            <div className="text-2xl font-bold py-8">
              Ready to Build Your Professional Portfolio with internee.pk?
            </div>
            <div className="md:px-60 text-[20px] pb-8">
              Join our
              <strong> virtual internships</strong>
              and get access to industry-standard tasks that will help you build
              a remarkable portfolio, only at
              <strong> internee.pk</strong>.
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center px-10 py-3 hover:bg-secondry cursor-pointer bg-primary text-white font-bold rounded-2xl">
                Start Your Journey Now{" "}
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
  );
};

export default Service;
