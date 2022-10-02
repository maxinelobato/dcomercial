import { Button, ButtonGroup, Icon, Link } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { LogoHND } from "../Footer/LogoHND";

export function ButtonSocial() {
  return (
    <ButtonGroup>
      <Link
        href="https://www.instagram.com/desintermediacaocomercial/"
        isExternal
      >
        <Button borderRadius="md" transition={"ease-out"}>
          <Icon as={FaInstagram} w={6} h={6} />
        </Button>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        href="https://www.hinode.com.br/?id_consultor=35828203"
        isExternal
      >
        <Button borderRadius="md" transition={"ease-out"}>
          <LogoHND />
        </Button>
      </Link>
    </ButtonGroup>
  );
}
