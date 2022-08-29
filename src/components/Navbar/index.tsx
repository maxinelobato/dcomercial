import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  Button,
  Image,
} from "@chakra-ui/react";
import imgHND from "/hinodegroup.svg";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bgColor="blackAlpha.50"
        backdropFilter="auto"
        backdropBlur="1rem"
        px={4}
        zIndex={2}
        position={"fixed"}
        w={"full"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"center"}>
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <Link
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            style={{ textDecoration: "none" }}
            href="https://www.hinode.com.br/?id_consultor=35828203"
            isExternal
          >
            <Button borderRadius="md" bgColor="orange.500">
              Loja Oficial
              <Image ml={2} h={32} w={32} src={imgHND} alt="HND Ecommerce" />
            </Button>
          </Link>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://www.hinode.com.br/?id_consultor=35828203"
                isExternal
              >
                <Button borderRadius="md" bgColor="orange.500">
                  Não achou o seu produto? Acesse o Link da Loja Oficial
                  <Image
                    ml={2}
                    h={36}
                    w={36}
                    src={imgHND}
                    alt="HND Ecommerce"
                  />
                </Button>
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {/* {isOpen ? (
          <Box
            pb={10}
            display={{ md: "none" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              pt={6}
              as={"nav"}
              spacing={4}
              align={"center"}
              justifyContent="center"
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://www.hinode.com.br/?id_consultor=35828203"
                isExternal
              >
                <Button borderRadius="md" bgColor="orange.500">
                  Loja Oficial
                  <Image
                    ml={2}
                    h={32}
                    w={32}
                    src={imgHND}
                    alt="HND Ecommerce"
                  />
                </Button>
              </Link>
            </Stack>
          </Box>
        ) : null} */}
      </Box>
      <Box p={6} />
    </>
  );
}
