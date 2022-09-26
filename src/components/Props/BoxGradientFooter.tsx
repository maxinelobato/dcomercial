import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientFooter(props: BoxProps) {
  return (
    <Box
      w="100%"
      bgGradient="linear(to-r, blackAlpha.500 25%, blackAlpha.700 50%)"
      {...props}
    />
  );
}
