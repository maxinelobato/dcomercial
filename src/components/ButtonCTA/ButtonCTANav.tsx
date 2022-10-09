import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Link } from "@chakra-ui/react";
import HeadShake from "react-reveal/HeadShake";

export function ButtonCTANav() {
  return (
    <HeadShake forever={true}>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button
          textTransform="uppercase"
          fontWeight={"semibold"}
          shadow="inner"
          as="button"
          rounded="md"
          px={4}
          h={8}
          bgColor={"green.400"}
          color={"whiteAlpha.900"}
          transition="0.1s linear"
          _hover={{ bg: "green.600" }}
          rightIcon={<ArrowForwardIcon />}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            href="https://catalogo.grupohinode.com/?id_consultor=35828203"
            isExternal
          >
            veja mais produtos
          </Link>
        </Button>
      </ButtonGroup>
    </HeadShake>
  );
}
