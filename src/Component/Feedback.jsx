import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Feedback = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <div className="bg-[#F3F4F6] px-4 py-20 md:w-full ">
      <div className="md:w-7xl md:mx-auto bg-[#F3F4F6]">
        <div className="flex md:flex-row  flex-col justify-center items-center">
          {/* section 1111 */}
          <div className="md:w-full flex justify-center  flex-col h-full ">
            <div className="flex md:justify-start  justify-center rounded-2xl py-5  ">
              <div className="bg-white rounded-full px-5 py-2">
                Trusted by Thousand
              </div>
            </div>
            <div className="md:text-5xl/20 font-urbanist text-3xl/14 md:text-start text-center py-5 ">
              <div>Join a Global Community</div>
              <div>of Learning & Achieving</div>
              <div>Their Dream</div>
            </div>
            <div className="flex py-5 ">
              <div className="bg-primary text-xl text-white px-8 cursor-pointer hover:bg-secondry py-4 rounded-xl">
                Join our Community
              </div>
            </div>
          </div>

          {/* section 22222 */}

          <div className="md:w-full flex justify-center items-center">
            <div className="md:w-[500px] slider-container ">
              <Slider {...settings}>
                {/* slide 1 */}
                <div className="p-10 bg-gray-200 rounded-2xl relative shadow text-center mt-14">
                  <img
                    src="https://ichef.bbci.co.uk/images/ic/1232x1232/p0784g6m.jpg"
                    className="absolute left-1/2 transform -translate-x-1/2 -top-12 h-24 w-24 rounded-full border-4 border-white shadow"
                    alt="Zafar Abbas profile"
                  />
                  <div className="font-bold text-2xl font-urbanist pt-5">
                    Zafar Abbas
                  </div>
                  <div className="font-urbanist text-lg">Lahore, Pakistan</div>
                  <div className="py-7 text-lg text-gray-700">
                    Internee.pk offers industry-relevant skills through
                    well-structured courses that perfectly balance theory with
                    practical hands-on learning opportunities.
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                  </div>
                </div>
                {/* slide 2 */}
                <div className="p-10 bg-gray-200 rounded-2xl relative shadow text-center mt-14">
                  <img
                    src="https://t4.ftcdn.net/jpg/04/44/74/99/360_F_444749923_B0XJTJJRUVlRQHcDeSV1eOG6JjkKdj7Q.jpg"
                    className="absolute left-1/2 transform -translate-x-1/2 -top-12 h-24 w-24 rounded-full border-4 border-white shadow"
                    alt="Hassan Khaild"
                  />
                  <div className="font-bold text-2xl font-urbanist pt-5">
                    Hassan Khaild
                  </div>
                  <div className="font-urbanist text-lg">Karachi, Pakistan</div>
                  <div className="py-7 text-lg text-gray-700">
                    "The mentorship program at internee.pk connects students
                    with experienced  creating valuable networking
                    and career advancement possibilities."
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                  </div>
                </div>
                {/* slide 3 */}
                <div className="p-10 bg-gray-200 rounded-2xl relative shadow text-center mt-14">
                  <img
                    src="https://media.istockphoto.com/id/464565934/photo/smiling-south-asian-bearded-male.jpg?s=612x612&w=0&k=20&c=uKyudyjQOAiqccBZ73UTgC944AA26iY1Z4VADwKmNH0="
                    className="absolute left-1/2 transform -translate-x-1/2 -top-12 h-24 w-24 rounded-full border-4 border-white shadow"
                    alt="Ali Asgar"
                  />
                  <div className="font-bold text-2xl font-urbanist pt-5">
                    Ali Asgar
                  </div>
                  <div className="font-urbanist text-lg">Multan, Pakistan</div>
                  <div className="py-7 text-lg text-gray-700">
                    "Internee.pk's user-friendly interface makes navigating
                    between learning , enhancing the overall
                    educational experience significantly."
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                  </div>
                </div>
                {/* slide 4 */}
                <div className="p-10 bg-gray-200 rounded-2xl relative shadow text-center mt-14">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/81/62/69/360_F_681626947_MdDN3wF7IGrv0pcCbm8ixP7U5QXYhdt9.jpg"
                    className="absolute left-1/2 transform -translate-x-1/2 -top-12 h-24 w-24 rounded-full border-4 border-white shadow"
                    alt="Ahmad Javed"
                  />
                  <div className="font-bold text-2xl font-urbanist pt-5">
                    Ahmad Javed
                  </div>
                  <div className="font-urbanist text-lg">Multan, Pakistan</div>
                  <div className="py-7 text-lg text-gray-700">
                    "The comprehensive assessment system on internee.pk provides
                     that effectively identifies strengths
                    and areas for improvement."
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                  </div>
                </div>
                {/* slide 5 */}
                <div className="p-10 bg-gray-200 rounded-2xl relative shadow text-center mt-14">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNkMBtiQiOBLt1HvVrVLL_J4RbOq-JLjsI3BNiTHX0KGYtSYq_3sYfg1xdOjogFpOlxA&usqp=CAU"
                    className="absolute left-1/2 transform -translate-x-1/2 -top-12 h-24 w-24 rounded-full border-4 border-white shadow"
                    alt="Ali Asgar"
                  />
                  <div className="font-bold text-2xl font-urbanist pt-5">
                    Muhammad BIlal
                  </div>
                  <div className="font-urbanist text-lg">Multan, Pakistan</div>
                  <div className="py-7 text-lg text-gray-700">
                    "Internee.pk consistently updates course content to reflect
                    current ensuring students gain truly
                    valuable, applicable knowledge."
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                    <div className="border-none">⭐</div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
