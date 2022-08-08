import {
  Flex,
  Stack,
  // useBoolean,
} from "@chakra-ui/react";
// import Jump from "react-reveal/Jump";
import CardProduct from "./CardProduct";

export default function Hero() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <CardProduct />
        </Stack>
      </Flex>
    </Stack>
  );
}
