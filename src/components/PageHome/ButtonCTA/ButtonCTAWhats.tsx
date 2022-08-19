import { IconButton, Link, Stack } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonCTAWhats() {
  return (
    <Stack
      position="fixed"
      zIndex={999}
      bottom="30px"
      right="30px"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        style={{
          textDecoration: "none",
        }}
        href="https://api.whatsapp.com/send?phone=5594999083224&text=Ol%C3%A1%2C%20gostei%20desse%20produto!%20Te%20achei%20pelo%20Google"
        isExternal
      >
        <IconButton
          display="flex"
          transition="0.1s linear"
          bgGradient="linear(to-l, whatsapp.500, whatsapp.400)"
          aria-label="IconButton"
          size="lg"
          icon={<BsWhatsapp size={30} />}
          bgColor="whatsapp.500"
          _hover={{
            bg: "whatsapp.400",
            textColor: "whiteAlpha.900",
          }}
          boxShadow={
            "0px 1px 25px -5px rgb(72 186 119 / 100%), 0 10px 10px -5px rgb(72 186 119 / 43%)"
          }
        />
      </Link>
    </Stack>
  );
}
