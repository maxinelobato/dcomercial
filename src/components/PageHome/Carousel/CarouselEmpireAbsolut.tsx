import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  Img,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ButtonCTACarousel } from "../../ButtonCTA/ButtonCTACarousel";
import imgEmpireAbsolut from "./image/empireabsolut.png";

export function CarouselEmpireAbsolut() {
  const empireabsolut = {
    formattedPrice: "R$156,90",
    rating: 4,
  };
  return (
    <Box
      maxW="6xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "0", lg: "12" }}
    >
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={{ base: "0", lg: "20" }}
      >
        <Box
          rounded={"lg"}
          backdropFilter="auto"
          backdropBlur="0,5rem"
          bg={{
            base: useColorModeValue("whiteAlpha.50", "whiteAlpha.50"),
            lg: "transparent",
          }}
          width={{ lg: "lg" }}
          transform={{ base: "translateY(-50%)", lg: "none" }}
          mx={{ base: "6", md: "8", lg: "0" }}
          px={{ base: "6", md: "8", lg: "0" }}
          py={{ base: "6", md: "8", lg: "36" }}
        >
          <Stack spacing={{ base: "8", lg: "10" }}>
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Box display="flex" alignItems="baseline">
                <Badge
                  variant={"solid"}
                  fontSize={"lg"}
                  borderRadius="lg"
                  px="2"
                  colorScheme="orange"
                >
                  empire absolut
                </Badge>
              </Box>
              <Box fontSize={"3xl"} fontWeight={"bold"}>
                {empireabsolut.formattedPrice}
              </Box>
              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < empireabsolut.rating
                          ? "yellow.400"
                          : "whiteAlpha.200"
                      }
                    />
                  ))}
              </Box>
              <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
                100ml
              </Box>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }}>
              <ButtonCTACarousel />
            </Stack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Img
            boxSize="600px"
            display={{ base: "none", sm: "initial" }}
            alt=""
            objectFit="cover"
            src={imgEmpireAbsolut}
          />
        </Flex>
      </Stack>
    </Box>
  );
}
