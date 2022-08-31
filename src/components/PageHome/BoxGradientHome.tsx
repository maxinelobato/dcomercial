import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientHome(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(blackAlpha.300 0%, blackAlpha.700 25%, blackAlpha.800 50%)"
      {...props}
    />
  );
}
