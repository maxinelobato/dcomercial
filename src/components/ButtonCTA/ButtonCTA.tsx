import { Button, Link } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import HeadShake from "react-reveal/HeadShake";

export function ButtonCTA() {
  return (
    <HeadShake forever={true}>
      <Button
        textTransform="uppercase"
        size="lg"
        rounded="lg"
        bgColor={"orange.400"}
        color={"whiteAlpha.900"}
        backdropFilter="auto"
        backdropBlur="1rem"
        border="1px"
        borderColor="whiteAlpha.300"
        boxShadow="base"
        transition="0.1s linear"
        _hover={{ bg: "orange.600" }}
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
    </HeadShake>
  );
}
