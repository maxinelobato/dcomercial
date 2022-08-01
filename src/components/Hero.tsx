import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Stack,
  Text,
} from "@chakra-ui/react";
import { VideoBG } from "./VideoBG";

export default function Hero() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Box
            backdropFilter="auto"
            backdropBlur="1rem"
            boxShadow="lg"
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.400"
            rounded="lg"
            maxW="lg"
            p={6}
          >
            <Heading lineHeight="tall">
              <Highlight
                query={["spotlight", "emphasize", "Accentuate"]}
                styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
              >
                With the Highlight component, you can spotlight, emphasize and
                accentuate words.
              </Highlight>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The project board is an exclusive resource for contract work. Its
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create Project
              </Button>
              <Button rounded={"full"}>How It Works</Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <VideoBG />
      </Flex>
    </Stack>
  );
}
