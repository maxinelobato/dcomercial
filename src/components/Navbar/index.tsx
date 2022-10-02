import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { ButtonCTANav } from "../ButtonCTA/ButtonCTANav";

export function Navbar() {
  return (
    <>
      <Box
        bgGradient="linear(to-r,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3))"
        boxShadow="base"
        backdropFilter="blur(5px)"
        backdropBlur="base"
        w={"full"}
        position={"fixed"}
        zIndex={2}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"center"}
          direction={{ base: "column", md: "row" }}
        >
          <HStack direction={{ base: "column", md: "row" }} spacing={6}>
            <Text textAlign={"center"} fontWeight={"semibold"}>
              Não achou seu produto?
            </Text>
            <ButtonCTANav />
          </HStack>
        </Flex>
      </Box>
      <Box p={{ base: "3", md: "0.5" }} />
    </>
  );
}
