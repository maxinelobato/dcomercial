import { Box, Button, Flex, HStack, Text, Link } from "@chakra-ui/react";

export function Navbar() {
  return (
    <>
      <Box
        bgColor="rgba(245, 215, 49, 0.3)"
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
            <Button size={"sm"} textTransform={"uppercase"} shadow="lg">
              <Link
                style={{
                  textDecoration: "none",
                }}
                href="https://api.whatsapp.com/send?phone=5594992951302&text=Ol%C3%A1%2C%20gostei%20desses%20produtos!%20Te%20achei%20pelo%20Google"
                isExternal
              >
                fale conosco
              </Link>
            </Button>
          </HStack>
        </Flex>
      </Box>
      <Box p={{ base: "3", md: "0.5" }} />
    </>
  );
}
