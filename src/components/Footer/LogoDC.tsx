import { HTMLChakraProps, Img } from "@chakra-ui/react";
import imgDC from "../../assets/dcomercial.webp";

export const LogoDC = (props: HTMLChakraProps<"img">) => (
  <Img color="accent" height="8" width="8" src={imgDC} {...props} />
);
