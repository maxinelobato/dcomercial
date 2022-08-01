import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function Info() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center h="100vh">
      <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={"50px"} color={"blue.500"} />
        <Heading
          mt={"6"}
          mb={2}
          bgGradient="linear(to-l, blue.500, blue.200)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Aviso Importante
        </Heading>
        <Text color={"gray.500"} mt={"6"} mb={2}>
          Estamos estruturando a página! Logo traremos muitas novidades pra
          você. 🙃
        </Text>
        <Button onClick={toggleColorMode} mt={"6"} mb={2}>
          {colorMode === "light" ? "🌑" : "🌙"}
        </Button>
      </Box>
    </Center>
  );
}
