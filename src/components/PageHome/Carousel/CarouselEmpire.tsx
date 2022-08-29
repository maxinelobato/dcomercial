import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, Image, Stack } from "@chakra-ui/react";
import { ButtonCTACarousel } from "../../ButtonCTA/ButtonCTACarousel";
import imgE from "./image/empire_carousel.png";

export function CarouselEmpire() {
  const empire = {
    formattedPrice: "R$156,90",
    rating: 4,
  };
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"flex-end"}>
        <Stack spacing={2} w={"full"} maxW={"lg"}>
          <Box display="flex" alignItems="baseline">
            <Badge
              fontSize={"lg"}
              borderRadius="lg"
              px="2"
              colorScheme="orange"
            >
              empire
            </Badge>
          </Box>

          <Box fontSize={"3xl"} fontWeight={"bold"}>
            {empire.formattedPrice}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < empire.rating ? "yellow.400" : "whiteAlpha.200"}
                />
              ))}
          </Box>

          <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
            100ml
          </Box>

          <Stack direction={{ base: "column", md: "row" }}>
            <ButtonCTACarousel />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image w={600} h={600} alt={""} objectFit={"cover"} src={imgE} />
      </Flex>
    </Stack>
  );
}
