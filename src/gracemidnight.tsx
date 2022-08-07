import BoxGradient from "./components/GraceMidnight/BoxGradient";
import Hero from "./components/GraceMidnight/Hero";
import Testimonials from "./components/GraceMidnight/Testimonials";

export function GraceMidnight() {
  return (
    <>
      <BoxGradient>
        <Hero />
        <Testimonials />
      </BoxGradient>
    </>
  );
}
