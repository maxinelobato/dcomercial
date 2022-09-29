import { HTMLChakraProps, Img } from "@chakra-ui/react";
import imgHND from "../../assets/hinodegroup.webp";

export const LogoHND = (props: HTMLChakraProps<"img">) => (
  <Img
    color="accent"
    height="5"
    width="32"
    src={imgHND}
    loading="lazy"
    {...props}
  />
);
