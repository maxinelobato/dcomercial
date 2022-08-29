import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGSectionFour(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="full"
      bgGradient="linear(blackAlpha.300 0%, blackAlpha.600 25%, blackAlpha.600 50%)"
      {...props}
    />
  );
}
