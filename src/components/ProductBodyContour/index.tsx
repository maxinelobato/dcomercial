import { EmpireBG } from "../ProductEmpire/EmpireBG";
import BoxGradient from "./BoxGradient";
import Footer from "./Footer";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

export function ProductBodyContour() {
  return (
    <>
      <EmpireBG>
        <Hero />
      </EmpireBG>
      <BoxGradient>
        <Testimonials />
      </BoxGradient>
      <Footer />
    </>
  );
}
