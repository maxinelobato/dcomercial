import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

export function ButtonCTA() {
  return (
    <Button
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      transition="0.1s linear"
      textTransform="uppercase"
      size="lg"
      rounded="lg"
      bgColor={"#25D366"}
      color={"whiteAlpha.900"}
      backdropFilter="auto"
      backdropBlur="1rem"
      border="1px"
      borderColor="whiteAlpha.300"
      boxShadow={
        "0px 1px 5px 1px rgb(37 211 102 / 48%), 0 5px 5px -5px rgb(37 211 102 / 43%)"
      }
      _hover={{ bg: "green.600" }}
      leftIcon={<BsWhatsapp />}
    >
      <Link
        style={{
          textDecoration: "none",
        }}
        href="https://api.whatsapp.com/send?phone=5594992951302&text=Ol%C3%A1%2C%20gostei%20desses%20produtos!%20Te%20achei%20pelo%20Google"
        isExternal
      >
        fale conosco
      </Link>
    </Button>
  );
}