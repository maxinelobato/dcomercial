import { Button, Link } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export function ButtonCTANav() {
  return (
    <Button
      textTransform="uppercase"
      fontWeight={"semibold"}
      shadow="inner"
      as="button"
      rounded="md"
      px={4}
      h={8}
      transition="0.1s linear"
      bgColor={"green.400"}
      color={"whiteAlpha.900"}
      _hover={{ bg: "green.600" }}
      leftIcon={<BsWhatsapp />}
    >
      <Link
        style={{
          textDecoration: "none",
        }}
        href="https://wa.me/5594992951302?text=Ol%C3%A1%20preciso%20de%20ajuda%20para%20comprar%20meu%20produto!%20Te%20achei%20pelo%20Google"
        isExternal
      >
        fale conosco
      </Link>
    </Button>
  );
}
