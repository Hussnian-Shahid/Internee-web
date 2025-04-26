import { FaArrowRightToBracket } from "react-icons/fa6";

const Apply = () => {
    const Apply = [
      {
        id:1,
        Image: "/apply1.webp",
        title: "Graphic Design",
        image2: <FaArrowRightToBracket className="text-primary" />,
        enter: "Apply Now",
      },
      {
        id:2,
        Image: "/apply2.webp",
        title: "Chatbot Development",
        image2: <FaArrowRightToBracket   className="text-primary"  />,
        enter: "Apply Now",
      },
      {
        id:3,
        Image: "/apply3.webp",
        title: "Other Intership",
        image2: <FaArrowRightToBracket  className="text-primary" />,
        enter: "Apply Now",
      },
      {
        id:4,
        Image: "/apply4.webp",
        title: "Frontend Internship",
        image2: <FaArrowRightToBracket  className="text-primary" />,
        enter: "Apply Now",
      },
      {
        id:5,
        Image: "/apply5.webp",
        title: "App Development",
        image2: <FaArrowRightToBracket  className="text-primary" />,
        enter: "Apply Now",
      },
      {
        id:6,
        Image: "/apply6.webp",
        title: "Backend Development",
        image2: <FaArrowRightToBracket  className="text-primary" />,
        enter: "Apply Now",
      },
    ];
  return (
    <div className="bg-[#f3f4f6] w-full     font-urbanist px-6 pb-20 ">
      <div className="flex justify-center items-center md:pt-30 pt-10  ">
        <span className="flex p-1 bg-white rounded-2xl gap-5  justify-center items-center mb-8  md:mb-0">
          <div className="bg-black text-white font-semibold rounded-2xl md:px-3  px-2  ">
            Trending
          </div>
          <div className="md:font-medium pr-1">
            {" "}
            Explore intership opportunities{" "}
          </div>
        </span>
      </div>
      <div className="text-center font-urbanist font-medium md:py-10 md:text-5xl text-3xl ">
        <div>Your Dream Internship is Just One</div>
        <div className="pt-3 pb-8 md:pb-0" >Click Away!</div>
      </div>
      <div className="md:flex justify-center items-center   ">
        <div className="grid md:grid-cols-3 grid-cols-1 md:w-[1200px] md:gap-10 gap-10 rounded-2xl  ">
          {Apply.map((apply, index) => {
            return (
              <div
                className=" shadow-md hover:shadow-lg transition-shadow  duration-150 rounded-2xl bg-white"
                key={apply.id}
              >
                <img className=" md:h-65 rounded-2xl  " src={apply.Image} alt="" />
                <div className="flex flex-col gap-2  py-5 ">
                  <div className="font-semibold text-[20px] px-5 ">
                    {apply.title}
                  </div>
                  <div className="flex cursor-pointer items-center px-5 gap-2 ">
                    <div className="text-[22px]">{apply.image2}</div>
                    <div className="text-primary text-[18px] ">
                      {apply.enter}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Apply