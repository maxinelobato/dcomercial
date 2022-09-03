import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { CarouselEmpire } from "./CarouselEmpire";
import { CarouselEmpireAbsolut } from "./CarouselEmpireAbsolut";
import { CarouselGelCorpus } from "./CarouselGelCorpus";
import { CarouselGraceMidnight } from "./CarouselGraceMidnight";
import { CarouselLattitudeStamina } from "./CarouselLattitudeStamina";
import { CarouselShake } from "./CarouselShake";
import { CarouselVenyx } from "./CarouselVenyx";
import { CarouselVenyxLor } from "./CarouselVenyxLor";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Carousel() {
  const [slider, setSlider] = useState<any | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <Box
      position={"relative"}
      height={"full"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="60px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="60px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        <Box>
          <CarouselEmpireAbsolut />
        </Box>
        <Box>
          <CarouselGelCorpus />
        </Box>
        <Box>
          <CarouselGraceMidnight />
        </Box>
        <Box>
          <CarouselLattitudeStamina />
        </Box>
        <Box>
          <CarouselEmpire />
        </Box>
        <Box>
          <CarouselShake />
        </Box>
        <Box>
          <CarouselVenyx />
        </Box>
        <Box>
          <CarouselVenyxLor />
        </Box>
      </Slider>
    </Box>
  );
}
