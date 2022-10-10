import {
  Stack,
  Text,
  Image,
  useBreakpointValue,
  Heading,
  Flex,
  Container,
  Highlight,
} from "@chakra-ui/react";
import imgProducts from "../../assets/bgProducts.webp";
import { ButtonCTA } from "../ButtonCTA/ButtonCTA";

export function Hero() {
  return (
    <>
      <Container maxW={"7xl"}>
        <Stack
          display={{ base: "flex" }}
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 10, lg: 12 }}
          py={{ base: 12, md: 0, lg: 10 }}
        >
          <Flex align={"center"} justify={"center"} textAlign={"left"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Highlight
                  query={["Hinode Group", "400"]}
                  styles={{
                    rounded: "lg",
                    color: "blackAlpha.800",
                    bg: "orange.400",
                  }}
                >
                  Você está buscando produtos Hinode Group. São mais de 400 para
                  você escolher.
                </Highlight>
              </Heading>
              <Text
                color={"whiteAlpha.700"}
                maxW={"3xl"}
                fontWeight={500}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
              >
                Fale agora mesmo com um de nossos consultores e escolha o seu
                produto.
              </Text>
              <Stack spacing={2} direction="row" pb={{ base: "10", md: "0" }}>
                <ButtonCTA />
              </Stack>
            </Stack>
          </Flex>
          <Flex
            flex={1}
            align={"center"}
            justify={{ base: "center", md: "end" }}
          >
            <Image
              boxSize={{ base: "300px", md: "500px" }}
              transform="scale(1.0)"
              transition="0.3s ease-in-out"
              objectFit="contain"
              css={{ filter: "drop-shadow(0 0 1rem rgb(255,255,255))" }}
              rounded={"lg"}
              alt={"Image Products"}
              mt={{ base: -10, sm: 22 }}
              src={imgProducts}
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
