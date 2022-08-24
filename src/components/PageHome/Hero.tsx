import { MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import ButtonCTAEmpire from "../ButtonCTA/ButtonCTAEmpire";
import imgABSOLUT from "./image/absolut.png";
import imgBG from "./image/bg_absolut.png";

export default function Hero() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={imgABSOLUT} />
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
            <MinusIcon /> {""} O sucesso só é absoluto quando compartilhado.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ButtonCTAEmpire />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
