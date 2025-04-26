import React from 'react'

const Coach = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="md:w-6xl md:mx-auto flex justify-center flex-col items-center">
        <div className="font-semibold text-center md:text-start text-4xl pb-20">
          Why Choose AI Career Coach?
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
          {/* 1 */}
          <div className="text-center">
            <div className="">
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
                class="lucide lucide-trophy text-primary w-8 h-8 mx-auto mb-4"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <div className="font-urbanist font-bold pb-2 text-xl">
              Comprehensive Guidance
            </div>
            <div className="font-urbanist text-gray-800">
              Everything you need to succeed in the AI industry
            </div>
          </div>
          {/* 2 */}
          <div className="text-center">
            <div className="">
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
                class="lucide lucide-sparkles text-primary w-8 h-8 mx-auto mb-4"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
            </div>
            <div className="font-urbanist  pb-2 font-bold text-xl">
              Industry-Ready Insights{" "}
            </div>
            <div className="font-urbanist text-gray-800">
              Stay updated on the latest AI trends
            </div>
          </div>
          {/* 3 */}
          <div className="text-center">
            <div className="">
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
                class="lucide lucide-dollar-sign text-primary w-8 h-8 mx-auto mb-4"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="font-urbanist pb-2 font-bold text-xl">
              Monetization Options{" "}
            </div>
            <div className="font-urbanist text-gray-800">
              Share your AI knowledge and earn income{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coach