import BoxGradient from "./components/BoxGradient";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export function App() {
  return (
    <>
      <BoxGradient>
        <Hero />
        <Testimonials />
      </BoxGradient>
    </>
  );
}
