import React from 'react'

const Join = () => {
    const boxs = [
      {
        id: 1,
        image: (
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
            class="lucide lucide-graduation-cap w-12 h-12 text-primary  "
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
            <path d="M22 10v6"></path>
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
          </svg>
        ),
        title: "Learn and Grow",
        desc: "Access exclusive learning resources and certifications to build your technical skills.",
      },
      {
        id: 2,
        image: (
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
            class="lucide lucide-users w-12 h-12 text-primary"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        ),
        title: "Build Community",
        desc: "Connect with fellow students and mentors from around the world.",
      },
      {
        id: 3,
        image: (
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
            class="lucide lucide-code w-12 h-12 text-primary"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        ),
        title: "Create Solutions",
        desc: "Work on real projects using cutting-edge Internee's technologies.",
      },
    ];
  return (
    <div className='w-full px-4 md:px-10  md:py-20 pt-10 mx-auto  bg-white' >
        <div className='font-bold text-xl py-5  ' >Why you should join</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pb-10' >
            {boxs.map((box,index) => {
                return <div key={box.id} className="bg-[#f9fafb] p-5">
                    <div className='pb-4' >{box.image}</div>
                    <div className='font-bold text-2xl py-4' >  {box.title}</div>
                    <div className='text-base text-black/70' >{box.desc}</div>
                </div>;
            })}

        </div>
    </div>
  )
}

export default Join