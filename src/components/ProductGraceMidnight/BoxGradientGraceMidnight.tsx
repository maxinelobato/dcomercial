import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientGraceMidnight(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(blackAlpha.500 0%, #2A252A 25%, #1A1315 50%)"
      {...props}
    />
  );
}
