import { MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import imgGRACEMIDNIGHT from "./image/gracemidnight.png";
import imgBG from "./image/bg_midnight.png";
import ButtonCTAGraceMidnight from "../ButtonCTA/ButtonCTAGraceMidnight";

export default function HeroGraceMidnight() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={imgGRACEMIDNIGHT} />
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
              grace
            </Text>
            <Image alt={"Login Image"} objectFit={"cover"} src={imgBG} />
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"whiteAlpha.900"}>
            <MinusIcon /> {""} Foi feito para espalhar toda a sua elegância.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ButtonCTAGraceMidnight />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
