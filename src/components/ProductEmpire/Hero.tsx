import { Flex, Stack, Image } from "@chakra-ui/react";
import HNDEmpire from "./HNDEmpire";
import ImgEmpireCTA from "./ImgEmpireCTA";

export default function Hero() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex
        pt={10}
        p={10}
        margin={6}
        flex={1}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={6} w="lg" maxW="md">
          <HNDEmpire />
        </Stack>
      </Flex>
      <Flex flex={2} align="center">
        <ImgEmpireCTA />
      </Flex>
    </Stack>
  );
}
