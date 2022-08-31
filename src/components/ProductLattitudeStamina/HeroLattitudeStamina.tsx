import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Container, Flex, Image, Stack } from "@chakra-ui/react";
import { ButtonCTALattitudeStamina } from "../ButtonCTA/ButtonCTALattitudeStamina";
import imgLattitudeStamina from "../PageHome/Carousel/image/lattitudestamina.png";

export function HeroLattitudeStamina() {
  const lattitudestamina = {
    formattedPrice: "R$132,90",
    rating: 4,
  };
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 0 }}
        py={{ base: 20, md: 12 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 4 }}>
          <Box display="flex" alignItems="baseline">
            <Badge
              variant={"solid"}
              fontSize={"lg"}
              borderRadius="lg"
              px="2"
              colorScheme="orange"
            >
              lattitude stamina
            </Badge>
          </Box>
          <Box fontSize={"3xl"} fontWeight={"bold"}>
            {lattitudestamina.formattedPrice}
          </Box>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={
                    i < lattitudestamina.rating
                      ? "yellow.400"
                      : "whiteAlpha.200"
                  }
                />
              ))}
          </Box>
          <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
            100ml
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <ButtonCTALattitudeStamina />
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Image
            alt={""}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={"100%"}
            src={imgLattitudeStamina}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
