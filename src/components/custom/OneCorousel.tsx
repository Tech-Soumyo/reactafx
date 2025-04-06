import banner from "../../assets/banner_img.png";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StatCards } from "./StatCards";

export const OneCarousel = () => {
  const slides = [
    { title: "Best Production House", img: banner },
    { title: "Creative & Professional", img: banner },
    { title: "Innovative Solutions", img: banner },
  ];

  return (
    <main className="flex-1 " id="home">
      <section className="container mx-auto px-4 pt-5 pb-12">
        <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
          {" "}
          {/* ✅ Uses embla autoplay */}
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Text Section */}
                <div className="space-y-6 relative z-10">
                  <div className="flex space-x-2">
                    <div className="h-2 w-12 bg-blue-600 rounded"></div>
                    <div className="h-2 w-6 bg-red-600 rounded"></div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                    {slide.title.split(" ").map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </h1>
                  <Button
                    variant="link"
                    className="mt-6 px-0 font-semibold text-gray-900 hover:bg-transparent hover:text-red-600 transition-colors"
                  >
                    <a href="#">READ MORE</a>
                  </Button>
                </div>

                {/* Image Section */}
                <div className="relative h-[400px] md:h-[500px] z-10">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="object-contain w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <StatCards />
    </main>
  );
};
