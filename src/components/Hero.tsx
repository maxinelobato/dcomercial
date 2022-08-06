import {
  Box,
  Flex,
  Stack,
  // useBoolean,
} from "@chakra-ui/react";
// import Jump from "react-reveal/Jump";
import CardProduct from "./CardProduct";
import MessageCTA from "./MessageCTA";
import { VideoBG } from "./VideoBG";

export default function Hero() {
  return (
    <Box
      w="100%"
      bgGradient={[
        "linear(to-tr, #d1b287, #ead0ad)",
        "linear(to-t, #ead0ad, #d1b287)",
        "linear(to-b, #FBF3E5, #ead0ad)",
      ]}
    >
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <CardProduct />
          </Stack>
        </Flex>
        <Flex flex={2}>
          <MessageCTA />
          <VideoBG />
        </Flex>
      </Stack>
    </Box>
  );
}
