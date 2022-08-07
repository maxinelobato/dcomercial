import BoxGradient from "./components/BodyShower/BoxGradient";
import Hero from "./components/BodyShower/Hero";
import Testimonials from "./components/BodyShower/Testimonials";

export function BodyShower() {
  return (
    <>
      <BoxGradient>
        <Hero />
        <Testimonials />
      </BoxGradient>
    </>
  );
}
