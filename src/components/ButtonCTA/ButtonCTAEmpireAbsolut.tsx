import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function ButtonCTAEmpireAbsolut() {
  return (
    <Button
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      textTransform="uppercase"
      size="lg"
      rounded="lg"
      boxShadow="dark-lg"
      bgColor="orange.500"
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
        href="https://www.hinode.com.br/empire-absolut-deo-colonia/p?id_consultor=35828203"
        isExternal
      >
        confira no site oficial
      </Link>
    </Button>
  );
}
