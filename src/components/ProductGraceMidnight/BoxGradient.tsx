import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGSectionFour(props: BoxProps) {
  return (
    <Box
      w="100%"
      bgGradient="linear(whiteAlpha.500 0%, blackAlpha.600 25%, blackAlpha.700 50%)"
      {...props}
    />
  );
}
