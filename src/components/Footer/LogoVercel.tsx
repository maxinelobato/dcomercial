import { HTMLChakraProps, Img } from "@chakra-ui/react";
import imgVercel from "../../assets/vercel.svg";

export const LogoVercel = (props: HTMLChakraProps<"img">) => (
  <Img
    color="accent"
    height="4"
    width="4"
    src={imgVercel}
    loading="lazy"
    {...props}
  />
);
