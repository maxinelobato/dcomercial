import { Box, BoxProps } from "@chakra-ui/react";
import bgBackground from "../../assets/bgBackgound.png";

export function BoxImage(props: BoxProps) {
  return (
    <Box
      w="100%"
      loading="lazy"
      bgImage={bgBackground}
      bgSize={"cover"}
      bgPosition={"center center"}
      {...props}
    />
  );
}
