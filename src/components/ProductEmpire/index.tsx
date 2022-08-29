import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { BoxGradientEmpire } from "./BoxGradientEmpire";
import { HeroEmpire } from "./HeroEmpire";

export function ProductEmpire() {
  return (
    <>
      <BoxGradientEmpire>
        <Navbar />
        <HeroEmpire />
        <Footer />
      </BoxGradientEmpire>
    </>
  );
}
