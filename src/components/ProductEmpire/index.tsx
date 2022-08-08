import BoxGradient from "./BoxGradient";
import { EmpireBG } from "./EmpireBG";
import Footer from "./Footer";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

export default function ProductEmpire() {
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
