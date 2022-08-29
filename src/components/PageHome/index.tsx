import Navbar from "../Navbar";
import BoxGradient from "./BoxGradient";
import Carousel from "./Carousel";
import Footer from "./Footer";

export default function PageHome() {
  return (
    <>
      <BoxGradient>
        <Navbar />
        <Carousel />
        <Footer />
      </BoxGradient>
    </>
  );
}
