import CanvasCursor from "../ui/CanvasCursor";
import { Animation2D } from "./2DAnimation";
import { ContactUs } from "./Contact";
import { Expertise } from "./Expertise";
import { Animation3D } from "./3DAnimation";
import ContactSection from "./FeedBack";
import Foooter from "./Foooter";
import Headers from "./Headers";
import { OneCarousel } from "./OneCorousel";
import { OurStudio } from "./OurStudio";
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
      <OurStudio />
      <Animation2D />
      <Animation3D />
      <TestimonialCarousel />
      <ContactUs />
      <ContactSection />
      <Foooter />
    </div>
  );
};
