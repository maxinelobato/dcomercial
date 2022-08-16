import { Box, Heading, Image } from "@chakra-ui/react";
import imgEMPIRE from "./image/empirehomem.jpg";

export default function ImgEmpireCTA() {
  const property = {
    imageUrl: imgEMPIRE,
    titleH1: "Você quer ter sucesso?",
    titleH2: "Com o Empire você exala sua essência, poder e intensidade!",
  };
  return (
    <Box
      bgSize="cover"
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
