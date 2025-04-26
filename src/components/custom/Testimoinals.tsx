import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "../ui/carousel"; // Import shadcn/ui Carousel components
import { cn } from "../../lib/utils";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";

type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sreemon Das",
    avatar: photo2,
    quote:
      "Art enables us to find ourselves and lose ourselves at the same time.",
  },
  {
    id: 2,
    name: "Sanjib XXX",
    avatar: photo3,
    quote:
      "Art enables us to find ourselves and lose ourselves at the same time.",
  },
  {
    id: 3,
    name: "Name5 XXX",
    avatar: photo1,
    quote:
      "Art enables us to find ourselves and lose ourselves at the same time.",
  },
  {
    id: 4,
    name: "Name4 XXX",
    avatar: photo1,
    quote:
      "Art enables us to find ourselves and lose ourselves at the same time.",
  },
  {
    id: 5,
    name: "Soutrik XXX",
    avatar: photo1,
    quote:
      "Art enables us to find ourselves and lose ourselves at the same time.",
  },
];

export function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  // Set up the carousel API and listen for slide changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect(); // Set initial state
    api.on("select", onSelect); // Update state on slide change

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-[#3a1f8d] py-12">
      <div className="container mx-auto px-4 z-[-99]">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Testimonial
        </h2>

        {/* Carousel Section */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true, // Enable infinite looping
              align: "center", // Center the active slide
              slidesToScroll: 1, // Scroll one slide at a time
            }}
            className="w-full"
          >
            <CarouselContent className="flex items-center">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="basis-full md:basis-1/3 flex justify-center"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={index === current}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Previous Button */}
            <CarouselPrevious
              className="absolute left-0 top-1/2 transform -translate-y-1/2 
              bg-[#b11313] hover:bg-[#8f0f0f] text-white rounded-full h-12 w-12 
              flex items-center justify-center"
            >
              <span className="sr-only">Previous testimonial</span>
            </CarouselPrevious>

            {/* Custom Next Button */}
            <CarouselNext
              className="absolute right-0 top-1/2 transform -translate-y-1/2 
              bg-[#b11313] hover:bg-[#8f0f0f] text-white rounded-full h-12 w-12 
              flex items-center justify-center"
            >
              <span className="sr-only">Next testimonial</span>
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center px-6 py-16 mb-16 mt-16 rounded-lg transition-all duration-300",
        isActive
          ? "bg-white text-gray-800 z-10 shadow-xl scale-105 w-[380px] h-[300px] md:w-[440px] md:h-[440px] font-extrabold"
          : "bg-[#b11313] text-white scale-95 w-[300px] md:w-[320px] h-[300px] md:h-[420px] sm:w-[360px] sm:h-[360px]"
      )}
    >
      <div className="absolute -top-14 rounded-full border-4 border-[#3a1f8d] bg-white p-1 overflow-hidden shadow-2xl shadow-amber-50">
        <div className="w-24 h-24 rounded-full relative overflow-hidden flex items-center justify-center">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={`${testimonial.name}'s avatar`}
            className="object-contain w-16 h-full"
          />
        </div>
      </div>

      <h3 className="mt-8 text-xl font-bold mb-2">{testimonial.name}</h3>

      <div className="text-4xl font-serif mb-2">"</div>

      <p className="text-center">{testimonial.quote}</p>
    </div>
  );
}
