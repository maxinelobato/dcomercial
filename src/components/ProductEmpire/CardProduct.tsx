import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Stack, Image } from "@chakra-ui/react";
import imgURL from "./image/empire.jpg";
import ButtonCTAHND from "./ButtonCTAHND";
import ButtonCTAWhats from "./ButtonCTAWhats";

export default function CardProduct() {
  const property = {
    imageUrl: imgURL,
    imageAlt: "Empire Absolut",
    title: "Família Olfativa: Oriental Amadeirado Ambarado",
    formattedPrice: "R$156,90",
    reviewCount: 2,
    rating: 2,
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
      <Box p="5">
        <Box display="flex" alignItems="baseline">
          <Badge
            borderRadius="full"
            variant="solid"
            px="2"
            colorScheme="orange"
          >
            Lançamento
          </Badge>
        </Box>
        <Box
          color="blackAlpha.700"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>
        <Box color="blackAlpha.700" fontSize="lg" fontWeight="bold">
          {property.formattedPrice}
          <Box as="span" color="blackAlpha.700" fontSize="sm">
            / à Vista ou no Cartão
          </Box>
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "orange.500" : "blackAlpha.400"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} Avaliações
          </Box>
        </Box>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={4}>
          {/* <Jump forever={useBoolean}> */}
          <ButtonCTAHND />
          <ButtonCTAWhats />
          {/* </Jump> */}
        </Stack>
      </Box>
    </Box>
  );
}
