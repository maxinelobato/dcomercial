import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function ButtonCTABodyContour() {
  return (
    <Button
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      textTransform="uppercase"
      size="lg"
      rounded="lg"
      bgColor="orange.500"
      color="white"
      boxShadow={
        "0px 1px 25px -5px rgb(0 0 0 / 48%), 0 10px 10px -5px rgb(0 0 0 / 43%)"
      }
      _hover={{
        bg: "orange.400",
      }}
      _focus={{
        bg: "orange.300",
      }}
      rightIcon={<ArrowForwardIcon />}
    >
      <Link
        style={{
          textDecoration: "none",
        }}
        href="https://www.hinode.com.br/gel-redutor-de-medidas-body-contour-corps-lignea-500g/p?id_consultor=35828203"
        isExternal
      >
        compre no site oficial
      </Link>
    </Button>
  );
}
