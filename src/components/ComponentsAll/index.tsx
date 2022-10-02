import { Footer } from "../Footer";
import { Hero } from "../Hero";
import { Information } from "../Information";
import { Navbar } from "../Navbar";
import { BoxImage } from "../Props/BoxImage";
import { StyleDivider } from "../Props/StyleDivider";

export function ComponentsAll() {
  return (
    <>
      <BoxImage>
        <Navbar />
        <Hero />
        <Information />
      </BoxImage>
      <StyleDivider />
      <Footer />
    </>
  );
}
