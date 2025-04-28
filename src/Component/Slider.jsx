import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SLider = () => {
  const slides = [
    {
      id: 1,
      image: "https://ichef.bbci.co.uk/images/ic/1232x1232/p0784g6m.jpg",
      title: "Zafar Abbas",
      location: "Lahore,Pakistan",
      desc: "Internee.pk offers industry-relevant skills through well-structured courses that perfectly.",
    },
    {
      id: 2,
      image:
        "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-d0f0-61f7-86d6-965da8a734e8/raw?se=2025-04-28T06%3A34%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=b0cf6801-b80d-5ce8-a193-1b89f1d9d155&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T22%3A54%3A31Z&ske=2025-04-28T22%3A54%3A31Z&sks=b&skv=2024-08-04&sig=Bl9VAlYCwRbU0fad2cZrjHaqjdc/BATiJNqqkBcpy00%3D",
      title: " Liam JonaThan",
      location: "Islamabad,Pakistan",
      desc: "Internee.pk offers industry-relevant skills through well-structured courses that perfectly.",
    },
    {
      id: 3,
      image:
        "  https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-fbcc-61f7-9efa-9cf41a5f5bc0/raw?se=2025-04-28T06%3A38%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=58261926-f54c-5c73-8c59-c2d9fdfdebe5&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T22%3A54%3A38Z&ske=2025-04-28T22%3A54%3A38Z&sks=b&skv=2024-08-04&sig=0lN7Il1erE9M1Ym07BGBVWPKoWzukzB38%2BIZSq0nnD8%3D",
      title: "Alex Bhatti",
      location: "karachi,Pakistan",
      desc: "Internee.pk offers industry-relevant skills through well-structured courses that perfectly.",
    },
    {
      id: 4,
      image:
        "  https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-e8a0-61f7-ad24-6c605a3a69a3/raw?se=2025-04-28T06%3A41%3A49Z&sp=r&sv=2024-08-04&sr=b&scid=cff1d641-ddc9-5272-857a-588f865b265d&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T22%3A43%3A26Z&ske=2025-04-28T22%3A43%3A26Z&sks=b&skv=2024-08-04&sig=4sWTABT0mgGiStwLWvCLU6XdwfZIiX7McOEtNBe1bMM%3D",
      title: "Mateo",
      location: "Quetta,Pakistan",
      desc: "Internee.pk offers industry-relevant skills through well-structured courses that perfectly.",
    },
  ];

  return (
    <div className="w-[500px] px-10 slider-container">
      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 1,
          type: "loop",
          arrows: false,
        }}
      >
          {slides.map((slide,index) => {
            return (
        <SplideSlide>
          {/* slide 1 */}
              <div
                key={slide.id}
                className="p-5  bg-[#F3F4F6] relative  rounded-2xl shadox-lg text-center mt-10"
              >
                <img
                  src={slide.image}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10  h-24 w-24 rounded-full border-4 border-white shadow"
                  alt="Zafar Abbas profile"
                />
                <div className="font-bold text-2xl font-urbanist  pt-10">
                  {slide.title}
                </div>
                <div className="font-urbanist text-lg">Lahore, Pakistan</div>
                <div className="py-3 text-base text-gray-700">
                  {slide.desc}
                </div>
                <div className="flex justify-center  items-center">
                  <div className="border-none">⭐</div>
                  <div className="border-none">⭐</div>
                  <div className="border-none">⭐</div>
                  <div className="border-none">⭐</div>
                  <div className="border-none">⭐</div>
                </div>
              </div>
        </SplideSlide>
            );
        })}
      </Splide>
    </div>
  );
};

export default SLider;
