import { Flex, FlexProps } from "@chakra-ui/react";
import imgEmpireHomem from "./image/empirehomem.jpg";

export function EmpireBG(props: FlexProps) {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={imgEmpireHomem}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      {...props}
    />
  );
}
