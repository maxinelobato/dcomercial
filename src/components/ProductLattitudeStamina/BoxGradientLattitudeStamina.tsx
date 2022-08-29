import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGradientLattitudeStamina(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(to-t, orange.500, blackAlpha.600, blackAlpha.700)"
      {...props}
    />
  );
}