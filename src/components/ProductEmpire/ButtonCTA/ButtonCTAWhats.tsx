import { Button, Link } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonCTAWhats() {
  return (
    <Button
      textTransform="uppercase"
      size="lg"
      rounded="lg"
      bgColor="whatsapp.500"
      color="white"
      boxShadow={
        "0px 1px 25px -5px rgb(0 0 0 / 48%), 0 10px 10px -5px rgb(0 0 0 / 43%)"
      }
      _hover={{
        bg: "whatsapp.400",
      }}
      _focus={{
        bg: "orange.300",
      }}
      rightIcon={<BsWhatsapp />}
    >
      <Link
        style={{
          textDecoration: "none",
        }}
        href="https://api.whatsapp.com/send?phone=5594999083224&text=Ol%C3%A1%2C%20gostei%20desse%20produto!%20Te%20achei%20pelo%20Google"
        isExternal
      >
        fale conosco
      </Link>
    </Button>
  );
}
