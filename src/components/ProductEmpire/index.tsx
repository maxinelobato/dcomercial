import Navbar from "../Navbar";
import BoxGradient from "./BoxGradient";
import Footer from "./Footer";
import HeroEmpire from "./HeroEmpire";

export default function ProductEmpire() {
  return (
    <>
      <BoxGradient>
        <Navbar />
        <HeroEmpire />
        <Footer />
      </BoxGradient>
    </>
  );
}
