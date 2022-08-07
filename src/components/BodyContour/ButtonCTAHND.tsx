import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";

export default function ButtonCTAHND() {
  return (
    <Button
      textTransform="uppercase"
      size="lg"
      rounded="lg"
      bgColor="blackAlpha.900"
      color="white"
      boxShadow={
        "0px 1px 25px -5px rgb(0 0 0 / 48%), 0 10px 10px -5px rgb(0 0 0 / 43%)"
      }
      _hover={{
        bg: "blackAlpha.800",
      }}
      _focus={{
        bg: "blackAlpha.700",
      }}
      rightIcon={<ArrowForwardIcon />}
    >
      <Link
        style={{
          textDecoration: "none",
        }}
        href="https://www.hinode.com.br/empire-absolut-deo-colonia/p/?id_consultor=35828203"
        isExternal
      >
        compre comigo
      </Link>
    </Button>
  );
}
