import { Box, Heading, Image } from "@chakra-ui/react";
import imgGRACEMIDNIGHT from "./image/gracewomen.jpg";

export default function ImgMidnightCTA() {
  const property = {
    imageUrl: imgGRACEMIDNIGHT,
    titleH1: "Já conhece o Grace Midnight?",
    titleH2: "Foi feito para você espalhar toda a sua elegância!",
  };
  return (
    <Box
      bgSize="contain"
      backdropFilter="auto"
      backdropBlur="1rem"
      rounded="lg"
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="dark-lg"
    >
      <Box p="5">
        <Box>
          <Heading
            mb={4}
            textAlign="right"
            color="whiteAlpha.800"
            fontWeight="semibold"
            lineHeight="normal"
            letterSpacing="wider"
          >
            {property.titleH1}
          </Heading>
          <Heading
            fontSize="xl"
            textAlign="right"
            color="whiteAlpha.700"
            fontWeight="light"
            lineHeight="normal"
            letterSpacing="wider"
          >
            {property.titleH2}
          </Heading>
        </Box>
      </Box>
      <Image
        filter="auto"
        brightness="40%"
        w="auto"
        h="auto"
        src={property.imageUrl}
        roundedBottom="lg"
      />
    </Box>
  );
}
