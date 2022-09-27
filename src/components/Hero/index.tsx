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
import imgProducts from "../../assets/bgProducts.png";
import { ButtonCTA } from "../ButtonCTA/ButtonCTA";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { BoxGradientFooter } from "../Props/BoxGradientFooter";
import { BoxImage } from "../Props/BoxImage";
import { StyleDivider } from "../Props/StyleDivider";

export function Hero() {
  return (
    <>
      <BoxImage>
        <Navbar />
        <Container maxW={"7xl"}>
          <Stack
            display={{ base: "flex" }}
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 0 }}
          >
            <Flex align={"center"} justify={"center"} textAlign={"left"}>
              <Stack spacing={6} w={"full"} maxW={"lg"}>
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  <Highlight
                    query={["Parauapebas/PA", "Hinode?"]}
                    styles={{
                      px: "1",
                      py: "-2",
                      rounded: "lg",
                      color: "blackAlpha.800",
                      bg: "#fed832",
                    }}
                  >
                    Se você é de Parauapebas/PA e está buscando produtos Hinode?
                  </Highlight>
                </Heading>
                <Text
                  color={"whiteAlpha.700"}
                  maxW={"3xl"}
                  fontWeight={500}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
                >
                  Fale agora mesmo com um de nossos consultores.
                </Text>
                <Stack spacing={2} direction={{ base: "column", sm: "row" }}>
                  <ButtonCTA />
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Image
                loading="lazy"
                transform="scale(1.0)"
                transition="0.3s ease-in-out"
                objectFit="contain"
                _hover={{
                  transform: "scale(1.08)",
                }}
                rounded={"lg"}
                alt={""}
                mt={{ base: -10, sm: 22 }}
                src={imgProducts}
              />
            </Flex>
          </Stack>
        </Container>
      </BoxImage>
      <StyleDivider />
      <BoxGradientFooter>
        <Footer />
      </BoxGradientFooter>
    </>
  );
}