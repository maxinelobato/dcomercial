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
import { FaInstagram, FaShoppingBag } from "react-icons/fa";
import { ArrowUpIcon } from "@chakra-ui/icons";
import imgVercel from "/vercel.svg";
import imgVite from "/vite.svg";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Box
      bg="blackAlpha.900"
      color={"beige"}
      borderTop={"1px solid"}
      borderTopColor={"beige"}
    >
      <Container
        as={Stack}
        maxW={"8xl"}
        mt={8}
        py={6}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction="row" spacing={6}>
          <Link
            href="https://www.instagram.com/desintermediacaocomercial/"
            isExternal
          >
            <Icon as={FaInstagram} w={8} h={8} />
          </Link>
          <Link
            href="https://www.hinode.com.br/?id_consultor=35828203"
            isExternal
          >
            <Icon as={FaShoppingBag} w={8} h={8} />
          </Link>
        </Stack>
        <Divider />
        <Stack direction={"row"} spacing={6}>
          <Button
            color="white"
            fontWeight="bold"
            borderRadius="md"
            onClick={scrollToTop}
          >
            <ArrowUpIcon />
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
        <Stack align="center" alignContent="center">
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
    </Box>
  );
}
