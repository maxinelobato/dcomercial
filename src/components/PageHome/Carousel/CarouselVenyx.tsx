import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, Image, Stack } from "@chakra-ui/react";
import { ButtonCTACarousel } from "../../ButtonCTA/ButtonCTACarousel";
import imgV from "./image/venyx_carousel.png";

export function CarouselVenyx() {
  const venyx = {
    formattedPrice: "R$157,90",
    rating: 4,
  };
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"flex-end"}>
        <Stack spacing={2} w={"full"} maxW={"lg"}>
          <Box display="flex" alignItems="baseline">
            <Badge
              fontSize={"lg"}
              borderRadius="full"
              px="2"
              colorScheme="orange"
            >
              Venyx / Venyx L'OR
            </Badge>
          </Box>

          <Box fontSize={"3xl"} fontWeight={"bold"}>
            {venyx.formattedPrice}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < venyx.rating ? "yellow.400" : "whiteAlpha.200"}
                />
              ))}
          </Box>

          <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
            100ml
          </Box>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ButtonCTACarousel />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image w={600} h={600} alt={""} objectFit={"cover"} src={imgV} />
      </Flex>
    </Stack>
  );
}