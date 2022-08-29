import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { BoxGradientLattitudeStamina } from "./BoxGradientLattitudeStamina";
import { HeroLattitudeStamina } from "./HeroLattitudeStamina";

export function ProductLattitudeStamina() {
  return (
    <>
      <BoxGradientLattitudeStamina>
        <Navbar />
        <HeroLattitudeStamina />
        <Footer />
      </BoxGradientLattitudeStamina>
    </>
  );
}
