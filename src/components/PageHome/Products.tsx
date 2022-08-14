import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import PBodyContour from "./Produtos/PBodyContour";
import PEmpire from "./Produtos/PEmpire";
import PGraceMidnight from "./Produtos/PGraceMidnight";
import PLattitudeStamina from "./Produtos/PLattitudeStamina";

export default function Products() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "full", lg: "2xl" }} margin={"auto"}>
        <Heading
          py={5}
          fontSize={48}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("whiteAlpha.800", "whiteAlpha.900")}
        >
          CONHEÇA NOSSOS MELHORES PRODUTOS
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={{ base: 5, lg: 8 }}
        mb={12}
        mx={16}
      >
        <PGraceMidnight />
        <PEmpire />
        <PBodyContour />
        <PLattitudeStamina />
      </SimpleGrid>
    </Flex>
  );
}
