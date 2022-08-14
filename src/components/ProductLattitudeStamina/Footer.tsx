import {
  Box,
  Container,
  Stack,
  Image,
  Icon,
  Link,
  Button,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { ArrowUpIcon } from "@chakra-ui/icons";
import imgVercel from "/vercel.svg";
import imgVite from "/vite.svg";
import imgHND from "/hinodegroup.svg";
import imgDC from "/dcomercialfooter.svg";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Box bg="blackAlpha.900">
      <Container
        as={Stack}
        maxW={"7xl"}
        py={10}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
        spacing={4}
      >
        <Stack direction="row" spacing={6}>
          <Link
            href="https://www.instagram.com/desintermediacaocomercial/"
            isExternal
          >
            <Button borderRadius="md" mt={0}>
              <Icon as={FaInstagram} w={6} h={6} />
            </Button>
          </Link>
          <Link
            href="https://www.hinode.com.br/?id_consultor=35828203"
            isExternal
          >
            <Button borderRadius="md" mt={0}>
              <Image h={32} w={32} src={imgHND} alt="HND Ecommerce" />
            </Button>
          </Link>
        </Stack>
        <Stack direction={"row"} spacing={6}>
          <Button
            color="gray.400"
            leftIcon={<ArrowUpIcon />}
            onClick={scrollToTop}
          >
            Voltar para o topo
          </Button>
        </Stack>
      </Container>
      <Container
        as={Stack}
        mt={-10}
        py={8}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack align="center" alignContent="center" color="whiteAlpha.400">
          <Box py={2}>
            <Flex
              align={"center"}
              _before={{
                content: '""',
                flexGrow: 1,
                mr: 8,
              }}
              _after={{
                content: '""',
                flexGrow: 1,
                ml: 8,
              }}
            >
              Hospedado por
              <Image
                h={4}
                w={4}
                src={imgVercel}
                alt="Development with Vite"
                m={[2, 0, 0, 2]}
              />
              Vercel e Desenvolvido com
              <Image
                h={4}
                w={4}
                src={imgVite}
                alt="Development with Vite"
                m={[2, 0, 0, 2]}
              />
              Vite
            </Flex>
          </Box>
          <Box>
            <Text pt={2} fontSize={"sm"} textAlign={"center"}>
              © 2022 D.Comercial. Todos os Direitos Reservados.
            </Text>
          </Box>
        </Stack>
      </Container>
      <Container
        as={Stack}
        mt={-10}
        py={8}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack align="center" alignContent="center">
          <Box>
            <Flex
              align={"center"}
              _before={{
                content: '""',
                flexGrow: 1,
                mr: 8,
              }}
              _after={{
                content: '""',
                flexGrow: 1,
                ml: 8,
              }}
            >
              <Image
                h={8}
                w={8}
                src={imgDC}
                alt="D.Comercial"
                m={[1, 0, 0, 1]}
              />
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
