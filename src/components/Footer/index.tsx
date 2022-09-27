import {
  Button,
  ButtonGroup,
  Container,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { LogoDC } from "./LogoDC";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { LogoHND } from "./LogoHND";
import { LogoVite } from "./LogoVite";
import { LogoVercel } from "./LogoVercel";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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
          <ButtonGroup>
            <Link
              href="https://www.instagram.com/desintermediacaocomercial/"
              isExternal
            >
              <Button
                borderRadius="md"
                mt={0}
                transition={"ease-out"}
                bgGradient="radial(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
              >
                <Icon as={FaInstagram} w={6} h={6} />
              </Button>
            </Link>
            <Link
              href="https://www.hinode.com.br/?id_consultor=35828203"
              isExternal
            >
              <Button
                borderRadius="md"
                mt={0}
                transition={"ease-out"}
                bgColor="#fed832"
                _hover={{ bg: "#e2d6bc", color: "#3a334f" }}
              >
                <LogoHND />
              </Button>
            </Link>
          </ButtonGroup>
          <Button
            borderRadius="md"
            mt={0}
            transition={"ease-out"}
            leftIcon={<ArrowUpIcon w={6} h={6} />}
            onClick={scrollToTop}
          >
            Voltar
          </Button>
        </Stack>
        <Divider bgColor="whiteAlpha.100" />
        <Stack
          justify="center"
          direction={{ base: "column", md: "row" }}
          align="center"
          color={"#e2d6bc"}
        >
          <ButtonGroup variant="solid">
            <Link style={{ textDecoration: "none", pointerEvents: "none" }}>
              <Button
                borderRadius="md"
                bgColor={"transparent"}
                fontWeight={"normal"}
              >
                Vite
                <LogoVite ml={2} mr={2} />
                Vercel
                <LogoVercel ml={2} mr={2} />
              </Button>
            </Link>
          </ButtonGroup>
        </Stack>
        <Stack
          justify="center"
          direction={{ base: "column", md: "row" }}
          align="center"
        >
          <Button
            borderRadius="md"
            borderColor="whiteAlpha.100"
            boxShadow={"inner"}
            variant="outline"
            rounded="lg"
            style={{ pointerEvents: "none" }}
          >
            <LogoDC />
          </Button>
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
