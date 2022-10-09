import { Container, Stack, Text, VStack, Divider } from "@chakra-ui/react";
import { ButtonGroupTechs } from "../ButtonCTA/ButtonGroupTechs";
import { ButtonDComercial } from "../ButtonCTA/ButtonDComercial";
import { ButtonSocial } from "../ButtonCTA/ButtonSocial";
import { ButtonScrollToTop } from "../ButtonCTA/ButtonScrollToTop";
import { BoxGradientFooter } from "../Props/BoxGradientFooter";

export function Footer() {
  return (
    <BoxGradientFooter>
      <Container maxW="7xl" as="footer" py={{ base: "10", md: "10" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            align="center"
            mb={4}
          >
            <ButtonSocial />
            <ButtonScrollToTop />
          </Stack>
          <Divider bgColor="whiteAlpha.100" />
          <Stack
            justify="center"
            direction={{ base: "column", md: "row" }}
            align="center"
          >
            <ButtonGroupTechs />
          </Stack>
          <Stack
            justify="center"
            direction={{ base: "column", md: "row" }}
            align="center"
          >
            <ButtonDComercial />
          </Stack>
          <VStack direction={{ base: "column", md: "column" }}>
            <Text mb={-10} color={"whiteAlpha.500"} textAlign={"center"}>
              &copy; {new Date().getFullYear()} D.Comercial | Todos os Direitos
              Reservados.
            </Text>
          </VStack>
        </Stack>
      </Container>
    </BoxGradientFooter>
  );
}
