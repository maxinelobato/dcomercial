import { Flex, FlexProps } from "@chakra-ui/react";
import imgGraceWomen from "./image/gracewomen.jpg";

export function GraceBG(props: FlexProps) {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={imgGraceWomen}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      {...props}
    />
  );
}
