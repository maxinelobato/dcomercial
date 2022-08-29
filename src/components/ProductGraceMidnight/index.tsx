import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { BoxGradientGraceMidnight } from "./BoxGradientGraceMidnight";
import { HeroGraceMidnight } from "./HeroGraceMidnight";

export function ProductGraceMidnight() {
  return (
    <>
      <BoxGradientGraceMidnight>
        <Navbar />
        <HeroGraceMidnight />
        <Footer />
      </BoxGradientGraceMidnight>
    </>
  );
}
