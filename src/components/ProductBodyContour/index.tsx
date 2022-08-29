import Navbar from "../Navbar";
import BoxGradient from "./BoxGradient";
import Footer from "./Footer";
import HeroBodyContour from "./HeroBodyContour";

export default function ProductBodyContour() {
  return (
    <>
      <BoxGradient>
        <Navbar />
        <HeroBodyContour />
        <Footer />
      </BoxGradient>
    </>
  );
}
