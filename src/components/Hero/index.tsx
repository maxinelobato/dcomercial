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
import { Footer } from "../Footer";
import { Information } from "../Information";
import { Navbar } from "../Navbar";
import { BoxGradientFooter } from "../Props/BoxGradientFooter";
import { BoxGradientInfo } from "../Props/BoxGradientInfo";
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
            spacing={{ base: 8, md: 10, lg: 12 }}
            py={{ base: 10, md: 0, lg: 0 }}
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
                      bg: "orange.400",
                    }}
                  >
                    Você é de Parauapebas/PA e está buscando produtos Hinode?
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
                <Stack spacing={2} direction="row">
                  <ButtonCTA />
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Image
                boxSize={{ base: "500px", md: "700px" }}
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
        <Information />
      </BoxImage>
      <StyleDivider />
      <BoxGradientFooter>
        <Footer />
      </BoxGradientFooter>
    </>
  );
}
