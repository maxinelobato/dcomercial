import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function ButtonScrollToTop() {
  return (
    <Button
      borderRadius="md"
      mt={0}
      transition={"ease-out"}
      leftIcon={<ArrowUpIcon w={6} h={6} />}
      onClick={scrollToTop}
    >
      Voltar
    </Button>
  );
}
