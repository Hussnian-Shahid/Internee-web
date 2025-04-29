import React from 'react'

const Content = () => {
    const contents = [
      {
        id: 1,
        image1: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="lucide lucide-cloud-upload text-primary w-8 h-8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 13v8"></path>
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="m8 17 4-4 4 4"></path>
          </svg>
        ),
        desc: "Use internee.pk to share tutorials, exercises and projects. Help others learn while you grow with virtual internships that reward your skills",
        titel: "Upload Tutorials & Exercise",
        more: "Learn more",
        out: (
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
            className="lucide lucide-chevron-right h-4 w-4 ml-1 text-primary"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        ),
      },
      {
        id: 2,
        image1: (
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
            className="lucide lucide-dollar-sign text-primary w-8 h-8"
          >
            <line x1="12" x2="12" y1="2" y2="22"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        ),
        desc: "internee.pk offers virtual internships in Pakistan where tech creators and instructors can earn passive income by sharing their knowledge",
        titel: "Earn from Your Expertise",
        more: "Learn more",
        out: (
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
            className="lucide lucide-chevron-right h-4 w-4 ml-1 text-primary"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        ),
      },
      {
        id: 3,
        image1: (
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
            className="lucide lucide-user-check text-primary w-8 h-8"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <polyline points="16 11 18 13 22 9"></polyline>
          </svg>
        ),
        desc: "Become a trusted voice on internee.pk. Our virtual internship ecosystem helps you build your personal brand in the online learning space",
        titel: "Build Your Instructor Profile",
        more: "Learn more",
        out: (
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
            className="lucide lucide-chevron-right h-4 w-4 ml-1 text-primary"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        ),
      },
      {
        id: 4,
        image1: (
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
            className="lucide lucide-handshake text-primary w-8 h-8"
          >
            <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
            <path d="m21 3 1 11h-2"></path>
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
            <path d="M3 4h8"></path>
          </svg>
        ),
        desc: "We keep it transparent. Join internee.pk and benefit from a fair model that pays you well - all while gaining experience in virtual internships",
        titel: "Fair Revenue Sharing",
        more: "Learn more",
        out: (
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
            className="lucide lucide-chevron-right h-4 w-4 ml-1 text-primary"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        ),
      },
    ];
  return (
    <div className="w-full  pt-20  px-4">
      <div className="text-center md:text-5xl font-semibold py-5 ">
        Tech Instructor or Content Creator?
      </div>
      <div className="text-primary font-semibold text-center text-[22px]">
        Create in Your Native Language & Start Earning
      </div>
      <div className="flex justify-center items-center py-8">
        <div className="bg-primary cursor-pointer hover:bg-secondry px-7 py-3 text-white font-semibold text-xl rounded-xl ">
          Start Teaching Today
        </div>
      </div>
      <div className="md:w-5xl bg-white  md:mx-auto">
        <div className="grid  pb-10 md:grid-cols-2 grid-cols-1   gap-10   ">
          {contents.map((content, index) => {
            return (
              <div key={content.id} className=" p-8 rounded-2xl shadow-xl">
                <div className="flex">
                  <div className="bg-bg-primary rounded-xl px-4 py-3 ">
                    <div>{content.image1}</div>
                  </div>
                </div>
                <div className='md:text-2xl font-semibold pb-2 pt-5 ' >{content.titel}</div>
                <div>{content.desc}</div>
                <div className="flex items-center text-center">
                  <div className="text-primary text-lg pt-4 cursor-pointer hover:text-secondry ">{content.more}</div>
                  <div className="pt-5">{content.out}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content