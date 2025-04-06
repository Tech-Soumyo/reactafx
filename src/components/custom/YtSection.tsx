import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For custom arrow icons

const videos = [
  "https://www.youtube.com/embed/MYoH3na05a8?si=GolPMQqpGnx7eTwT",
  "https://www.youtube.com/embed/MYoH3na05a8?si=GolPMQqpGnx7eTwT",
  "https://www.youtube.com/embed/MYoH3na05a8?si=GolPMQqpGnx7eTwT",
  "https://www.youtube.com/embed/MYoH3na05a8?si=GolPMQqpGnx7eTwT",
  "https://www.youtube.com/embed/MYoH3na05a8?si=GolPMQqpGnx7eTwT",
];

const VideoSection = () => {
  return (
    <section
      className="pt-10 sm:pt-6 bg-white text-center mb-[-240px] sm:mb-[-80px] md:mb-[-120px] lg:mb-[120px]"
      id="projects"
    >
      <h2 className="text-3xl font-bold text-gray-800">AFX Video</h2>
      <p className="text-gray-500 mt-2 mb-8 md:mb-8 sm:mb-8 max-w-2xl mx-auto">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered
      </p>

      {/* Carousel Section */}
      <div className="max-w-6xl mx-auto relative">
        <Carousel
          opts={{ loop: true }}
          className="w-full py-10 sm:pt-10 md:pt-10 px-8 items-center"
        >
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem
                key={index}
                className="lg:basis-1/4 md:basis-1/2 sm:basis-1/2 basis-full px-4"
              >
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe
                    className="w-full h-56 md:h-64"
                    src={video}
                    title={`YouTube Video ${index + 1}`}
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="absolute left-0 top-1/2 transform -translate-y-1/2 
            bg-gradient-to-r from-red-500 to-purple-600 text-white 
            rounded-full  w-10 sm:w-14 md:w-16 lg:w-20 lg:h-20 h-10 sm:h-14 md:h-16 flex items-center justify-center 
            shadow-lg hover:from-red-600 hover:to-purple-700 
            transition-all duration-300 ease-in-out focus:outline-none"
          >
            <FaChevronLeft className="w-12 h-12" />
          </CarouselPrevious>

          <CarouselNext
            className="absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-gradient-to-r from-red-500 to-purple-600 text-white 
            rounded-fullw-10 sm:w-14 md:w-16 lg:w-20 lg:h-20 h-10 w-10 sm:h-14 md:h-16 flex items-center justify-center 
            shadow-lg hover:from-red-600 hover:to-purple-700 
            transition-all duration-300 ease-in-out focus:outline-none"
          >
            <FaChevronRight className="w-12 h-12" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default VideoSection;
