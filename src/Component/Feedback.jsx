import Slider from "./Slider";



const Feedback = () => {

  
  return (
    <div className="bg-white px-4 md:py-20 py-10 w-full ">
      <div className="md:max-w-6xl md:mx-auto bg-white">
        <div className="flex md:flex-row  flex-col ">
          {/* section 1111 */}
          <div className="md:w-full flex justify-center  flex-col h-full ">
            <div className="flex md:justify-start items-center  justify-center rounded-2xl py-5  ">
              <div className=" rounded-full bg-[#F3F4F6]  px-5 py-1">
                Trusted by Thousand
              </div>
            </div>
            <div className="md:text-5xl/15 font-urbanist text-3xl/14 md:text-start text-center py-5 ">
              <div>Join a Global Community</div>
              <div>of Learning & Achieving</div>
              <div>Their Dream</div>
            </div>
            <div className="flex py-5 md:justify-start justify-center">
              <div className="bg-primary text-base  text-white px-5 cursor-pointer hover:bg-secondry py-2 rounded-xl">
                Join our Community
              </div>
            </div>
          </div>

          {/* section 22222 */}
          <div className="md:w-full md:mx-auto py-8 px-4 ">
            <div className="flex  justify-center items-center">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
