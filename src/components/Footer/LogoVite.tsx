import { HTMLChakraProps, Img } from "@chakra-ui/react";
import imgVite from "/vite.svg";

export const LogoVite = (props: HTMLChakraProps<"img">) => (
  <Img
    color="accent"
    height="4"
    width="4"
    src={imgVite}
    loading="lazy"
    {...props}
  />
);
