import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGSectionFour(props: BoxProps) {
  return (
    <Box
      w="100%"
      bgGradient="linear(#8b786a 0%, blackAlpha.300 25%, blackAlpha.600 50%)"
      {...props}
    />
  );
}
