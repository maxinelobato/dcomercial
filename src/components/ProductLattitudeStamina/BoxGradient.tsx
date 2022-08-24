import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGSectionFour(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(to-t, orange.500, blackAlpha.600, blackAlpha.700)"
      {...props}
    />
  );
}
