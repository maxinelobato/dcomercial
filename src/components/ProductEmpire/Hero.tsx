import {
  Flex,
  Stack,
  // useBoolean,
} from "@chakra-ui/react";
// import Jump from "react-reveal/Jump";
import CardProduct from "./CardProduct";
import { EmpireBG } from "./EmpireBG";

export default function Hero() {
  return (
    <EmpireBG>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <CardProduct />
          </Stack>
        </Flex>
      </Stack>
    </EmpireBG>
  );
}
