import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { BoxGradientBodyContour } from "./BoxGradientBodyContour";
import { HeroBodyContour } from "./HeroBodyContour";

export function ProductBodyContour() {
  return (
    <>
      <BoxGradientBodyContour>
        <Navbar />
        <HeroBodyContour />
        <Footer />
      </BoxGradientBodyContour>
    </>
  );
}
