import "./App.css";
import { Animation2D } from "./components/custom/2DAnimation";
import { ContactUs } from "./components/custom/Contact";
import { Expertise } from "./components/custom/Expertise";
import { Explainer3D } from "./components/custom/Explainer3D";
import Headers from "./components/custom/Headers";
import { OneCarousel } from "./components/custom/OneCorousel";
import { SkateShopSection } from "./components/custom/SkateShop";
import { TestimonialCarousel } from "./components/custom/Testimoinals";

import VideoSection from "./components/custom/YtSection";
import CanvasCursor from "./components/ui/CanvasCursor";
import FluidCursor from "./components/ui/FluidCursor";
import { SplashCursor } from "./components/ui/splash-cursor";

function App() {
  return (
    <>
      {/* <SplashCursor /> */}
      {/* <Routes>
        <Route path="/" element={<Headers />}></Route>
      </Routes> */}
      <CanvasCursor />
      {/* <FluidCursor /> */}
      <Headers />
      <OneCarousel />
      <Expertise />
      <VideoSection />
      <SkateShopSection />
      <Animation2D />
      <Explainer3D />
      <TestimonialCarousel />
      <ContactUs />
    </>
  );
}

export default App;
