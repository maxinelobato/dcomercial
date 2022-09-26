import { HTMLChakraProps, Img } from "@chakra-ui/react";
import imgDC from "../../assets/dcomercialfooter.svg";

export const LogoDC = (props: HTMLChakraProps<"img">) => (
  <Img
    color="accent"
    height="8"
    width="auto"
    viewBox="0 0 482 89"
    src={imgDC}
    loading="lazy"
    {...props}
  />
);
