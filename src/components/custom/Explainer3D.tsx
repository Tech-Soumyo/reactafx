import { FaSkating } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const expertiseData = [
  {
    title: "Skateboard",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    color: "bg-red-700",
  },
  {
    title: "Skateboard",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    color: "bg-purple-800",
  },
  {
    title: "Skateboard",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    color: "bg-blue-600",
  },
  {
    title: "Skateboard",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    color: "bg-green-600",
  },
];

export const Explainer3D = () => {
  return (
    <div className="container mt-auto mb-auto mx-auto my-0.5 pt-10 px-4">
      {/* Heading Section */}
      <div className="text-center mb-0">
        <h1 className="text-4xl font-bold mb-2">3D EXPLAINER</h1>
        <p className="text-gray-600">
          There are many variations of passages of Lorem
        </p>
      </div>
      {/* Carousel Section */}
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full py-10 px-28 items-center"
      >
        <CarouselContent>
          {expertiseData.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/3 md:basis-1/2 basis-full px-6"
            >
              <div
                className={`rounded-lg p-6 flex flex-col items-center justify-between h-96 ${item.color} text-white shadow-lg`}
              >
                <FaSkating className="text-5xl mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-center">{item.description}</p>
                <a href="#" className="text-white underline mt-4">
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

//    <FaSkating size={50} className="mb-4" />
//    <h3 className="text-xl font-bold mb-2">Skateboard</h3>
//    <p className="text-sm">
//      There are many variations of passages of Lorem Ipsum available, but the
//      majority have suffered alteration. There are many variations.
//    </p>
//  </div>;
