import { Button, ButtonGroup, Link } from "@chakra-ui/react";
import { LogoVercel } from "../Footer/LogoVercel";
import { LogoVite } from "../Footer/LogoVite";

export function ButtonGroupTechs() {
  return (
    <ButtonGroup variant="solid">
      <Link style={{ textDecoration: "none", pointerEvents: "none" }}>
        <Button borderRadius="md" bgColor={"transparent"} fontWeight={"normal"}>
          Vite
          <LogoVite ml={2} mr={2} />
          Vercel
          <LogoVercel ml={2} mr={2} />
        </Button>
      </Link>
    </ButtonGroup>
  );
}
