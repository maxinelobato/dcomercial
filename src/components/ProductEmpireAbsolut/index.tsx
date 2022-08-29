import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { BoxGradientEmpireAbsolut } from "./BoxGradientEmpireAbsolut";
import { HeroEmpireAbsolut } from "./HeroEmpireAbsolut";

export function ProductEmpireAbsolut() {
  return (
    <>
      <BoxGradientEmpireAbsolut>
        <Navbar />
        <HeroEmpireAbsolut />
        <Footer />
      </BoxGradientEmpireAbsolut>
    </>
  );
}
