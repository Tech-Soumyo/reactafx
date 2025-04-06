import { Button } from "../ui/button";
import skate from "../../assets/shop.png";
import { useNavigate } from "react-router-dom";

export const SkateShopSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 pb-4 sm:pb-2 pt-2 sm:pt-4 md:pt-3 max-w-7xl mx-auto mt-[-120px]"
    >
      <div className="relative w-full md:w-3/4 flex justify-center ">
        <img
          src={skate}
          alt="Skate Shop"
          className="object-contain w-[2000px] h-[1000px] max-w-full max-h-full z-[-99] mb-[-140px] sm:mb-[-40px]"
        />
      </div>

      <div className="w-full md:w-1/4 space-y-6 text-center md:text-left  ">
        <h2 className="text-3xl font-bold">Our Skate Shop</h2>
        <p className="text-gray-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alterationThere are many variatioThere are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alterationThere are many variationsns
        </p>

        <Button
          variant={"link"}
          className="bg-white text-black text-2xl font-bold py-2 rounded-md hover:bg-white hover:font-extrabold hover:text-4xl hover:text-violet-400 border-0"
          onClick={() => navigate("/buy")}
        >
          Buy Now
        </Button>
      </div>
    </section>
  );
};
