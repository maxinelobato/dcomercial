import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Stat,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import img1 from "../../assets/products/banho.webp";
import img2 from "../../assets/products/rosto.webp";
import img3 from "../../assets/products/fragrancias.webp";
import img4 from "../../assets/products/infantil.webp";
import img5 from "../../assets/products/cabelo.webp";
import img6 from "../../assets/products/maquiagem.webp";
import img7 from "../../assets/products/bemestar.webp";
import img8 from "../../assets/products/performance.webp";
import img9 from "../../assets/products/melhorpreco.webp";

export function MoreProducts() {
  return (
    <Container maxW="7xl">
      <Stack
        display={{ base: "flex" }}
        direction={{ base: "column", md: "column" }}
        spacing={{ base: 6, md: 8, lg: 10 }}
        pb={{ base: 6, md: 8, lg: 16 }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          São mais de 400 produtos
        </Heading>
        <Text
          color={"whiteAlpha.700"}
          maxW={"7xl"}
          fontWeight={500}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          textAlign={"center"}
        >
          Escolha uma categoria de sua preferência e fale conosco pelo whatsapp
          ou se preferir compre diretamente pela Loja Oficial.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {/* CORPO E BANHO */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img1} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Corpo e Banho
                </Heading>

                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=10"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
          {/* ROSTO */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img2} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Rosto
                </Heading>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=20"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
          {/* FRAGRÂNCIAS */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img3} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Fragrâncias
                </Heading>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=26"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
          {/* INFANTIL */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img4} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Infantil
                </Heading>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=54"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
          {/* CABELOS */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img5} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Cabelos
                </Heading>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=60"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
          {/* MAQUIAGEM */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img6} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Maquiagem
                </Heading>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=84"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
          {/* VIDA SAUDÁVEL */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img7} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Vida Saudável
                </Heading>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=66"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
          {/* BEM ESTAR */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img8} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Bem-Estar
                </Heading>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=82"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
          {/* OFERTAS */}
          <Stat
            boxShadow="lg"
            backdropFilter="blur(4px)"
            backdropBlur="base"
            border={"1px solid"}
            bgColor="whiteAlpha.200"
            borderColor="whiteAlpha.200"
            rounded={"md"}
            overflow={"hidden"}
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="50%" src={img9} />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Ofertas
                </Heading>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    rounded={"lg"}
                    bg={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(237 137 54 / 48%), 0 10px 10px -5px rgb(237 137 54 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      href="https://catalogo.grupohinode.com/?id_consultor=35828203&page=58"
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      fale conosco
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stat>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
