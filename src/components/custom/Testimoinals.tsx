import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import test2 from "../../assets/test2.png";
import test1 from "../../assets/test1.png";
import test3 from "../../assets/test3.png";

type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Disol",
    avatar: test1,
    quote:
      "humour, or randomised words which don't look even slightly believable. If you are",
  },
  {
    id: 2,
    name: "Jone Lo",
    avatar: test3,
    quote:
      "humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 3,
    name: "Michale",
    avatar: test2,
    quote:
      "humour, or randomised words which don't look even slightly believable. If you are",
  },
  {
    id: 4,
    name: "Sarah",
    avatar: test2,
    quote:
      "humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
  },
  {
    id: 5,
    name: "David",
    avatar: test2,
    quote:
      "humour, or randomised words which don't look even slightly believable. If you are going to use",
  },
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const getVisibleTestimonials = () => {
    const centerIndex = activeIndex;
    const leftIndex =
      (centerIndex - 1 + testimonials.length) % testimonials.length;
    const rightIndex = (centerIndex + 1) % testimonials.length;

    return [
      testimonials[leftIndex],
      testimonials[centerIndex],
      testimonials[rightIndex],
    ];
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="bg-[#3a1f8d] py-36 lg:py-56 md:py-60 sm:py-64 ">
      <div className="container mx-auto px-4 z-[-99]">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Testimonial
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-12 ">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === 1}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <Button
            onClick={handlePrev}
            variant="ghost"
            size="icon"
            className="bg-[#b11313] hover:bg-[#8f0f0f] text-white rounded-full h-12 w-12"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            className="bg-[#b11313] hover:bg-[#8f0f0f] text-white rounded-full h-12 w-12"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
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
        "relative flex flex-col items-center px-6 py-16 mb-16 mt-16 rounded-lg transition-all duration-300 ",
        isActive
          ? "bg-white text-gray-800 z-10 shadow-xl scale-105 w-[380px] h-[300px] md:w-[440px]  md:h-[440px] font-extrabold" // Active card larger
          : "bg-[#b11313] text-white scale-95 w-[300px] md:w-[320px] h-[300px] md:h-[420px] sm:w-[360px] sm:h-[360px] " // Inactive cards same size
      )}
    >
      <div className="absolute -top-14 rounded-full border-4 border-[#3a1f8d] bg-white p-1 overflow-hidden shadow-2xl shadow-amber-50 ">
        <div className="w-24 h-24 rounded-full relative overflow-hidden flex items-center justify-center ">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={`${testimonial.name}'s avatar`}
            className="object-contain w-16 h-full "
          />
        </div>
      </div>

      <h3 className="mt-8 text-xl font-bold mb-2">{testimonial.name}</h3>

      <div className="text-4xl font-serif mb-2">"</div>

      <p className="text-center">{testimonial.quote}</p>
    </div>
  );
}
