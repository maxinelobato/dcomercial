import { Box, Flex, HStack } from "@chakra-ui/react";
import { ButtonCTANav } from "../ButtonCTA/ButtonCTANav";

export function Navbar() {
  return (
    <>
      <Box
        backdropFilter="blur(5px)"
        backdropBlur="base"
        w={"full"}
        position={"fixed"}
        zIndex={2}
      >
        <Flex
          h={14}
          alignItems={"center"}
          justifyContent={"center"}
          direction={{ base: "column", md: "row" }}
        >
          <HStack direction={{ base: "column", md: "row" }} spacing={6}>
            <ButtonCTANav />
          </HStack>
        </Flex>
      </Box>
      <Box p={{ base: "5", md: "0.5" }} />
    </>
  );
}
