import BoxGradient from "./BoxGradient";
import Footer from "./Footer";
import Hero from "./Hero";
import Products from "./Products";
import Testimonials from "./Testimonials";

export default function PageHome() {
  return (
    <>
      <BoxGradient>
        <Hero />
        <Testimonials />
        <Products />
      </BoxGradient>
      <Footer />
    </>
  );
}
