// import { FaSkating } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const expertiseData = [
  {
    title: "3D Animation 1",
    description:
      "There are many variations of passages of Lorem Ipsum available",
    color: "bg-red-700",
    video: "https://www.youtube.com/embed/qkWWbgfO1lQ?si=yk-ln4CmZP9vTTy0",
  },
  {
    title: "3D Animation 2",
    description:
      "There are many variations of passages of Lorem Ipsum available",
    color: "bg-purple-800",
    video: "https://www.youtube.com/embed/eUaI7EaH9g0?si=Sq1byY24W7bh2kOM",
  },
  {
    title: "3D Animation 3",
    description:
      "There are many variations of passages of Lorem Ipsum available",
    color: "bg-blue-600",
    video: "https://www.youtube.com/embed/ETui_auTd2w?si=LI_uIupqiTwF1Isa",
  },
  {
    title: "3D Animation 4",
    description:
      "There are many variations of passages of Lorem Ipsum available",
    color: "bg-green-600",
    video: "https://www.youtube.com/embed/hO1QYEy1dPo?si=PFT4PYVwVm9aicm4",
  },
  {
    title: "3D Animation 5",
    description:
      "There are many variations of passages of Lorem Ipsum available",
    color: "bg-blue-600",
    video: "https://www.youtube.com/embed/ICIMV-CXnYw?si=PH4bJCt7PBvoNZK7",
  },
];

export const Animation3D = () => {
  return (
    <div className="container mt-auto mb-auto mx-auto my-0.5 pt-10 px-4">
      <div className="text-center mb-0">
        <h1 className="text-4xl font-bold mb-2">3D EXPLAINER</h1>
        <p className="text-gray-600">
          There are many variations of passages of Lorem
        </p>
      </div>

      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full py-10 px-10 sm:px-6 md:px-12 lg:px-32  items-center"
      >
        <CarouselContent>
          {expertiseData.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/3 md:basis-1/2 sm:basis-1/2 basis-full"
            >
              <div
                className={`rounded-lg p-4 sm:p-6 flex flex-col items-center justify-between h-auto ${item.color} text-white shadow-lg`}
              >
                {/* <FaSkating className="text-3xl sm:text-4xl md:text-5xl mb-4" /> */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                  {item.title}
                </h2>
                {/* Embedded YouTube video */}
                <div className="w-full flex flex-col gap-4 justify-center mb-2">
                  <iframe
                    width="100%"
                    height="200"
                    src={item.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-md"
                  ></iframe>
                </div>
                <p className="text-sm sm:text-base text-center">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-white underline mt-4 text-sm sm:text-base"
                >
                  READ MORE
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
// ...existing code...

//    <FaSkating size={50} className="mb-4" />
//    <h3 className="text-xl font-bold mb-2">3D EXPLAINER",</h3>
//    <p className="text-sm">
//      There are many variations of passages of Lorem Ipsum available, but the
//      majority have suffered alteration. There are many variations.
//    </p>
//  </div>;
