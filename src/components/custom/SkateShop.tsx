import { Button } from "../ui/button";
import skate from "../../assets/shop.png";
export const SkateShopSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 max-w-7xl mx-auto">
      <div className="relative w-full md:w-3/4 flex justify-center">
        <img
          src={skate}
          alt="Skate Shop"
          className="object-contain w-[2000px] h-[1000px] max-w-full max-h-full z-[-99]"
        />
      </div>

      <div className="w-full md:w-1/4 space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold">Our Skate Shop</h2>
        <p className="text-gray-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alterationThere are many variatioThere are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alterationThere are many variationsns
        </p>

        <Button
          variant={"link"}
          className="bg-white text-black text-2xl font-bold cursor-zoom-in py-2 rounded-md hover:bg-white hover:font-extrabold hover:text-4xl hover:text-violet-400 border-0"
        >
          Buy Now
        </Button>
      </div>
    </section>
  );
};
