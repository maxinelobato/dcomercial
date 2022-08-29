import Navbar from "../Navbar";
import BoxGradient from "./BoxGradient";
import Footer from "./Footer";
import HeroGraceMidnight from "./HeroGraceMidnight";

export default function ProductGraceMidnight() {
  return (
    <>
      <BoxGradient>
        <Navbar />
        <HeroGraceMidnight />
        <Footer />
      </BoxGradient>
    </>
  );
}
