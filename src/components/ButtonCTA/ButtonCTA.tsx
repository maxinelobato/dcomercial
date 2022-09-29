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
      bgColor={"orange.400"}
      color={"whiteAlpha.900"}
      backdropFilter="auto"
      backdropBlur="1rem"
      border="1px"
      borderColor="whiteAlpha.300"
      boxShadow="base"
      _hover={{ bg: "orange.600" }}
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
