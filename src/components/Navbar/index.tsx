import { Box, Flex, HStack, Text, Link } from "@chakra-ui/react";

export function Navbar() {
  return (
    <>
      <Box
        bgGradient="linear(to-r,rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3))"
        boxShadow="base"
        backdropFilter="blur(5px)"
        backdropBlur="base"
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
            <Box
              fontWeight={"semibold"}
              shadow="inner"
              as="button"
              rounded="md"
              bg="orange.400"
              color="whiteAlpha.800"
              px={4}
              h={8}
              boxShadow={
                "0px 1px 5px 1px rgb(237 137 54 / 48%), 0 5px 5px -5px rgb(237 137 54 / 43%)"
              }
            >
              <Link
                style={{
                  textDecoration: "none",
                }}
                href="https://wa.me/5594992951302?text=Ol%C3%A1%20preciso%20de%20ajuda%20para%20comprar%20meu%20produto!%20Te%20achei%20pelo%20Google"
                isExternal
              >
                Saiba mais
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Box>
      <Box p={{ base: "3", md: "0.5" }} />
    </>
  );
}
