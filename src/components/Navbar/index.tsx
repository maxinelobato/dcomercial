import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";

export function Navbar() {
  return (
    <>
      <Box
        bgGradient={
          "linear(to-r, rgba(245, 215, 49, 0.5), rgba(58, 51, 79, 0.5) )"
        }
        boxShadow={"dark-lg"}
        backdropFilter="auto"
        backdropBlur="1rem"
        w={"full"}
        position={"fixed"}
        zIndex={2}
      >
        <Flex
          h={12}
          alignItems={"center"}
          justifyContent={"center"}
          direction={{ base: "column", md: "row" }}
        >
          <HStack direction={{ base: "column", md: "row" }} spacing={6}>
            <Text textAlign={"center"} fontWeight={"semibold"}>
              Não achou seu produto?
            </Text>
            <Button size={"sm"}>Fale Conosco</Button>
          </HStack>
        </Flex>
      </Box>
      <Box p={{ base: "4", md: "lg" }} />
    </>
  );
}
