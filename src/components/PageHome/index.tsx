import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { BoxGradientHome } from "./BoxGradientHome";
import { Carousel } from "./Carousel";

export function PageHome() {
  return (
    <>
      <BoxGradientHome>
        <Navbar />
        <Carousel />
        <Footer />
      </BoxGradientHome>
    </>
  );
}
