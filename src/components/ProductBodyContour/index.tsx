import BoxGradient from "./BoxGradient";
import Footer from "./Footer";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

export default function ProductBodyContour() {
  return (
    <>
      <BoxGradient>
        <Hero />
        <Testimonials />
      </BoxGradient>
      <Footer />
    </>
  );
}
