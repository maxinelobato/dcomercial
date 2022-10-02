import { Button } from "@chakra-ui/react";
import { LogoDC } from "../Footer/LogoDC";

export function ButtonDComercial() {
  return (
    <Button
      fontWeight={"normal"}
      borderRadius="md"
      borderColor="whiteAlpha.100"
      boxShadow={"inner"}
      variant="outline"
      rounded="lg"
      style={{ pointerEvents: "none" }}
    >
      <LogoDC mr={2} /> D.Comercial
    </Button>
  );
}
