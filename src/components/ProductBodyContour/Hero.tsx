import { Flex, Stack } from "@chakra-ui/react";
import HNDGelCorpus from "./HNDGelCorpus";
import ImgGelCorpusCTA from "./ImgGelCorpusCTA";

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
          <HNDGelCorpus />
        </Stack>
      </Flex>
      <Flex flex={2} align="center">
        <ImgGelCorpusCTA />
      </Flex>
    </Stack>
  );
}
