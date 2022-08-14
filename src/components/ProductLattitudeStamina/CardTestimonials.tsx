import { Box, Image } from "@chakra-ui/react";
import imgURL from "./image/empire.jpg";

export default function CardTestimonials() {
  const property = {
    imageUrl: imgURL,
    imageAlt: "Empire",
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
