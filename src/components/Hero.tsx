import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Stack,
  Image,
  Badge,
  Link,
} from "@chakra-ui/react";
import { VideoBG } from "./VideoBG";
import imgURL from "./image/empireabsolut.jpg";
import { StarIcon } from "@chakra-ui/icons";
import Fade from "react-reveal/Fade";

export default function Hero() {
  const property = {
    imageUrl: imgURL,
    imageAlt: "Empire Absolut",
    title: "Família Olfativa: Oriental Amadeirado Ambarado",
    formattedPrice: "R$156,90",
    reviewCount: 2,
    rating: 2,
  };
  return (
    <Box
      w="100%"
      bgGradient={[
        "linear(to-tr, #d1b287, #ead0ad)",
        "linear(to-t, #ead0ad, #d1b287)",
        "linear(to-b, ##FBF3E5, #ead0ad)",
      ]}
    >
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Box
              overflow="hidden"
              backdropFilter="auto"
              backdropBlur="1rem"
              boxShadow="lg"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.400"
              rounded="lg"
            >
              <Image
                src={property.imageUrl}
                alt={property.imageAlt}
                rounded="lg"
              />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge
                    borderRadius="full"
                    variant="solid"
                    px="2"
                    colorScheme="orange"
                  >
                    Lançamento
                  </Badge>
                </Box>
                <Box
                  color="blackAlpha.700"
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {property.title}
                </Box>
                <Box color="blackAlpha.700" fontSize="lg" fontWeight="bold">
                  {property.formattedPrice}
                  <Box as="span" color="blackAlpha.700" fontSize="sm">
                    / à Vista ou no Cartão
                  </Box>
                </Box>
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < property.rating ? "orange.500" : "blackAlpha.400"
                        }
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount} Avaliações
                  </Box>
                </Box>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  spacing={4}
                  mt={4}
                >
                  <Button
                    size="lg"
                    rounded={"lg"}
                    bgColor={"orange.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(0 0 0 / 48%), 0 10px 10px -5px rgb(0 0 0 / 43%)"
                    }
                    _hover={{
                      bg: "orange.500",
                    }}
                    _focus={{
                      bg: "orange.500",
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      href="https://www.hinode.com.br/empire-absolut-deo-colonia/p/?id_consultor=35828203"
                      isExternal
                    >
                      ADQUIRA AGORA MESMO
                    </Link>
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Box
            m={[0, 0, 0, 52]}
            zIndex={2}
            rounded="lg"
            overflow="hidden"
            alignItems="baseline"
            position="absolute"
            boxShadow="lg"
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.400"
            maxW="lg"
            p={6}
          >
            <Heading lineHeight="tall" color={"orange.400"} textAlign="center">
              <Fade duration={1000} left>
                <Highlight
                  query={["Único", "Experiências", "Marcam"]}
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "lg",
                    bg: "orange.400",
                    color: "whiteAlpha.900",
                  }}
                >
                  Torne este dia Único e com Experiências que Marcam pra toda a
                  vida!
                </Highlight>
              </Fade>
              <br />
              <Fade duration={2000} left>
                <Highlight
                  query={["Feliz Dia dos Pais"]}
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "lg",
                    bg: "orange.400",
                    color: "whiteAlpha.900",
                  }}
                >
                  Feliz Dia dos Pais
                </Highlight>
              </Fade>
            </Heading>
          </Box>
          <VideoBG />
        </Flex>
      </Stack>
    </Box>
  );
}
