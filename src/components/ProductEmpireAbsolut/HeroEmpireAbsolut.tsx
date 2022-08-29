import { MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import imgEMPIREABSOLUT from "./image/absolut.png";
import imgBG from "./image/bg_absolut.png";
import ButtonCTAEmpireAbsolut from "../ButtonCTA/ButtonCTAEmpireAbsolut";

export default function HeroEmpireAbsolut() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={imgEMPIREABSOLUT} />
      </Flex>
      <Flex p={2} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }}>
            <Text
              color={"whiteAlpha.900"}
              textTransform="uppercase"
              as={"span"}
              position={"relative"}
            >
              empire
            </Text>
            <Image alt={"Login Image"} objectFit={"cover"} src={imgBG} />
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"whiteAlpha.900"}>
            <MinusIcon /> {""} Desperte o homem moderno que há em você.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ButtonCTAEmpireAbsolut />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
