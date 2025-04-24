import { useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"; // Cross Icon
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!Menu); // Toggle function

  return (
    <>
      <div className="flex justify-between md:px-16.5 md:py-4 items-center shadow-2xs px-4 py-4">
        <div>
          <img className="md:h-13 h-10 w-auto" src="/logo (1).png" alt="logo" />
        </div>
        <div className="md:flex hidden justify-center items-center gap-7 text-base font-sans">
          <div className="hover:text-primary">Home</div>
          <div className="hover:text-primary">Internship</div>
          <div className="hover:text-primary">Graduate Program</div>
          <div className="hover:text-primary">Student Ambassador</div>
        </div>
        <div className="md:flex hidden justify-center items-center gap-4">
          <button className="bg-primary text-white px-5 py-2 font-sans rounded-xl hover:bg-white hover:text-black border-[1px] border-primary transition-all duration-300">
            Job Portal
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-xl hover:bg-primary hover:text-white border-[1px] border-primary transition-all duration-300">
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
        <div className="w-full md:hidden flex flex-col justify-start gap-7 text-base px-8 pt-10">
          <div className="hover:text-primary">Home</div>
          <div className="hover:text-primary">Internship</div>
          <div className="hover:text-primary">Graduate Program</div>
          <div className="hover:text-primary">Student Ambassador</div>
          <div className="hover:text-primary">Dashboard</div>
        </div>
      )}
    </>
  );
};

export default Navbar;
