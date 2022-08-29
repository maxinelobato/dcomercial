import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientHome(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(blackAlpha.300 0%, blackAlpha.600 25%, blackAlpha.600 50%)"
      {...props}
    />
  );
}
