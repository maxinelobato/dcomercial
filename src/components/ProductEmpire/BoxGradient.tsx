import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGSectionFour(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(blackAlpha.500 0%, gray.800 25%, gray.700 50%)"
      {...props}
    />
  );
}
