import { StarIcon } from "@chakra-ui/icons";
import { Flex, Stack, Image, Badge, Box } from "@chakra-ui/react";
import { ButtonCTAGraceMidnight } from "../ButtonCTA/ButtonCTAGraceMidnight";
import imgGM from "./image/grace_midnight_carousel.png";

export function HeroGraceMidnight() {
  const gracemidnight = {
    formattedPrice: "R$156,90",
    rating: 3,
  };
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"flex-end"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Box display="flex" alignItems="baseline">
            <Badge
              fontSize={"lg"}
              borderRadius="full"
              px="2"
              colorScheme="orange"
            >
              Fragrância Feminina
            </Badge>
          </Box>

          <Box fontSize={"3xl"} fontWeight={"bold"}>
            {gracemidnight.formattedPrice}
            <Box as="span" color="whiteAlpha.800" fontSize="sm">
              / Parcele em Até 6x SEM JUROS
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={
                    i < gracemidnight.rating ? "yellow.400" : "whiteAlpha.200"
                  }
                />
              ))}
          </Box>

          <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
            100ml
          </Box>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ButtonCTAGraceMidnight />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image w={600} h={600} alt={""} objectFit={"cover"} src={imgGM} />
      </Flex>
    </Stack>
  );
}
