import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "/feedback1.png",
      title: "Zafar Abbas",
      location: "Lahore, Pakistan",
      desc: "Internee.pk offers industry-relevant skills through well-structured courses that perfectly.",
    },
    {
      id: 2,
      image: "/feedback2.png",
      title: "Liam JonaThan",
      location: "Islamabad, Pakistan",
      desc: "Internee.pk offers industry-relevant skills through well-structured courses that perfectly.",
    },
    {
      id: 3,
      image: "/feedback3.png",
      title: "Alex Bhatti",
      location: "Karachi, Pakistan",
      desc: "Internee.pk offers industry-relevant skills through well-structured courses that perfectly.",
    },
    {
      id: 4,
      image: "/feedback4.png",
      title: "Mateo",
      location: "Quetta, Pakistan",
      desc: "Internee.pk offers industry-relevant skills through well-structured courses that perfectly.",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto px-4 slider-container overflow-x-hidden ">
      <Splide
        aria-label="Testimonials"
        options={{
          perPage: 1,
          type: "loop",
          arrows: false,
          autoplay: true, 
          interval: 4000,
          pauseOnHover: true,
          pagination: true,
          rewind: true,
          breakpoints: {
            640: {
              perPage: 1,
              type: "loop",
            },
          },
        }}
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="p-5 bg-gray-100 relative rounded-2xl shadow-lg text-center mt-16 mb-4">
              <img
                src={slide.image}
                className="absolute left-1/2 transform -translate-x-1/2 -top-12 z-10 h-24 w-24 rounded-full border-4 border-white shadow-md object-cover"
                alt={`${slide.title} profile`}
              />
              <div className="font-bold text-xl sm:text-2xl pt-14">
                {slide.title}
              </div>
              <div className="text-sm sm:text-lg text-gray-600">
                {slide.location}
              </div>
              <div className="py-3 text-sm sm:text-base text-gray-700">
                {slide.desc}
              </div>
              <div className="flex justify-center items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
