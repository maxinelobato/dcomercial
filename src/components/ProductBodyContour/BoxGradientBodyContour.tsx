import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientBodyContour(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(blackAlpha.500 0%, #4E382A 25%, #25160D 50%)"
      {...props}
    />
  );
}
