import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientInfo(props: BoxProps) {
  return (
    <Box
      w="100%"
      bgGradient="linear(to-r, gray.800 10%, blackAlpha.700 80%, blackAlpha.700), "
      {...props}
    />
  );
}
