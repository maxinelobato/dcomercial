import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientHome(props: BoxProps) {
  return (
    <Box
      w="100%"
      bgGradient="linear(to-r, yellow.500 10%, blackAlpha.700 80%, blackAlpha.700)"
      {...props}
    />
  );
}
