import { Container, Stack, Text, VStack, Divider } from "@chakra-ui/react";
import { ButtonGroupTechs } from "../ButtonCTA/ButtonGroupTechs";
import { ButtonDComercial } from "../ButtonCTA/ButtonDComercial";
import { ButtonSocial } from "../ButtonCTA/ButtonSocial";
import { ButtonScrollToTop } from "../ButtonCTA/ButtonScrollToTop";

export function Footer() {
  return (
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
        <VStack direction={{ base: "column", md: "row" }}>
          <Text mb={-10} color={"whiteAlpha.500"}>
            &copy; {new Date().getFullYear()} D.Comercial | Todos os Direitos
            Reservados.
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
}
