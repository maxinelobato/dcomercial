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
                href="https://api.whatsapp.com/send/?phone=94992951302&text=Ol%C3%A1+preciso+de+ajuda+para+comprar+meu+produto%21+Te+achei+pelo+Google.&type=phone_number&app_absent=0"
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
