import BoxGradient from "./BoxGradient";
import Footer from "./Footer";
import { GraceBG } from "./GraceBG";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

export default function ProductGraceMidnight() {
  return (
    <>
      <GraceBG>
        <Hero />
      </GraceBG>
      <BoxGradient>
        <Testimonials />
      </BoxGradient>
      <Footer />
    </>
  );
}
