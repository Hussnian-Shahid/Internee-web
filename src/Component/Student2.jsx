import React from 'react'

const Student2 = () => {
    const card = [
      {
        id: 1,
        image: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-notebook text-primary w-10 h-10"
          >
            <path d="M2 6h4"></path>
            <path d="M2 10h4"></path>
            <path d="M2 14h4"></path>
            <path d="M2 18h4"></path>
            <rect width="16" height="20" x="4" y="2" rx="2"></rect>
            <path d="M16 2v20"></path>
          </svg>
        ),
        title: "Get started",
        desc: "Become a Student Ambassador",
      },
      {
        id: 2,
        image: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-users text-primary w-10 h-10"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        ),
        title: "Community",
        desc: "Explore Student Ambassador profiles",
      },
      {
        id: 3,
        image: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trophy text-primary w-10 h-10"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
        ),
        title: "Startup Competition",
        desc: "Student competition for AI startups",
      },
      {
        id: 4,
        image: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide text-primary lucide-square-check-big w-10 h-10"
          >
            <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
        ),
        title: "Founders Hub",
        desc: "A platform for entrepreneurs at any stage",
      },
    ];
  return (
    <div className="w-full px-4 md:px-10 py-20 mx-auto ">
      <div className="grid grid-cols-1 md:pt-[750px]  gap-8  md:grid-cols-4 ">
        {card.map((car, index) => {
          return (
            <div key={car.id} className="shadow-md hover:shadow-xl flex items-center gap-5  duration-300 cursor-pointer transition-all  hover:scale-106  ">
              <div className="bg-[#F3F4F6] w-fll px-6 py-7 flex justify-center items-center hover:text-primary">
                {car.image}
              </div>
              <div className="flex flex-col  items-start ">
                <div className="font-semibold">{car.title}</div>
                <div className='text-[13px]' >{car.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Student2