import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Center,
  Image,
} from "@chakra-ui/react";
import imgCOMMENTARY1 from "./image/comments1.png";
import imgCOMMENTARY2 from "./image/comments2.png";

export default function Testimonials() {
  const IMAGE1 = imgCOMMENTARY1;
  const IMAGE2 = imgCOMMENTARY2;
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "lg" }} margin={"auto"}>
        <Heading
          py={5}
          fontSize={48}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("whiteAlpha.800", "whiteAlpha.900")}
        >
          O QUE OS NOSSOS CLIENTES DIZEM
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 5, lg: 8 }}
        mb={12}
        mx={16}
      >
        <Box>
          <Center py={12}>
            <Box
              role={"group"}
              maxW="auto"
              w={"full"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Image rounded={"lg"} objectFit={"cover"} src={IMAGE1} />
            </Box>
          </Center>
        </Box>
        <Box>
          <Center py={12}>
            <Box
              role={"group"}
              maxW="auto"
              w={"full"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Image rounded={"lg"} objectFit={"cover"} src={IMAGE2} />
            </Box>
          </Center>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
