import { Box, Image } from "@chakra-ui/react";
import imgURL from "./image/empireabsolut.jpg";

export default function CardTestimonials() {
  const property = {
    imageUrl: imgURL,
    imageAlt: "Empire Absolut",
  };
  return (
    <Box
      overflow="hidden"
      backdropFilter="auto"
      backdropBlur="1rem"
      boxShadow="dark-lg"
      rounded="lg"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} roundedTop="lg" />
    </Box>
  );
}
