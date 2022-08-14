import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Stack, Image } from "@chakra-ui/react";
import ButtonCTALattitudeStamina from "./ButtonCTA/ButtonCTALattitudeStamina";
import ButtonCTAWhats from "./ButtonCTA/ButtonCTAWhats";
import imgLATTITUDESTAMINA from "./image/lattitudestamina.jpg";

export default function HNDLattitudeStamina() {
  const property = {
    imageUrl: imgLATTITUDESTAMINA,
    imageAlt: "Lattitude Stamina",
    title: "Lattitude Stamina",
    formattedPrice: "R$130,38",
    reviewCount: 5,
    rating: 4,
  };
  return (
    <Box
      boxShadow={
        "0px 1px 40px -5px rgb(255 255 225 / 48%), 0 10px 20px -5px rgb(255 255 225 / 43%)"
      }
      overflow="hidden"
      backdropFilter="auto"
      backdropBlur="1rem"
      rounded="lg"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} roundedTop="lg" />
      <Box p="5">
        <Box display="flex" alignItems="baseline">
          <Badge
            borderRadius="full"
            variant="solid"
            px="2"
            colorScheme="orange"
          >
            fragrância masculina
          </Badge>
        </Box>
        <Box
          color="whiteAlpha.800"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>
        <Box color="whiteAlpha.800" fontSize="lg" fontWeight="bold">
          {property.formattedPrice}
          <Box as="span" color="whiteAlpha.800" fontSize="sm">
            / à Vista ou no Cartão
          </Box>
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "orange.500" : "whiteAlpha.400"}
              />
            ))}
          <Box as="span" ml="2" color="gray.500" fontSize="sm">
            {property.reviewCount} Avaliações
          </Box>
        </Box>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={4}>
          <ButtonCTALattitudeStamina />
          <ButtonCTAWhats />
        </Stack>
      </Box>
    </Box>
  );
}