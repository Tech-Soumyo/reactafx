import CanvasCursor from "../ui/CanvasCursor";
import { Animation2D } from "./2DAnimation";
import { ContactUs } from "./Contact";
import { Expertise } from "./Expertise";
import { Explainer3D } from "./Explainer3D";
import Headers from "./Headers";
import { OneCarousel } from "./OneCorousel";
import { SkateShopSection } from "./SkateShop";
import { TestimonialCarousel } from "./Testimoinals";
import VideoSection from "./YtSection";

export const MainPage = () => {
  return (
    <div>
      <CanvasCursor />
      <Headers />
      <OneCarousel />
      <Expertise />
      <VideoSection />
      <SkateShopSection />
      <Animation2D />
      <Explainer3D />
      <TestimonialCarousel />
      <ContactUs />
    </div>
  );
};
