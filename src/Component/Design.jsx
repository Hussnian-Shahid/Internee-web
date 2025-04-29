import { useState } from "react";
import Footer from "./Footer";
import Form  from "./Form";
import { LuMoonStar } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"; // Cross Icon
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Design = () => {
  const newApply = [
    {
      id: 1,
      Image: "/photoshop.png",
      title: "PhotoShop Internship",
      location: (
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
          class="lucide lucide-map-pin w-5 h-5 text-primary"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      Job: "Remote",
      Time: (
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
          class="lucide lucide-clock w-5 h-5 text-blue-500 "
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      Position: "2 months",
    },
    {
      id: 2,
      Image: "/ai.png",
      title: "IIIustrator Internship",
      location: (
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
          class="lucide lucide-map-pin w-5 h-5 text-primary"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      Job: "Remote",
      Time: (
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
          class="lucide lucide-clock w-5 h-5 text-blue-500 "
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      Position: "2 months",
    },
    {
      id: 3,
      Image: "/maya.png",
      title: "Maya Internship",
      location: (
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
          class="lucide lucide-map-pin w-5 h-5 text-primary"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      Job: "Remote",
      Time: (
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
          class="lucide lucide-clock w-5 h-5 text-blue-500 "
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      Position: "2 months",
    },
    {
      id: 4,
      Image: "/figmaIcon.png",
      title: "Figma Internship",
      location: (
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
          class="lucide lucide-map-pin w-5 h-5 text-primary"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      Job: "Remote",
      Time: (
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
          class="lucide lucide-clock w-5 h-5 text-blue-500 "
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      Position: "2 months",
    },
  ];
  const [Show, setShow] = useState(false);
  const closeForm = () => setShow(false);

  const [Menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!Menu); // Toggle function
  return (
    <>
      {/* navbat */}
      <>
        <div className="flex    bg-white justify-between md:px-16.5 md:py-4 items-center shadow-2xs px-4 py-4">
          <div>
            <Link to="/">
              <img
                className="md:h-12 h-10 w-auto"
                src="/updated_logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="md:flex hidden justify-center items-center gap-7 text-[14px] font-sans  ">
            <Link to="/">
              <div className="hover:text-primary cursor-pointer">Home</div>
            </Link>
            <Link to="/internship">
              <div className="hover:text-primary cursor-pointer">
                Internship
              </div>
            </Link>
            <Link to="/graduate program">
              <div className="hover:text-primary cursor-pointer">
                Graduate Program
              </div>
            </Link>
            <Link to="/student ambassador">
              <div className="hover:text-primary cursor-pointer">
                Student Ambassador
              </div>
            </Link>
          </div>
          <div className="md:flex hidden cursor-pointer justify-center items-center gap-4">
            <button className="bg-primary cursor-pointer text-white px-5 py-2 font-sans rounded-xl hover:bg-white hover:text-black border-[1px] border-primary transition-all duration-300">
              Job Portal
            </button>
            <button className="bg-white text-black px-5 py-2 rounded-xl hover:bg-primary hover:text-white  transition-all cursor-pointer border-[1px] border-primary shadow-lg duration-300">
              Dashboard
            </button>
            <div className="h-12 w-12 bg-[#e5e5e5] shadow-2xl flex justify-center items-center rounded-full">
              <div className="text-2xl">
                <LuMoonStar />
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            onClick={toggleMenu}
            className="bg-primary md:hidden px-2 py-1 rounded-[10px] cursor-pointer"
          >
            {Menu ? (
              <IoMdClose className="w-8 h-8 text-white" />
            ) : (
              <IoMenu className="w-8 h-8 text-white" />
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {Menu && (
          <div className="w-full md:hidden flex flex-col justify-start fixed bg-white transition-all duration-300 ease-in-out gap-7 text-base px-8 py-10">
            <div className="hover:text-primary cursor-pointer">Home</div>
            <div className="hover:text-primary cursor-pointer">Internship</div>
            <div className="hover:text-primary cursor-pointer">
              Graduate Program
            </div>
            <div className="hover:text-primary cursor-pointer">
              Student Ambassador
            </div>
            <div className="hover:text-primary cursor-pointer">Dashboard</div>
          </div>
        )}
      </>


      <div className="max-w-6xl md:mx-auto  px-6 ">
        {/* graphic section top */}
        <div className=" mt-5 w-full bg-primary md:grid grid-cols-1 rounded-2xl  ">
          <div className="font-bold text-center md:py-22 py-20 text-white text-5xl/15">
            Graphic Design
          </div>
        </div>

        {/* explore section */}
        <div className="text-center text-primary text-4xl font-semibold pt-15">
          Explore Your Next Internship
        </div>
        <div className="text-center text-[18px] px-10 py-2 pb-10 ">
          Handpicked opportunities to elevate your career.
        </div>

        {/* appling section */}
        <div className="md:flex justify-center items-center pb-30   ">
          <div className="grid md:grid-cols-3 grid-cols-1  md:gap-10 gap-10 rounded-2xl  ">
                  {Show && <Form closeForm={closeForm} />}

            {newApply.map((apply, index) => {
              return (
                <div
                  className=" shadow-md hover:shadow-lg shadow-[#d9d9d9] bg-[#F3F4F6] transition-shadow  duration-150 rounded-2xl "
                  key={apply.id}
                >

                  <img
                    className=" md:h-60 md:w-90 object-contain rounded-2xl  "
                    src={apply.Image}
                    alt=""
                  />
                  {/* icon  or lable  */}
                  <div className="flex flex-col gap-2  py-3 px-5 ">
                    <div className="font-medium text-2xl  ">{apply.title}</div>
                    <div className="flex  items-center gap-3">
                      <div>{apply.location}</div>
                      <div>{apply.Job}</div>
                    </div>
                    <div className="flex  items-center gap-3">
                      <div>{apply.Time}</div>
                      <div>{apply.Position}</div>
                    </div>
                    <div className="text-gray-700">Internship</div>
                    <div
                      onClick={() => setShow(true)}
                      className="bg-primary   rounded-2xl flex justify-center items-center hover:bg-secondry cursor-pointer text-white text-base py-3 my-4 font-bold"
                    >
                      Apply Now
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Design