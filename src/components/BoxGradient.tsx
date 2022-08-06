import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGSectionFour(props: BoxProps) {
  return (
    <Box
      w="100%"
      bgGradient={[
        "linear(to-tr, #d1b287, #ead0ad)",
        "linear(to-t, #ead0ad, #d1b287)",
        "linear(to-b, #FBF3E5, #ead0ad)",
      ]}
      {...props}
    />
  );
}
