import { StarIcon } from "@chakra-ui/icons";
import { Container, Stack, Flex, Box, Image, Badge } from "@chakra-ui/react";
import { ButtonCTABodyContour } from "../ButtonCTA/ButtonCTABodyContour";
import imgGelCorpus from "../PageHome/Carousel/image/gelredutor.png";

export function HeroBodyContour() {
  const gelcorpus = {
    formattedPrice: "R$68,90",
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
              gel corpus
            </Badge>
          </Box>
          <Box fontSize={"3xl"} fontWeight={"bold"}>
            {gelcorpus.formattedPrice}
          </Box>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < gelcorpus.rating ? "yellow.400" : "whiteAlpha.200"}
                />
              ))}
          </Box>
          <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
            500g
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <ButtonCTABodyContour />
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
            src={imgGelCorpus}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
