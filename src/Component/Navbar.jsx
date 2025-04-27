import { useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"; // Cross Icon
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!Menu); // Toggle function

  return (
    <>
      <div className="flex  sticky z-9999 top-0 bg-white justify-between md:px-16.5 md:py-4 items-center shadow-2xs px-4 py-4">
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
            <div className="hover:text-primary cursor-pointer">Internship</div>
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
  );
};

export default Navbar;
