import { Box } from "@chakra-ui/react";
import { VideoBG } from "./VideoBG";

export default function CardProduct() {
  return (
    <Box
      overflow="hidden"
      backdropFilter="auto"
      backdropBlur="1rem"
      boxShadow="dark-lg"
      rounded="lg"
    >
      <VideoBG />
    </Box>
  );
}
