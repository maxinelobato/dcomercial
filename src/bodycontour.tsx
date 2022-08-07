import BoxGradient from "./components/BodyContour/BoxGradient";
import Hero from "./components/BodyContour/Hero";
import Testimonials from "./components/BodyContour/Testimonials";

export function BodyContour() {
  return (
    <>
      <BoxGradient>
        <Hero />
        <Testimonials />
      </BoxGradient>
    </>
  );
}
