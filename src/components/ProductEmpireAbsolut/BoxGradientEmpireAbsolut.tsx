import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientEmpireAbsolut(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(blackAlpha.500 0%, #58312F 25%, #B34A2F 50%)"
      {...props}
    />
  );
}
