import { MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import imgSTAMINA from "./image/lattitudestamina.png";
import imgBG from "./image/bg_stamina.png";
import ButtonCTALattitudeStamina from "../ButtonCTA/ButtonCTALattitudeStamina";

export default function Hero() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={imgSTAMINA} />
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
              lattitude
            </Text>
            <Image alt={"Login Image"} objectFit={"cover"} src={imgBG} />
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"whiteAlpha.900"}>
            <MinusIcon /> {""} Para você que gosta de superar obstáculos,
            alcançar novas posições e encarar novos caminhos.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ButtonCTALattitudeStamina />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
