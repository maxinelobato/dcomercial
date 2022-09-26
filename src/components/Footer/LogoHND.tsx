import { HTMLChakraProps, Img } from "@chakra-ui/react";
import imgHND from "../../assets/hinodegroup.svg";

export const LogoHND = (props: HTMLChakraProps<"img">) => (
  <Img
    color="accent"
    height="32"
    width="32"
    viewBox="0 0 482 89"
    src={imgHND}
    loading="lazy"
    {...props}
  />
);
